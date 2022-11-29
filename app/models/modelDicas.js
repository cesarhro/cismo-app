"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const contatos = sequelize.define("abrigos", {
    id: {
      field: "id",
      type: Sequelize.BIGINT,
      primaryKey: true,
    },
    tipo: {
      field: "tipo",
      type: Sequelize.ENUM("autoridade", "equipe"),
      allowNull: false,
    },

    url: {
      field: "telurlefone",
      type: Sequelize.STRING(500),
      allowNull: false,
    }
  });

  return contatos;
};