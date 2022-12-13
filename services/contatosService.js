class ContatoService {
  constructor(contatosModel) {
    this.contato = contatosModel;
  }

  async getContatosById(id) {
    if (!id) throw Error("Missing Data Exception");

    try {
      const contatos = await this.contato.findAll({ where: { user_id: id } });
      return contatos;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async create(id, contatoDTO) {
    const contato = await this.contato.findOne({
      where: { user_id: id, telefone: contatoDTO.telefone },
    });

    const contatoNome = await this.contato.findOne({
      where: { user_id: id, nome: contatoDTO.nome },
    });

    if (contatoNome) throw Error("Esse nome já foi salvo para algum contato");

    if (!contatoDTO) throw Error("Missing Data Exception");

    if (contato) throw Error("Esse telefone já existe");

    try {
      await this.contato.create(contatoDTO);
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async update(id, contatoDTO) {
    const contatoNome = await this.contato.findOne({
      where: { user_id: id, nome: contatoDTO.nome },
    });

    if (!contatoNome) {
      throw Error("Esse contato não existe.");
    }

    if (!contatoDTO) throw Error("Missing Data Exception");

    try {
      await this.contato.update(contatoDTO, {
        where: { nome: contatoDTO.nome },
      });
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  async delete(id, contatoDTO) {
    const contatoNome = await this.contato.findOne({
      where: { user_id: id, nome: contatoDTO.nome },
    });

    if (!contatoNome) {
      throw Error("Esse contato não existe.");
    }

    if (!contatoDTO) throw Error("Missing Data Exception");

    try {
      await this.contato.destroy({
        where: { nome: contatoDTO.nome },
      });
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }
}
module.exports = ContatoService;
