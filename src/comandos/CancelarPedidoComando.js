const Comando = require("./Comando");

class CancelarPedidoComando extends Comando {
  constructor(pedido) {
    super();
    this.pedido = pedido;
    this.statusAnterior = null;
  }

  executar() {
    this.statusAnterior = this.pedido.status;
    this.pedido.setStatus("cancelado");
  }

  desfazer() {
    this.pedido.setStatus(this.statusAnterior);
  }
}

module.exports = CancelarPedidoComando;
