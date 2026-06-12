class EstoqueService {
  verificar(pedido) {
    console.log("Estoque verificado para " + pedido.itens.length + " itens.");
  }

  baixar(pedido) {
    console.log("Estoque baixado para o pedido.");
  }
}

module.exports = EstoqueService;
