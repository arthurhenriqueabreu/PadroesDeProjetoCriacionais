const Observer = require("./Observer");

class EmailObserver extends Observer {
  atualizar(pedido) {
    console.log("Email enviado: pedido esta com status " + pedido.status + ".");
  }
}

module.exports = EmailObserver;
