const express = require("express");
const router = express.Router();
const { contatos } = require("../models/index");
const ContatoService = require("../controllers/contatoController");

const contatoService = new ContatoService(contatos); // Busca

router.get("/:id", await contatoService.getContatosById(req.params.id));
router.post("/:id/create", await contatoService.create());
router.put("/:id/update", await contatoService.update());
router.delete("/:id/delete/", await contatoService.update());

module.exports = router;
