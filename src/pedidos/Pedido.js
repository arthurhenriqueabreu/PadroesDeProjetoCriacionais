class Pedido {
  constructor(itens, endereco, pagamento) {
    this.itens = itens;
    this.endereco = endereco;
    this.pagamento = pagamento;
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.itens) {
      total += item.preco;
    }

    return total;
  }
}

module.exports = Pedido;
