const express = require("express");
const router = express.Router();
const abrigosRouter = require("./abrigosRouter");
const contatosRouter = require("./contatosRouter");
const dicasRouter = require("./dicasRouter");
const usersRouter = require("./usersRouter");

router.get("/", (req, res) => {
  res.send("Seja bem vindo(a) a CISMO API");
});

router.use("/abrigos", abrigosRouter);
router.use("/contatos", contatosRouter);
router.use("/dicas", dicasRouter);
router.use("/user", usersRouter);

module.exports = router;
