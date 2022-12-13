require("dotenv").config();
const express = require("express");
const routers = require("./api");

const app = express();

app.use(express.json());
app.use("/", routers);

app.listen(5000, () => {
  console.log(`Servidor online`);
});
