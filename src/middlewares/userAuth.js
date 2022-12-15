const express = require("express");
const { users } = require("../models");

const saveUser = async (req, res, next) => {
  try {
    const emailcheck = await users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (emailcheck) {
      return res.json(409).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
};
