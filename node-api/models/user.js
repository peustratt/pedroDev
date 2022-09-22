const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
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

module.exports = User;