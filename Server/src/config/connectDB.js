import Sequelize from "sequelize";
require("dotenv").config();
const pg = require('pg');
pg.types.setTypeParser(1114, (str) => new Date((str.split(' ').join('T'))+'Z'));

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }},
      query: {
        raw: true
      }
      ,timezone: '+07:00'
  }
);

const ConnectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default ConnectDB;
