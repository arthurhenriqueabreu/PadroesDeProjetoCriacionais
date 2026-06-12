class EmailService {
  enviarConfirmacao(pedido) {
    console.log("Email de confirmacao enviado para o pedido " + pedido.status + ".");
  }
}

module.exports = EmailService;
