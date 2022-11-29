"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },

    nome_completo: {
      field: "nome_completo",
      type: DataTypes.STRING(250),
      allowNull: false,
    },

    email: {
      field: "email",
      type: DataTypes.STRING(250),
      allowNull: false,
    },

    senha: {
      field: "senha",
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });

  return users;
};
