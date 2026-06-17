import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";
import * as analyticsService from "../services/analyticsService.js";

export const getTopSkills = asyncHandler(async (req, res) => {
  const result = await analyticsService.getTopSkills();
  res.status(200).json(successResponse(result, "Top skills fetched successfully"));
});

export const getTopDomains = asyncHandler(async (req, res) => {
  const result = await analyticsService.getTopDomains();
  res.status(200).json(successResponse(result, "Top domains fetched successfully"));
});

export const getTopCertifications = asyncHandler(async (req, res) => {
  const result = await analyticsService.getTopCertifications();
  res.status(200).json(successResponse(result, "Top certifications fetched successfully"));
});

export const getLocationDistribution = asyncHandler(async (req, res) => {
  const result = await analyticsService.getLocationDistribution();
  res.status(200).json(successResponse(result, "Location distribution fetched successfully"));
});

export const getExperienceDistribution = asyncHandler(async (req, res) => {
  const result = await analyticsService.getExperienceDistribution();
  res.status(200).json(successResponse(result, "Experience distribution fetched successfully"));
});

export const getProjectDistribution = asyncHandler(async (req, res) => {
  const result = await analyticsService.getProjectDistribution();
  res.status(200).json(successResponse(result, "Project distribution fetched successfully"));
});
