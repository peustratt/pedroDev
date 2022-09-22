const authApiKey = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return next(createError(401));
  if (token === process.env.API_KEY) {
    next();
  } else {
    next(createError(403));
  }
};

module.exports = authApiKey;
