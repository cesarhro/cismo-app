const express = require("express");
const router = express.Router();
const { abrigos } = require("../models/index");
const AbrigoSerivce = require("../controllers/abrigoController");

const abrigoService = new AbrigoSerivce(abrigos);

router.get("./", abrigoService(abrigos));

module.exports = router;
