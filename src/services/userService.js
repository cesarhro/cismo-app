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

    if (!userDTO) throw Error("Missing Data Exception");

    if (email) throw Error("Esse usuário já existe");

    userDTO.senha = bcrypt.hashSync(userDTO.senha, this.#salt);

    try {
      const user = await this.user.create(userDTO);
      return user;
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
