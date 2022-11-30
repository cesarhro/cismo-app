"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    id: {
      field: "id",
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    nome_completo: {
      field: "nome_completo",
      type: Sequelize.STRING(250),
      allowNull: false,
    },

    email: {
      field: "email",
      type: Sequelize.STRING(250),
      allowNull: false,
    },

    senha: {
      field: "senha",
      type: Sequelize.STRING(200),
      allowNull: false,
    },
  });

  return users;
};
