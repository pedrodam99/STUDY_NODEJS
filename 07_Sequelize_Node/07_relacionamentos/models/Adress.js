const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = require("./User");

const Adress = db.define("Adress", {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  street: {
    type: DataTypes.STRING,
    required: true,
  },
});

Adress.belongsTo(User);

module.exports = Adress;
