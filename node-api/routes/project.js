const router = require("express").Router();

router.route("/").get((req, res, next) =>
  Promise.resolve()
    .then(() => ({ name: "project" }))
    .then((project) => res.json(project))
    .catch((err) => next(err))
);

module.exports = router;
