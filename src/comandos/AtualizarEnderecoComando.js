const Comando = require("./Comando");

class AtualizarEnderecoComando extends Comando {
  constructor(pedido, novoEndereco) {
    super();
    this.pedido = pedido;
    this.novoEndereco = novoEndereco;
    this.enderecoAnterior = null;
  }

  executar() {
    this.enderecoAnterior = this.pedido.endereco;
    this.pedido.endereco = this.novoEndereco;
  }

  desfazer() {
    this.pedido.endereco = this.enderecoAnterior;
  }
}

module.exports = AtualizarEnderecoComando;
