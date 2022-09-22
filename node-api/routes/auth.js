const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "secret";

const { User } = require("../models");

router.route("/").post((req, res, next) =>
  Promise.resolve()
    .then(() => User.findOne({ user: req.body.user }))
    .then((user) =>
      user
        ? bcrypt
            .compare(req.body.password, user.password)
            .then((isValidated) =>
              isValidated
                ? jwt.sign(JSON.stringify(user), ACCESS_TOKEN_SECRET)
                : next(createError(401))
            )
        : next(createError(404))
    )
    .then((accessToken) => res.json({ accessToken }))
    .catch((err) => next(err))
);

module.exports = router;
