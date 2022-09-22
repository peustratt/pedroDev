const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");

router.route("/").get((req, res, next) =>
  Promise.resolve()
    .then(() => bcrypt.hash(process.env.USER_PASSWORD, 10))
    .then((hash) =>
      User.create({
        user: process.env.USER,
        password: hash,
      })
    )
    .then((user) => res.status(200).json(user))
    .catch((err) => next(err))
);

module.exports = router;
