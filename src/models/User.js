const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define("User", {
  // Definimos las columnas aquí
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
