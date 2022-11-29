"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },

      nome_completo: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },

      senha: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
