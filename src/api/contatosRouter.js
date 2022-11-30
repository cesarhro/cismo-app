const express = require("express");
const router = express.Router();
const { contatos } = require("../models/index");
const ContatoService = require("../services/contatosService");

const contatoService = new ContatoService(contatos); // Busca

router.get("/:id", async (req, res) => {
  const contatosById = await contatoService.getContatosById(req.params.id);
  res.status(200).json(contatosById);
});

router.post("/:id/create", async (req, res) => {
  try {
    await contatoService.create(req.params.id, {
      nome: req.body.nome,
      user_id: req.params.id,
      tipo: req.body.tipo,
      telefone: req.body.telefone,
    });

    res.status(201).send("Contato cadastrado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.put("/:id/update", async (req, res) => {
  try {
    await contatoService.update(req.params.id, {
      nome: req.body.nome,
      user_id: req.params.id,
      tipo: req.body.tipo,
      telefone: req.body.telefone,
    });

    res.status(201).send("Contato atualizado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete("/:id/delete/", async (req, res) => {
  try {
    await contatoService.delete(req.params.id, {
      nome: req.body.nome,
    });

    res.status(201).send("Contato deletado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
