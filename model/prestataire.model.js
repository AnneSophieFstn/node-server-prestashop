import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import User from "./user.model.js";

const Prestataire = sequelize.define(
  "Prestataires",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Le nom ne peut pas être vide.",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Le numéro de telephone ne peut pas être vide.",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "La description ne peut pas être vide.",
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "La ville ne peut pas être vide.",
        },
      },
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
        onDelete: "CASCADE",
      },
    },
  },
  { freezeTableName: true }
);

export default Prestataire;
