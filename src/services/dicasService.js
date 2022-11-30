class DicasService {
  constructor(dicasModel) {
    this.dicasModel = dicasModel;
  }

  async getDicas() {
    try {
      const dicas = await this.dicasModel.findAll();
      return dicas;
    } catch (e) {
      console.error(e.message);
    }
  }
}

module.exports = DicasService;
