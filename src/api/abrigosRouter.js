const express = require("express");
const router = express.Router();
const { abrigos } = require("../models/index");
const AbrigoSerivce = require("../services/abrigoService");

const abrigoService = new AbrigoSerivce(abrigos);

router.get("/", async (req, res) => {
  try {
    const abrigos = await abrigoService.getAbrigos();
    res.status(200).json(abrigos);
  } catch (e) {
    res.status(404).json(e.message);
  }
});

module.exports = router;
