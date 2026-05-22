const Pedido = require("./Pedido");

class PedidoBuilder {
  constructor() {
    this.itens = [];
    this.endereco = null;
    this.pagamento = null;
  }

  adicionarItem(item) {
    this.itens.push(item);
    return this;
  }

  setEndereco(endereco) {
    this.endereco = endereco;
    return this;
  }

  setPagamento(pagamento) {
    this.pagamento = pagamento;
    return this;
  }

  build() {
    if (this.itens.length === 0) {
      throw new Error("O pedido precisa ter pelo menos um item.");
    }

    if (!this.endereco) {
      throw new Error("O pedido precisa ter um endereco.");
    }

    if (!this.pagamento) {
      throw new Error("O pedido precisa ter uma forma de pagamento.");
    }

    return new Pedido(this.itens, this.endereco, this.pagamento);
  }
}

module.exports = PedidoBuilder;
