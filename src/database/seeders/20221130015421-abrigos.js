"use strict";

const { sequelize } = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "abrigos",
      [
        {
          nome: "Escola Municipal Diná de Oliveira",
          tipo: "abrigo",
          status: "ativo",
          rua: "Rua São Mateus, s/n",
          bairro: "Iputinga",
          url: "google.maps/exemplo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Escola Municipal Adauto Pontes",
          tipo: "abrigo",
          status: "ativo",
          rua: "R. Sertânia, 35",
          bairro: "Jordão Alto",
          url: "google.maps/exemplo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query("DELETE FROM abrigos");
  },
};
