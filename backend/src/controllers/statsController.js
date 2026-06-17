import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";
import * as statsService from "../services/statsService.js";

export const getOverview = asyncHandler(async (req, res) => {
  const data = await statsService.getOverview();
  res.status(200).json(successResponse(data, "Statistics overview fetched successfully"));
});
