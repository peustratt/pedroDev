const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");
const USER = process.env.USER;
const PASSWORD = process.env.USER_PASSWORD;

router.route("/").get((req, res, next) =>
  Promise.resolve()
    .then(() => bcrypt.hash(PASSWORD, 10))
    .then((hash) =>
      User.create({
        user: USER,
        password: hash,
      })
    )
    .then((user) => res.status(200).json(user))
    .catch((err) => next(err))
);

module.exports = router;
