const express = require("express");
const db = require("../models");

const User = db.users;

const saveUser = async (req, res, next) => {
  try {
    const emailcheck = await User.findOne({
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
