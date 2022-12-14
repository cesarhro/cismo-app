"use strict";
const { Sequelize, Model, DataTypes, DATEONLY } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const dicas = sequelize.define("dicas", {
    id: {
      field: "id",
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      field: "tipo",
      type: Sequelize.ENUM("autoridade", "equipe"),
      allowNull: false,
    },

    url: {
      field: "url",
      type: Sequelize.STRING(500),
      allowNull: false,
    },
  });

  return dicas;
};
