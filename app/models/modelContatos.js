"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const contatos = sequelize.define("contatos", {
    id: {
      field: "id",
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      field: "user_id",
      type: Sequelize.BIGINT,
      allowNull: false,
    },

    tipo: {
      field: "tipo",
      type: Sequelize.ENUM("autoridade", "pessoal"),
      allowNull: false,
    },

    telefone: {
      field: "telefone",
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  });

  return contatos;
};
