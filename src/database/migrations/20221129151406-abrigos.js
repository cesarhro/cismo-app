"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("abrigos", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },

      nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      tipo: {
        type: Sequelize.ENUM("abrigo", "ponto_de_apoio"),
        allowNull: false,
      },

      status: {
        type: Sequelize.ENUM("ativo", "desativado"),
        allowNull: false,
      },

      rua: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      bairro: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      latitude: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

      longitude: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("abrigos");
  },
};
