class ProdutosPage {
    visit() {
      cy.visit('https://www.saucedemo.com/inventory.html');
    }
  
    getProductList() {
      return cy.get('.inventory_item');
    }
  }
  
  export default ProdutosPage;
  