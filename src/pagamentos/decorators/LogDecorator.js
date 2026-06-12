const Pagamento = require("../Pagamento");

class LogDecorator extends Pagamento {
  constructor(pagamento) {
    super(pagamento.tipo);
    this.pagamento = pagamento;
  }

  processar(valor) {
    console.log("[LOG] Valor cobrado: R$ " + valor);
    this.pagamento.processar(valor);
  }
}

module.exports = LogDecorator;
