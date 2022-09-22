const router = require("express").Router();
const jtw = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const { User } = require("../models");

router.route("/").get((req, res, next) =>
  Promise.resolve()
    .then(() => User.findOne(req.body))
    .then((user) => {
      user
        ? bcrypt
            .compare(req.body.password, user.password)
            .then((isValidated) =>
              isValidated
                ? jtw.sign(user.name, ACCESS_TOKEN_SECRET)
                : createError(401)
            )
        : next(createError(404));
    })
    .then((token) => res.status(200).json({ token }))
    .catch((err) => next(err))
);

module.exports = router;
