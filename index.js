const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "/.env") });
const cors = require("cors");
const express = require("express");
const routes = require("./src/routes/index");
const app = express();
const db = require("./src/models");
const cookieParser = require("cookie-parser");

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server on in PORT ${process.env.PORT || 3000}`)
);
db.sequelize
  .sync()
  .then(() => {
    console.log(`DB on: ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log("Falha na conexão: " + err.message);
  });

app.use(
  cors({
    credentials: true,
    methods: ["GET", "PUT", "POST"],
    allowedHeaders: [
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);
