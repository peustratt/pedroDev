const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

sequelize
  .sync()
  .then(() => {
    console.log("User table sync!");
  })
  .catch((err) => {
    console.log("Unable to create table : ", err);
  });

module.exports = User;