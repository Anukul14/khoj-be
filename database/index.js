"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const baseModelPath = `${__dirname}/../models`;
const Models = fs
  .readdirSync(baseModelPath)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
  })
  .map((file) => require(path.join(baseModelPath, file)));

class DatabaseContext {
  static loadSequelize = async () => {
    try {
      this._sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          dialect: process.env.DB_DIALECT,
          // logging: false
        },
      );
      await this._sequelize.authenticate();
      console.log("connected to db");
      return this._sequelize;
    } catch (error) {
      throw error;
    }
  };

  static connect = async () => {
    if (!this._sequelize) {
      this._sequelize = await this.loadSequelize();
      const db = {};
      Models.forEach((modelDef) => {
        const model = modelDef(this._sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      });

      Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
          db[modelName].associate(db);
        }
      });
      db.sequelize = this._sequelize;
      db.Sequelize = Sequelize;
      this._db = db;
    } else {
      this._sequelize.connectionManager.initPools();
    }
    return this._db;
  };

  static get db() {
    return this._db;
  }
}

module.exports = DatabaseContext;
