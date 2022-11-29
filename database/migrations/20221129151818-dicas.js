"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dicas", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },

      tipo: {
        type: DataTypes.ENUM("autoridades", "equipe"),
        allowNull: false,
      },

      url: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dicas");
  },
};
