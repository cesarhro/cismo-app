require("dotenv").config();
const routers = require("./app/routers");

const express = require("express");
const app = express();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server on in http://localhost:${process.env.SERVER_PORT}`);
});

app.use("/", routers);

app.use(express.json);
