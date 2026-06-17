export const successResponse = (
  data,
  message = "Success"
) => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (
  message = "Something went wrong",
  error = null
) => {
  return {
    success: false,
    message,
    error,
  };
};