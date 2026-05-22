# Projeto de Padrões Criacionais em JavaScript

Projeto simples feito em **Node.js** para a atividade de laboratório sobre **Padrões Criacionais**.

A ideia do projeto é simular algumas partes básicas de um backend de e-commerce, usando três padrões vistos em aula:

- Singleton
- Factory Method
- Builder

## Alunos

- Arthur Henrique Abreu
- Matheus Fonte Gonçalves

## Sobre o projeto

O sistema simula um pequeno fluxo de e-commerce, contendo:

- uma conexão fake com banco de dados;
- formas de pagamento;
- criação de um pedido;
- processamento do pagamento.

O objetivo não foi criar um sistema completo, mas sim aplicar os padrões criacionais em situações parecidas com problemas reais de desenvolvimento.

## Estrutura do projeto

```bash
src/
  index.js
  database/
    Conexao.js
  pagamentos/
    Pagamento.js
    PagamentoCartaoCredito.js
    PagamentoPix.js
    PagamentoBoleto.js
    PagamentoFactory.js
  pedidos/
    Pedido.js
    PedidoBuilder.js