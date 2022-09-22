const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "secret";
const { User } = require("../models");

const authAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return next(createError(401));
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return next(createError(403));
    User.findOne(user)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => next(err));
  });
};

module.exports = authAdmin;
