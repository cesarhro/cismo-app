const express = require("express");
const router = express.Router();
const abrigosRouter = require("./abrigos.js");
const contatosRouter = require("./contatos.js");
const dicasRouter = require("./dicas.js");

router.get("/", (req, res) => {
  res.send("Lindo");
});

router.use("/abrigos", abrigosRouter);
router.use("/contatos", contatosRouter);
router.use("/dicas", dicasRouter);

module.exports = router;
