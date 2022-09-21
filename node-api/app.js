const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const createError = require("http-errors");

const { Project } = require("./routes");

const app = express();

// config middleware
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config routes
app.use("/api/project", Project);

app.use((req, res, next) => {
  next(createError(404));
});
// error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

module.exports = app;
