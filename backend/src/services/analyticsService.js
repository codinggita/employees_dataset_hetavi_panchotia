import Employee from "../models/Employee.js";

// Top Skills aggregation
export const getTopSkills = async () => {
  return await Employee.aggregate([
    { $unwind: "$profile.projects.tasks.assignedTo.skills.primary" },
    { $group: { _id: "$profile.projects.tasks.assignedTo.skills.primary", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
};

// Top Domains aggregation
export const getTopDomains = async () => {
  return await Employee.aggregate([
    { $unwind: "$profile.projects.tasks.assignedTo.skills.experience.domains" },
    { $group: { _id: "$profile.projects.tasks.assignedTo.skills.experience.domains", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
};

// Top Certifications aggregation
export const getTopCertifications = async () => {
  return await Employee.aggregate([
    { $unwind: "$profile.projects.tasks.assignedTo.skills.experience.certifications.current" },
    { $group: { _id: "$profile.projects.tasks.assignedTo.skills.experience.certifications.current", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
};

// Location distribution aggregation (country, state, city)
export const getLocationDistribution = async () => {
  return await Employee.aggregate([
    { $group: {
        _id: {
          country: "$profile.contact.address.location.country",
          state: "$profile.contact.address.location.state",
          city: "$profile.contact.address.city"
        },
        count: { $sum: 1 }
      }
    },
    { $project: { _id: 0, country: "$_id.country", state: "$_id.state", city: "$_id.city", count: 1 } },
    { $sort: { count: -1 } }
  ]);
};

// Experience distribution aggregation (years of experience)
export const getExperienceDistribution = async () => {
  return await Employee.aggregate([
    { $unwind: "$profile.projects.tasks.assignedTo.skills.experience.years" },
    { $group: { _id: "$profile.projects.tasks.assignedTo.skills.experience.years", count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
  ]);
};

// Project distribution aggregation (project names)
export const getProjectDistribution = async () => {
  return await Employee.aggregate([
    { $unwind: "$profile.projects" },
    { $group: { _id: "$profile.projects.name", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
};
