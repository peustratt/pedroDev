const sequelize = new Sequelize(
  "portfolio",
  "root",
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Unable to connect to database", err);
  });

module.exports = sequelize;

