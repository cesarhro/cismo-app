const express = require("express");
const router = express.Router();
const userAuth = require("../middlewares/userAuth");
const { signup, login } = require("../controllers/userController");

router.post("/create", userAuth.saveUser, signup);

router.post("/login", login);

module.exports = router;
