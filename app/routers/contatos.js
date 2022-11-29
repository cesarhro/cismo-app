const express = require("express");
const router = express.Router();
const { contatos } = require("../models/index");

router.get("/", async (req, res) => {
  const todosContatos = await contatos.findAll();
  res.json(todosContatos);
});

router.post("/create", async (req, res) => {
  const { user_id, tipo, telefone } = req.body;

  await contatos.create({ user_id, tipo, telefone });

  res.send("Abrigo cadastrado com sucesso");
});

module.exports = router;
