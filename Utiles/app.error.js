class AppError extends Error {
  constructor(message, statusCode, statusText) {
    super(message); // يورّث الرسالة من Error
    this.statusCode = statusCode;
    this.statusText = statusText;
    Error.captureStackTrace(this, this.constructor); // يخلي stack trace أنضف
  }
}

module.exports = AppError;
