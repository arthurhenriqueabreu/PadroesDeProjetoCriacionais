const Pagamento = require("../Pagamento");

class GatewayAdapter extends Pagamento {
  constructor(gatewayLegado) {
    super("Gateway Legado");
    this.gatewayLegado = gatewayLegado;
  }

  processar(valor) {
    const valorEmCentavos = Math.round(valor * 100);
    this.gatewayLegado.pagarValorEmCentavos(valorEmCentavos);
  }
}

module.exports = GatewayAdapter;
