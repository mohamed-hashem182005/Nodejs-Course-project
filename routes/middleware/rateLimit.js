const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    status: "fail",
    message: "Too many login attempts, try again later"
  }
});

module.exports = loginLimiter;
