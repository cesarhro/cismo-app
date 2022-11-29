require("dotenv").config();
const express = require("express");
const routers = require("./app/routers");
const { sequelize } = require("./app/models");

const app = express();

app.use(express.json())
app.use("/", routers);

sequelize.sync().then(() => {
  console.log("Db conectado");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Servidor online no endereço - http://localhost:${process.env.SERVER_PORT}`
  );
});
