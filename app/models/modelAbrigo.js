"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const abrigos = sequelize.define("abrigos", {
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
      type: DataTypes.ENUM("abrigo", "ponto_de_apoio"),
      allowNull: false,
    },

    status: {
      field: "status",
      type: DataTypes.ENUM("ativo", "desativado"),
      allowNull: false,
    },

    rua: {
      field: "rua",
      type: DataTypes.STRING(200),
      allowNull: false,
    },

    bairro: {
      field: "bairro",
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cep: {
      field: "cep",
      type: DataTypes.STRING(20),
      allowNull: false,
    },

    coordenadas: {
      field: "coordenadas",
      type: DataTypes.GEOMETRY,
      allowNull: false,
    }
  });

  return abrigos;
};
