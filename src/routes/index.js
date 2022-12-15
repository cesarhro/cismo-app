const express = require("express");
const router = express.Router();
// const abrigosRouter = require("./abrigosRouter");
// const contatosRouter = require("./contatosRouter");
// const dicasRouter = require("./dicasRouter");
const userRouter = require("./userRouter");

router.get("/", (req, res) => {
  res.send("Seja bem vindo(a) a CISMO API");
});

// router.use("/abrigos", abrigosRouter);
// router.use("/contatos", contatosRouter);
// router.use("/dicas", dicasRouter);
router.use("/user", userRouter);

module.exports = router;
