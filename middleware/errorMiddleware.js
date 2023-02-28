function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // only send the stack trace in development
  const stack = process.env.NODE_ENV === "development" ? err.stack : "";

  res.status(statusCode).json({ message, stack });
}

module.exports = {
  errorHandler,
};
