"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const contatos = sequelize.define("contatos", {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },

    nome: {
      field: "nome",
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    tipo: {
      field: "tipo",
      type: DataTypes.ENUM("autoridade", "pessoal"),
      allowNull: false,
    },

    telefone: {
      field: "telefone",
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  });

  return contatos;
};
