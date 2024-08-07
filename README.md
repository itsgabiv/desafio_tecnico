# desafio_tecnico
# Desafio Técnico de QA

Este repositório contém um conjunto de testes automatizados para o site [Sauce Demo](https://www.saucedemo.com/), uma aplicação web de demonstração para testes de automação.

## Objetivo

O objetivo deste projeto é demonstrar habilidades em automação de testes utilizando Cypress, com testes escritos em JavaScript, versionamento de código com Git e aplicação de práticas ágeis como BDD.

## Requisitos

- Automação de Testes com Cypress
- JavaScript
- Controle de Versão com Git
- Metodologia Ágil com práticas de BDD

## Estrutura do Projeto

```plaintext
cypress/
  ├── fixtures/
  ├── integration/
  │   ├── pages/
  │   │   ├── loginPage.js
  │   │   ├── produtosPage.js
  │   │   ├── carrinhoPage.js
  │   │   ├── checkoutPage.js
  │   ├── tests/
  │   │   ├── login.spec.js
  │   │   ├── produtos.spec.js
  │   │   ├── carrinho.spec.js
  │   │   ├── checkout.spec.js
  ├── plugins/
  └── support/
      └── index.js
