const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
