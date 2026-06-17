import Employee from "../models/Employee.js";
import buildEmployeeFilters from "../utils/filterBuilder.js";
import getPagination from "../utils/pagination.js";
import AppError from "../utils/AppError.js";

export const getAllEmployees = async (query) => {
  const filters = buildEmployeeFilters(query);
  const { page, limit, skip } = getPagination(query.page, query.limit);

  let sort = {};
  if (query.sort) {
    const fieldMap = {
      name: "name",
      experience: "profile.projects.tasks.assignedTo.skills.experience.years",
      country: "profile.contact.address.location.country",
      city: "profile.contact.address.city",
      lastUpdated: "profile.projects.tasks.assignedTo.skills.experience.meta.lastUpdated",
    };
    const sortField = fieldMap[query.sort] || query.sort;
    const order = query.order && query.order.toLowerCase() === "desc" ? -1 : 1;
    sort[sortField] = order;
  } else {
    sort["createdAt"] = -1;
  }

  const employees = await Employee.find(filters)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Employee.countDocuments(filters);

  return {
    employees,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getEmployeeById = async (id) => {
  const employee = await Employee.findOne({ id });
  if (!employee) {
    throw new AppError(`Employee with ID ${id} not found`, 404);
  }
  return employee;
};

export const createEmployee = async (employeeData) => {
  const existing = await Employee.findOne({ id: employeeData.id });
  if (existing) {
    throw new AppError(`Employee with ID ${employeeData.id} already exists`, 400);
  }
  const employee = await Employee.create(employeeData);
  return employee;
};

export const updateEmployeePut = async (id, employeeData) => {
  const employee = await Employee.findOneAndReplace({ id }, employeeData, {
    new: true,
    runValidators: true,
  });
  if (!employee) {
    throw new AppError(`Employee with ID ${id} not found`, 404);
  }
  return employee;
};

export const updateEmployeePatch = async (id, employeeData) => {
  const employee = await Employee.findOneAndUpdate({ id }, { $set: employeeData }, {
    new: true,
    runValidators: true,
  });
  if (!employee) {
    throw new AppError(`Employee with ID ${id} not found`, 404);
  }
  return employee;
};

export const deleteEmployee = async (id) => {
  const employee = await Employee.findOneAndDelete({ id });
  if (!employee) {
    throw new AppError(`Employee with ID ${id} not found`, 404);
  }
  return employee;
};

export const checkEmployeeExists = async (id) => {
  const count = await Employee.countDocuments({ id });
  return count > 0;
};

export const bulkCreateEmployees = async (employeesData) => {
  if (!Array.isArray(employeesData) || employeesData.length === 0) {
    throw new AppError("Invalid payload, array of employees expected", 400);
  }
  const result = await Employee.insertMany(employeesData);
  return result;
};

export const bulkUpdateEmployees = async (updates) => {
  if (!Array.isArray(updates) || updates.length === 0) {
    throw new AppError("Invalid payload, array of updates expected", 400);
  }
  const bulkOps = updates.map((update) => ({
    updateOne: {
      filter: { id: update.id },
      update: { $set: update.data },
    },
  }));
  const result = await Employee.bulkWrite(bulkOps);
  return result;
};

export const bulkDeleteEmployees = async (ids) => {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw new AppError("Invalid payload, array of IDs expected", 400);
  }
  const result = await Employee.deleteMany({ id: { $in: ids } });
  return result;
};
