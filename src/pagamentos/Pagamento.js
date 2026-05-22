class Pagamento {
  constructor(tipo) {
    this.tipo = tipo;
  }

  processar(valor) {
    throw new Error("O metodo processar(valor) precisa ser implementado.");
  }
}

module.exports = Pagamento;
