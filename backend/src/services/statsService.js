import Employee from "../models/Employee.js";

// Overview statistics aggregation
export const getOverview = async () => {
  // Total employees
  const totalEmployeesAgg = await Employee.aggregate([
    { $count: "totalEmployees" }
  ]);
  const totalEmployees = totalEmployeesAgg[0]?.totalEmployees || 0;

  // Average years of experience across all skill entries
  const avgExperienceAgg = await Employee.aggregate([
    { $unwind: "$profile.projects.tasks.assignedTo.skills.experience.years" },
    { $group: { _id: null, averageExperience: { $avg: "$profile.projects.tasks.assignedTo.skills.experience.years" } } }
  ]);
  const averageExperience = avgExperienceAgg[0]?.averageExperience || 0;

  // Verified employees (distinct employees with any verified certification)
  const verifiedEmployeesAgg = await Employee.aggregate([
    { $match: { "profile.projects.tasks.assignedTo.skills.experience.certifications.meta.verified": true } },
    { $group: { _id: "$_id" } },
    { $count: "verifiedEmployees" }
  ]);
  const verifiedEmployees = verifiedEmployeesAgg[0]?.verifiedEmployees || 0;

  // Total projects
  const totalProjectsAgg = await Employee.aggregate([
    { $unwind: "$profile.projects" },
    { $group: { _id: null, totalProjects: { $sum: 1 } } }
  ]);
  const totalProjects = totalProjectsAgg[0]?.totalProjects || 0;

  // Total tasks
  const totalTasksAgg = await Employee.aggregate([
    { $unwind: "$profile.projects" },
    { $unwind: "$profile.projects.tasks" },
    { $group: { _id: null, totalTasks: { $sum: 1 } } }
  ]);
  const totalTasks = totalTasksAgg[0]?.totalTasks || 0;

  return {
    totalEmployees,
    averageExperience,
    verifiedEmployees,
    totalProjects,
    totalTasks,
  };
};
