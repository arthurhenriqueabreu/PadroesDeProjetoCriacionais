const Pagamento = require("./Pagamento");

class PagamentoBoleto extends Pagamento {
  constructor() {
    super("Boleto");
  }

  processar(valor) {
    console.log(`Boleto gerado no valor de R$ ${valor}.`);
  }
}

module.exports = PagamentoBoleto;
