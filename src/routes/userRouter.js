const express = require("express");
const router = express.Router();
const { users } = require("../models/index");
const UserController = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");

const userController = new UserController(users); // Busca

router.post(
  "/create",
  async function e() {
    userAuth.saveUser;
  },
  async function t() {
    await userController.create();
  }
);

router.post("/login", async function a() {
  await userController.login();
});

module.exports = router;
