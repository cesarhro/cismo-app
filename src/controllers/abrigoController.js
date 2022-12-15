class AbrigoService {
  constructor(abrigosModel) {
    this.abrigosModel = abrigosModel;
  }

  async getAbrigos() {
    try {
      const abrigos = await this.abrigosModel.findAll();
      return abrigos;
    } catch (e) {
      console.error(e.message);
    }
  }
}

module.exports = AbrigoService;
