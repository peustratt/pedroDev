const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "black-magic";

const sequelize = new Sequelize("portfolio", "root", MYSQL_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Unable to connect to database", err);
  });

module.exports = sequelize;
