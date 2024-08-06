class CarrinhoPage {
    addToCart(productName) {
      cy.contains(productName).parent().parent().find('button').click();
    }
  
    getCartBadge() {
      return cy.get('.shopping_cart_badge');
    }
  
    visitCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    getCartItems() {
      return cy.get('.cart_item');
    }
  }
  
  export default CarrinhoPage;
  