"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contatos", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },

      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },

      tipo: {
        type: Sequelize.ENUM("autoridade", "pessoal"),
        allowNull: false,
      },

      telefone: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contatos");
  },
};
