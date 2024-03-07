import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "L'email ne peut pas être vide.",
          },
        },
      },
      password: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Mot de passe ne peut pas être vide.",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Role ne peut pas être vide.",
          },
        },
      },
      activated: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
  },
  { freezeTableName: true }
);

export default User;
