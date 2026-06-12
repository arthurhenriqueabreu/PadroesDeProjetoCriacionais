class Pedido {
  constructor(itens, endereco, pagamento) {
    this.itens = itens;
    this.endereco = endereco;
    this.pagamento = pagamento;
    this.status = "criado";
    this.observers = [];
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.itens) {
      total += item.preco;
    }

    return total;
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  removerObserver(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notificar() {
    for (const observer of this.observers) {
      observer.atualizar(this);
    }
  }

  setStatus(status) {
    this.status = status;
    this.notificar();
  }

  confirmar() {
    this.setStatus("confirmado");
  }
}

module.exports = Pedido;
