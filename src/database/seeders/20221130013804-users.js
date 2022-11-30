"use strict";

const { sequelize } = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 4;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync("teste", salt);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome_completo: "Mario da Silva",
          email: "mario@castelo.com",
          senha: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_completo: "Luigi José",
          email: "luigi@cogumelo.com",
          senha: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await sequelize.query("DELETE FROM users");
  },
};
