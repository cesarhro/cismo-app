const express = require("express");
const router = express.Router();
const { dicas } = require("../models/index");
const DicasSerivce = require("../services/dicasService");

const dicasService = new DicasSerivce(dicas);

router.get("/", async (req, res) => {
  try {
    const dicas = await dicasService.getDicas();
    res.status(200).json(dicas);
  } catch (e) {
    res.status(404).json(e.message);
  }
});

module.exports = router;
