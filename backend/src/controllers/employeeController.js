import * as employeeService from "../services/employeeService.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";

export const getAll = asyncHandler(async (req, res, next) => {
  const result = await employeeService.getAllEmployees(req.query);
  res.status(200).json(successResponse(result, "Employees fetched successfully"));
});

export const getById = asyncHandler(async (req, res, next) => {
  const employee = await employeeService.getEmployeeById(req.params.id);
  res.status(200).json(successResponse(employee, "Employee fetched successfully"));
});

export const create = asyncHandler(async (req, res, next) => {
  const employee = await employeeService.createEmployee(req.body);
  res.status(201).json(successResponse(employee, "Employee created successfully"));
});

export const updatePut = asyncHandler(async (req, res, next) => {
  const employee = await employeeService.updateEmployeePut(req.params.id, req.body);
  res.status(200).json(successResponse(employee, "Employee replaced successfully"));
});

export const updatePatch = asyncHandler(async (req, res, next) => {
  const employee = await employeeService.updateEmployeePatch(req.params.id, req.body);
  res.status(200).json(successResponse(employee, "Employee updated successfully"));
});

export const deleteById = asyncHandler(async (req, res, next) => {
  await employeeService.deleteEmployee(req.params.id);
  res.status(200).json(successResponse(null, "Employee deleted successfully"));
});

export const checkExists = asyncHandler(async (req, res, next) => {
  const exists = await employeeService.checkEmployeeExists(req.params.id);
  res.status(200).json(successResponse({ exists }, "Checked employee existence"));
});

export const bulkCreate = asyncHandler(async (req, res, next) => {
  const result = await employeeService.bulkCreateEmployees(req.body);
  res.status(201).json(successResponse(result, "Bulk employees created successfully"));
});

export const bulkUpdate = asyncHandler(async (req, res, next) => {
  const result = await employeeService.bulkUpdateEmployees(req.body);
  res.status(200).json(successResponse(result, "Bulk employees updated successfully"));
});

export const bulkDelete = asyncHandler(async (req, res, next) => {
  const result = await employeeService.bulkDeleteEmployees(req.body.ids);
  res.status(200).json(successResponse(result, "Bulk employees deleted successfully"));
});
