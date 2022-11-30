"use strict";

const { sequelize } = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "contatos",
      [
        {
          nome: "Defesa civil",
          user_id: 1,
          tipo: "autoridade",
          telefone: "8130302121",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Bombeiros",
          user_id: 1,
          tipo: "autoridade",
          telefone: "8131242131",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query("DELETE FROM contatos");
  },
};
