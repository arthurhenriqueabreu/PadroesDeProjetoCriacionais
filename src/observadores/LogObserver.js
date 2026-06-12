const Observer = require("./Observer");

class LogObserver extends Observer {
  atualizar(pedido) {
    console.log("[AUDITORIA] Pedido mudou para: " + pedido.status + ".");
  }
}

module.exports = LogObserver;
