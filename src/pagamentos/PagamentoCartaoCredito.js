const Pagamento = require("./Pagamento");

class PagamentoCartaoCredito extends Pagamento {
  constructor() {
    super("Cartao de Credito");
  }

  processar(valor) {
    console.log(`Pagamento de R$ ${valor} aprovado no cartao de credito.`);
  }
}

module.exports = PagamentoCartaoCredito;
