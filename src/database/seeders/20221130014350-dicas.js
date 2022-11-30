"use strict";

const { sequelize } = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "dicas",
      [
        {
          tipo: "autoridades",
          url: "https://teste.url.co",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tipo: "equipe",
          url: "https://teste.url.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query("DELETE FROM dicas");
  },
};
