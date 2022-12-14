require("dotenv").config();
require("pg");
module.exports = {
  development: {
    username: "cismoadm",
    password: "cismo123",
    database: "cismodb",
    host: "localhost",
    port: 5432,
    dialect: "postgresql",
    logging: false,
  },
  test: {
    username: "cismoadm",
    password: "cismo123",
    database: "cismodb",
    host: "localhost",
    port: 5432,
    dialect: "postgresql",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    url: process.env.DB_URL,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
};
