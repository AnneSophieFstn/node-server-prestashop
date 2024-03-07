import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Service = sequelize.define(
  "Services",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Le nom ne peut pas être vide.",
        },
      },
    },
  },
  { freezeTableName: true }
);

export default Service;
