const getPagination = (page = 1, limit = 10) => {
  const currentPage = Math.max(parseInt(page, 10) || 1, 1);
  const pageLimit = Math.max(parseInt(limit, 10) || 10, 1);

  const skip = (currentPage - 1) * pageLimit;

  return {
    page: currentPage,
    limit: pageLimit,
    skip,
  };
};

export default getPagination;