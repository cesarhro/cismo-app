const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  #saltRounds = 4;
  #salt = bcrypt.genSaltSync(this.#saltRounds);

  constructor(usersModel) {
    this.users = usersModel;
  }

  async create(req, res) {
    try {
      const { nome_completo, email, senha } = req.body;
      const data = {
        nome_completo,
        email,
        senha: bcrypt.hashSync(senha, this.#salt),
      };
      const user = await users.create(data);

      if (user) {
        const isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
          let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });

          res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
          });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          return res.status(201).send(user);
        } else {
          return res.status(401).send("Authentication failed");
        }
      } else {
        return res.status(401).send("Authentication failed");
      }
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const user = await users.findOne({ email });

      if (user) {
        const isSame = await bcrypt.compare(senha, user.senha);

        if (isSame) {
          let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });
          res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
          });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          return res.status(201).send(user);
        } else {
          return res.status(401).send("Authentication failed");
        }
      } else {
        return res.status(401).send("Authentication failed");
      }
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }
}

module.exports = UserController;
