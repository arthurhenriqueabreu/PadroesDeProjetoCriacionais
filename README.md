# Projeto de Padroes de Projeto em JavaScript

Projeto simples feito em Node.js para a atividade de laboratorio sobre padroes de projeto.

A ideia do projeto e simular algumas partes basicas de um backend de e-commerce, usando os padroes criacionais da atividade 03 e os padroes estruturais e comportamentais da atividade 04.

## Alunos

- Arthur Henrique Abreu
- Matheus Fonte Goncalves

## Padroes usados

### Atividade 03

- Singleton: a classe `Conexao` garante uma unica instancia de conexao fake com o banco.
- Factory Method: `PagamentoFactory` cria o tipo de pagamento sem o codigo principal conhecer as classes concretas.
- Builder: `PedidoBuilder` monta o pedido passo a passo, deixando o codigo de criacao mais organizado.

### Atividade 04

- Adapter: `GatewayAdapter` permite usar o `GatewayLegado` sem mudar o contrato original de pagamento.
- Decorator: `LogDecorator` e `DescontoDecorator` adicionam log e desconto sem alterar Pix, Boleto ou Cartao.
- Facade: `CheckoutFacade` centraliza o fluxo de finalizar pedido, chamando estoque, pagamento, carrinho e email.
- Strategy: `Carrinho` troca a estrategia de frete em tempo de execucao usando Correios, Jadlog ou retirada.
- Observer: `Pedido` notifica observadores quando muda de status, como email, estoque e log.
- Command: comandos encapsulam acoes como cancelar pedido e atualizar endereco, permitindo desfazer.

## Como executar

Instale o Node.js e rode:

```bash
npm start
```

Ou execute diretamente:

```bash
node src/index.js
```

## Estrutura principal

```bash
src/
  index.js
  database/
  pagamentos/
  pedidos/
  checkout/
  carrinho/
  frete/
  observadores/
  comandos/
```

## Diagrama simples

```text
Pedido
  usa Pagamento
  notifica Observers

Pagamento
  Pix / Boleto / Cartao
  GatewayAdapter -> GatewayLegado
  LogDecorator -> DescontoDecorator -> Pagamento real

CheckoutFacade
  EstoqueService
  PagamentoService
  CarrinhoService
  EmailService

Carrinho
  EstrategiaFrete
    FreteCorreios
    FreteJadlog
    FreteRetirada

GerenciadorComandos
  CancelarPedidoComando
  AtualizarEnderecoComando
```
