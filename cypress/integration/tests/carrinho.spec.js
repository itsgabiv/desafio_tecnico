import LoginPage from '../pages/loginPage';
import ProdutosPage from '../pages/produtosPage';
import CarrinhoPage from '../pages/carrinhoPage';

describe('Teste Carrinho', () => {
  const loginPage = new LoginPage();
  const produtosPage = new ProdutosPage();
  const carrinhoPage = new CarrinhoPage();

  before(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
  });

  it('adicionar produtos ao carrinho', () => {
    produtosPage.visit();
    carrinhoPage.addToCart('Sauce Labs Backpack');
    carrinhoPage.addToCart('Sauce Labs Bike Light');
    carrinhoPage.getCartBadge().should('contain', '2');
  });

  it('retirar os produtos do carrinho', () => {
    carrinhoPage.visitCart();
    carrinhoPage.getCartItems().should('have.length', 2);
    cy.get('.cart_item').first().find('button').click();
    carrinhoPage.getCartItems().should('have.length', 1);
  });

  it('concluir o processo de checkout', () => {
    carrinhoPage.visitCart();
    cy.get('[data-test=checkout]').click();
    cy.get('[data-test=firstName]').type('John');
    cy.get('[data-test=lastName]').type('Doe');
    cy.get('[data-test=postalCode]').type('12345');
    cy.get('[data-test=continue]').click();
    cy.get('[data-test=finish]').click();
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
