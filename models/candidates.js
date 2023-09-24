"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {}
  }

  Candidate.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        field: "id",
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        field: "name",
        type: DataTypes.STRING,
      },
      permanentAddress: {
        allowNull: true,
        field: "permanent_address",
        type: DataTypes.TEXT,
      },
      currentAddress: {
        allowNull: true,
        field: "current_address",
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: "candidates",
      modelName: "Candidate",
      timestamps: true,
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Candidate;
};
