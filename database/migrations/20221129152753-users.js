"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true

      },

      nome_completo: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },

      senha: {
        type: Sequelize.STRING(200),
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
    await queryInterface.dropTable("users");
  },
};
