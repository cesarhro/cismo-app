"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const contatos = sequelize.define("abrigos", {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    tipo: {
      field: "tipo",
      type: DataTypes.ENUM("autoridade", "equipe"),
      allowNull: false,
    },

    url: {
      field: "telurlefone",
      type: DataTypes.STRING(500),
      allowNull: false,
    }
  });

  return contatos;
};