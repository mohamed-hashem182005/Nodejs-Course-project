const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.error("❌ Error inside asyncWrapper:", err.message); // 👈 هيطبع الخطأ في الـ console
      next(err);
    }
  };
};

module.exports = asyncWrapper;
