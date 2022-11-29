"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dicas", {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },

      tipo: {
        type: Sequelize.ENUM("autoridades", "equipe"),
        allowNull: false,
      },

      url: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dicas");
  },
};
