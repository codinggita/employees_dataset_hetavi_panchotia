import * as authService from "../services/authService.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";

export const register = asyncHandler(async (req, res, next) => {
  const { user, accessToken, refreshToken } = await authService.register(req.body);
  res.status(201).json(
    successResponse(
      { user, accessToken, refreshToken },
      "User registered successfully"
    )
  );
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const { user, accessToken, refreshToken } = await authService.login(email, password);
  res.status(200).json(
    successResponse(
      { user, accessToken, refreshToken },
      "Logged in successfully"
    )
  );
});

export const getProfile = asyncHandler(async (req, res, next) => {
  const user = await authService.getProfile(req.user._id);
  res.status(200).json(
    successResponse(
      user,
      "Profile fetched successfully"
    )
  );
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  const user = await authService.updateProfile(req.user._id, req.body);
  res.status(200).json(
    successResponse(
      user,
      "Profile updated successfully"
    )
  );
});

export const refresh = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.body;
  const tokens = await authService.refresh(refreshToken);
  res.status(200).json(
    successResponse(
      tokens,
      "Token refreshed successfully"
    )
  );
});
