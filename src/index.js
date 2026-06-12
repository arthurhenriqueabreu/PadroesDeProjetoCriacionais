const Conexao = require("./database/Conexao");
const PagamentoFactory = require("./pagamentos/PagamentoFactory");
const PedidoBuilder = require("./pedidos/PedidoBuilder");
const GatewayLegado = require("./pagamentos/legado/GatewayLegado");
const GatewayAdapter = require("./pagamentos/legado/GatewayAdapter");
const LogDecorator = require("./pagamentos/decorators/LogDecorator");
const DescontoDecorator = require("./pagamentos/decorators/DescontoDecorator");
const CheckoutFacade = require("./checkout/CheckoutFacade");
const EstoqueService = require("./checkout/EstoqueService");
const PagamentoService = require("./checkout/PagamentoService");
const CarrinhoService = require("./checkout/CarrinhoService");
const EmailService = require("./checkout/EmailService");
const Carrinho = require("./carrinho/Carrinho");
const FreteCorreios = require("./frete/FreteCorreios");
const FreteJadlog = require("./frete/FreteJadlog");
const FreteRetirada = require("./frete/FreteRetirada");
const EmailObserver = require("./observadores/EmailObserver");
const EstoqueObserver = require("./observadores/EstoqueObserver");
const LogObserver = require("./observadores/LogObserver");
const GerenciadorComandos = require("./comandos/GerenciadorComandos");
const CancelarPedidoComando = require("./comandos/CancelarPedidoComando");
const AtualizarEnderecoComando = require("./comandos/AtualizarEnderecoComando");

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

console.log("\n6. Adapter - usando gateway legado");
const gatewayLegado = new GatewayLegado();
const pagamentoLegado = new GatewayAdapter(gatewayLegado);
pagamentoLegado.processar(150);

console.log("\n7. Decorator - log e desconto no Pix");
const pixComDescontoELog = new LogDecorator(
  new DescontoDecorator(PagamentoFactory.criarPagamento("pix"), 10)
);
pixComDescontoELog.processar(200);

console.log("\n8. Facade - finalizando pedido");
const checkout = new CheckoutFacade(
  new EstoqueService(),
  new PagamentoService(),
  new CarrinhoService(),
  new EmailService()
);
checkout.finalizar(pedido);

console.log("\n9. Strategy - trocando frete do carrinho");
const carrinho = new Carrinho(new FreteCorreios());
carrinho.adicionarItem({ nome: "Teclado", preco: 200, peso: 2 });
carrinho.adicionarItem({ nome: "Monitor", preco: 900, peso: 5 });
console.log("Frete Correios: R$ " + carrinho.calcularFrete());
carrinho.setFrete(new FreteJadlog());
console.log("Frete Jadlog: R$ " + carrinho.calcularFrete());
carrinho.setFrete(new FreteRetirada());
console.log("Retirada na loja: R$ " + carrinho.calcularFrete());

console.log("\n10. Observer - notificando ao confirmar pedido");
pedido.adicionarObserver(new EmailObserver());
pedido.adicionarObserver(new EstoqueObserver());
pedido.adicionarObserver(new LogObserver());
pedido.confirmar();

console.log("\n11. Command - cancelar pedido e desfazer");
const gerenciador = new GerenciadorComandos();
gerenciador.executar(new CancelarPedidoComando(pedido));
console.log("Status depois de cancelar:", pedido.status);
gerenciador.desfazerUltimo();
console.log("Status depois do undo:", pedido.status);

console.log("\n12. Command bonus - atualizar endereco e desfazer");
gerenciador.executar(
  new AtualizarEnderecoComando(pedido, "Avenida Brasil, 500 - Centro")
);
console.log("Endereco atualizado:", pedido.endereco);
gerenciador.desfazerUltimo();
console.log("Endereco depois do undo:", pedido.endereco);
