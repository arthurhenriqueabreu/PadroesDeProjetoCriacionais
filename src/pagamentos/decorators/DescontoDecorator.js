const Pagamento = require("../Pagamento");

class DescontoDecorator extends Pagamento {
  constructor(pagamento, percentual) {
    super(pagamento.tipo);
    this.pagamento = pagamento;
    this.percentual = percentual;
  }

  processar(valor) {
    const valorComDesconto = valor - valor * (this.percentual / 100);
    console.log("Desconto aplicado: " + this.percentual + "%");
    this.pagamento.processar(valorComDesconto);
  }
}

module.exports = DescontoDecorator;
