const express = require("express");
const router = express.Router();
const abrigosRouter = require("./abrigosRouter");
const contatosRouter = require("./contatosRouter");
const dicasRouter = require("./dicasRouter");

router.get("/", (req, res) => {
  res.send("Lindo");
});

router.use("/abrigos", abrigosRouter);
router.use("/contatos", contatosRouter);
router.use("/dicas", dicasRouter);

module.exports = router;
