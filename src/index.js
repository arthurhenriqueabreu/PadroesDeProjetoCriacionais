const Conexao = require("./database/Conexao");
const PagamentoFactory = require("./pagamentos/PagamentoFactory");
const PedidoBuilder = require("./pedidos/PedidoBuilder");

console.log("=== SISTEMA DE E-COMMERCE FICTICIO ===");

console.log("\n1. Testando Singleton");
const conexao1 = Conexao.getInstance();
const conexao2 = Conexao.getInstance();

console.log("As duas instancias sao iguais?", conexao1 === conexao2);
console.log("Status da conexao:", conexao1.status);

console.log("\n2. Criando pagamento com Factory");
const pagamento = PagamentoFactory.criarPagamento("pix");
console.log("Tipo de pagamento criado:", pagamento.tipo);

console.log("\n3. Montando pedido com Builder");
const pedido = new PedidoBuilder()
  .adicionarItem({ nome: "Notebook", preco: 3500 })
  .adicionarItem({ nome: "Mouse", preco: 120 })
  .setEndereco("Rua das Flores, 123 - Centro")
  .setPagamento(pagamento)
  .build();

console.log("Pedido criado com sucesso:");
console.log(pedido);

console.log("\n4. Processando pagamento do pedido");
const total = pedido.calcularTotal();
pedido.pagamento.processar(total);

console.log("\n5. Resumo final");
console.log("Total do pedido: R$ " + total);
console.log("Endereco de entrega:", pedido.endereco);
console.log("Itens do pedido:", pedido.itens);
