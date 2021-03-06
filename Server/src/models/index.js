'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
import { format } from 'date-fns';
import moment from 'moment';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};
require('dotenv').config();
const pg = require('pg');
pg.types.setTypeParser(1114, (str) =>moment(str).tz("+07").format());

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

const configDB = {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
  }
  ,
      query: {
        raw: true
      }
      ,timezone: '+07:00'
}
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, configDB)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
