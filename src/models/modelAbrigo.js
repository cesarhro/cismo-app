"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const abrigos = sequelize.define("abrigos", {
    id: {
      field: "id",
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    nome: {
      field: "nome",
      type: Sequelize.STRING(200),
      allowNull: false,
    },

    tipo: {
      field: "tipo",
      type: Sequelize.ENUM("abrigo", "ponto_de_apoio"),
      allowNull: false,
    },

    status: {
      field: "status",
      type: Sequelize.ENUM("ativo", "desativado"),
      allowNull: false,
    },

    rua: {
      field: "rua",
      type: Sequelize.STRING(200),
      allowNull: false,
    },

    bairro: {
      field: "bairro",
      type: Sequelize.STRING(100),
      allowNull: false,
    },

    url: {
      field: "url",
      type: Sequelize.STRING(400),
      allowNull: false,
    },
  });

  return abrigos;
};
