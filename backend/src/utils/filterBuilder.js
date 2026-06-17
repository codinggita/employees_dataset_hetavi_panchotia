const buildEmployeeFilters = (query) => {
  const filters = {};

  if (query.country) {
    filters["profile.contact.address.location.country"] = query.country;
  }

  if (query.state) {
    filters["profile.contact.address.location.state"] = query.state;
  }

  if (query.city) {
    filters["profile.contact.address.city"] = query.city;
  }

  if (query.primarySkill) {
    filters["profile.projects.tasks.assignedTo.skills.primary"] = query.primarySkill;
  }

  if (query.secondarySkill) {
    filters["profile.projects.tasks.assignedTo.skills.secondary"] = query.secondarySkill;
  }

  if (query.domain) {
    filters["profile.projects.tasks.assignedTo.skills.experience.domains"] = query.domain;
  }

  if (query.experience) {
    filters["profile.projects.tasks.assignedTo.skills.experience.years"] = Number(query.experience);
  }

  if (query.verified !== undefined) {
    filters["profile.projects.tasks.assignedTo.skills.experience.certifications.meta.verified"] = query.verified === "true";
  }

  if (query.certification) {
    filters["$or"] = [
      { "profile.projects.tasks.assignedTo.skills.experience.certifications.current": query.certification },
      { "profile.projects.tasks.assignedTo.skills.experience.certifications.expired": query.certification }
    ];
  }

  if (query.timezone) {
    filters["profile.contact.address.location.geo.timezone.name"] = query.timezone;
  }

  return filters;
};

export default buildEmployeeFilters;