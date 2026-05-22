const Pagamento = require("./Pagamento");

class PagamentoPix extends Pagamento {
  constructor() {
    super("Pix");
  }

  processar(valor) {
    console.log(`Pagamento de R$ ${valor} realizado via Pix.`);
  }
}

module.exports = PagamentoPix;
