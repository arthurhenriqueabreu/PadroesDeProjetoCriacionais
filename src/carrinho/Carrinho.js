class Carrinho {
  constructor(estrategiaFrete) {
    this.itens = [];
    this.estrategiaFrete = estrategiaFrete;
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  setFrete(estrategiaFrete) {
    this.estrategiaFrete = estrategiaFrete;
  }

  calcularPeso() {
    let peso = 0;

    for (const item of this.itens) {
      peso += item.peso;
    }

    return peso;
  }

  calcularFrete() {
    return this.estrategiaFrete.calcular(this.calcularPeso());
  }
}

module.exports = Carrinho;
