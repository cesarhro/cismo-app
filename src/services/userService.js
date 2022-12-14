const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  #saltRounds = 4;
  #salt = bcrypt.genSaltSync(this.#saltRounds);

  constructor(usersModel) {
    this.user = usersModel;
  }

  async getUserById(id) {
    if (!id) throw Error("Missing Data Exception");

    try {
      const user = await this.user.findOne({ where: { id: id } });
      return user;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async create(userDTO) {
    const email = await this.user.findOne({
      where: { email: userDTO.email },
      raw: true,
    });

    console.log(email);
    if (!userDTO) throw Error("Missing Data Exception");

    if (email) throw Error("Esse usuário já existe");

    userDTO.senha = bcrypt.hashSync(userDTO.senha, this.#salt);

    try {
      const user = await this.user.create(userDTO);

      if (user) {
        let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        return res.status(201).send(user);
      } else {
        return res.status(409).send("Details are not correct");
      }
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async login(userDTO) {
    try {
      const email = await this.user.findOne({
        where: { email: userDTO.email },
      });

      if (!userDTO) throw Error("Missing Data Exception");

      if (email) {
        const isSame = await bcrypt.compare(userDTO.senha, email.senha);

        if (isSame) {
          let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
          });

          //if password matches wit the one in the database
          //go ahead and generate a cookie for the user
          res.cookie("jwt", token, {
            maxAge: 1 * 24 * 60 * 60,
            httpOnly: true,
          });
          console.log("user", JSON.stringify(user, null, 2));
          console.log(token);
          //send user data
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

  async update(userDTO, id) {
    const user = await this.user.findOne({
      where: { id: id },
    });

    if (!userDTO) throw Error("Missing Data Exception");

    userDTO.senha = bcrypt.hashSync(userDTO.senha, this.#salt);

    try {
      await this.user.update(userDTO, {
        where: { id: id },
      });
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async delete(userDTO) {
    const user = await this.user.findOne({
      where: { email: userDTO.email },
    });

    const senhaCorreta = bcrypt.compareSync(userDTO.senha, user.senha);

    if (!user) throw Error("Usuário Inexistente");

    if (!userDTO) throw Error("Missing Data Exception");

    if (!senhaCorreta)
      throw Error("Senha incorreta, não é possível deletar o usuário");

    try {
      await this.user.destroy({
        where: { email: userDTO.email },
      });
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }
}

module.exports = UserService;
