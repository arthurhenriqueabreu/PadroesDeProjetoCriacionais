class Conexao {
  constructor() {
    if (Conexao.instance) {
      throw new Error("Use Conexao.getInstance() para obter a instancia.");
    }

    this.status = "conectado";
    console.log("Criando conexao com o banco de dados...");
  }

  static getInstance() {
    if (!Conexao.instance) {
      Conexao.instance = new Conexao();
    }

    return Conexao.instance;
  }
}

Conexao.instance = null;

module.exports = Conexao;
