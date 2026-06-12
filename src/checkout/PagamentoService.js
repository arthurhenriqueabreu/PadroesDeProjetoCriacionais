class PagamentoService {
  processar(pedido) {
    const total = pedido.calcularTotal();
    pedido.pagamento.processar(total);
  }
}

module.exports = PagamentoService;
