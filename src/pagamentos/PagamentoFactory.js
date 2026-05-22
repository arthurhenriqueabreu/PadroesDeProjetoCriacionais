const PagamentoCartaoCredito = require("./PagamentoCartaoCredito");
const PagamentoPix = require("./PagamentoPix");
const PagamentoBoleto = require("./PagamentoBoleto");

class PagamentoFactory {
  static criarPagamento(tipo) {
    const tipoNormalizado = tipo.toLowerCase();

    if (tipoNormalizado === "cartao") {
      return new PagamentoCartaoCredito();
    }

    if (tipoNormalizado === "pix") {
      return new PagamentoPix();
    }

    if (tipoNormalizado === "boleto") {
      return new PagamentoBoleto();
    }

    throw new Error("Tipo de pagamento invalido.");
  }
}

module.exports = PagamentoFactory;
