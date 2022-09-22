const router = require("express").Router();

const { Project } = require("../models");
const authAdmin = require("../middleware/authAdmin");
const authApiKey = require("../middleware/authApiKey");

router
  .route("/")
  .get([
    authApiKey,
    (req, res, next) =>
      Promise.resolve()
        .then(() => Project.findAll())
        .then((projects) => res.json(projects))
        .catch((err) => next(err)),
  ])
  .post([
    authAdmin,
    (req, res, next) =>
      Promise.resolve()
        .then(() => Project.create(req.body))
        .then((project) => res.status(201).json(project))
        .catch((err) => next(err)),
  ]);

module.exports = router;
