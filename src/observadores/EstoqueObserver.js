const Observer = require("./Observer");

class EstoqueObserver extends Observer {
  atualizar(pedido) {
    console.log("Estoque atualizado por causa do pedido " + pedido.status + ".");
  }
}

module.exports = EstoqueObserver;
