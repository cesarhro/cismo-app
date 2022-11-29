"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("abrigos", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },

      nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      tipo: {
        type: DataTypes.ENUM("abrigo", "ponto_de_apoio"),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("ativo", "desativado"),
        allowNull: false,
      },

      rua: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      bairro: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      cep: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      coordenadas: {
        type: DataTypes.GEOMETRY,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("abrigos");
  },
};
