import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";
import Employee from "../models/Employee.js";

// GET /api/v1/search/employees?q=keyword
export const searchEmployees = asyncHandler(async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ success: false, message: "Query parameter 'q' is required" });
  }
  const regex = new RegExp(q, "i"); // case‑insensitive

  const searchConditions = [
    { name: regex },
    { "profile.contact.address.location.country": regex },
    { "profile.contact.address.location.state": regex },
    { "profile.contact.address.city": regex },
    { "profile.projects.tasks.assignedTo.skills.primary": regex },
    { "profile.projects.tasks.assignedTo.skills.secondary": regex },
    { "profile.projects.tasks.assignedTo.skills.experience.domains": regex },
    { "profile.projects.tasks.assignedTo.skills.experience.certifications.current": regex },
    { "profile.projects.tasks.assignedTo.skills.experience.certifications.expired": regex },
    { "profile.projects.tasks.assignedTo.skills.experience.certifications.meta.verified": regex }
  ];

  const employees = await Employee.find({ $or: searchConditions }).limit(100);
  res.status(200).json(successResponse(employees, "Search results fetched successfully"));
});
