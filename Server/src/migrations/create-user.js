"use strict";
const moment = require("moment");
const pg = require("pg");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      birthDay: {
        type: Sequelize.DATE,
      },
      image: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      admin: {
        type: Sequelize.BOOLEAN,
        default: true,
      },

      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
