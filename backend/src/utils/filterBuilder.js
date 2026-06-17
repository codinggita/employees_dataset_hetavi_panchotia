const buildEmployeeFilters = (query) => {
  const filters = {};

  if (query.country) {
    filters[
      "profile.contact.address.location.country"
    ] = query.country;
  }

  if (query.state) {
    filters[
      "profile.contact.address.location.state"
    ] = query.state;
  }

  if (query.city) {
    filters[
      "profile.contact.address.city"
    ] = query.city;
  }

  if (query.primarySkill) {
    filters[
      "profile.projects.tasks.assignedTo.skills.primary"
    ] = query.primarySkill;
  }

  if (query.experience) {
    filters[
      "profile.projects.tasks.assignedTo.skills.experience.years"
    ] = Number(query.experience);
  }

  return filters;
};

export default buildEmployeeFilters;