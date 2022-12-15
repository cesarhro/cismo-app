const express = require("express");
const router = express.Router();
const { dicas } = require("../models/index");
const DicasSerivce = require("../controllers/dicasController");

const dicasService = new DicasSerivce(dicas);

router.get("/", await dicasService.getDicas());

module.exports = router;
