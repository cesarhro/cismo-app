const express = require("express");
const router = express.Router();
const { users } = require("../models/index");
const UserService = require("../services/userService");

const userService = new UserService(users); // Busca

router.post("/create", async (req, res) => {
  try {
    await userService.create({
      nome_completo: req.body.nome_completo,
      email: req.body.email,
      senha: req.body.senha,
    });

    res.status(201).send("User cadastrado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get("/login", async (req, res) => {
  try {
    await userService.login({
      email: req.body.email,
      senha: req.body.senha,
    });

    res.status(201).send("User cadastrado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    await userService.update(
      {
        nome_completo: req.body.nome_completo,
        email: req.body.email,
        senha: req.body.senha,
      },
      req.params.id
    );

    res.status(201).send("User atualizado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await userService.delete({
      email: req.body.email,
      senha: req.body.senha,
    });

    res.status(201).send("User deletado com sucesso");
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
