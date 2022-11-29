"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contatos", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },

      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },

      tipo: {
        type: DataTypes.ENUM("autoridade", "pessoal"),
        allowNull: false,
      },

      telefone: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contatos");
  },
};
