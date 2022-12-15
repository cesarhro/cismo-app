//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const signup = async (req, res) => {
  try {
    const existEmail = await User.findOne({ where: { email: req.body.email } });

    if (existEmail) throw res.status(409).send("Already exists");

    const user = await User.create({
      nome_completo: req.body.nome_completo,
      email: req.body.email,
      senha: await bcrypt.hash(req.body.senha, 10),
    });

    if (user) {
      let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);
      //send users details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.error(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (user) {
      const isSame = await bcrypt.compare(senha, user.senha);

      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  login,
};
