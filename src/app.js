require("dotenv").config();
const express = require("express");
const routers = require("./api");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use("/", routers);

sequelize.sync().then(() => {
  console.log("BD conectado");
});

app.listen(5000, () => {
  console.log(`Servidor online`);
});

module.exports = app;
