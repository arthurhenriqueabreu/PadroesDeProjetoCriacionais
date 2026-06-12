class CheckoutFacade {
  constructor(estoqueService, pagamentoService, carrinhoService, emailService) {
    this.estoqueService = estoqueService;
    this.pagamentoService = pagamentoService;
    this.carrinhoService = carrinhoService;
    this.emailService = emailService;
  }

  finalizar(pedido) {
    this.estoqueService.verificar(pedido);
    this.pagamentoService.processar(pedido);
    this.estoqueService.baixar(pedido);
    this.carrinhoService.limpar();
    this.emailService.enviarConfirmacao(pedido);
  }
}

module.exports = CheckoutFacade;
