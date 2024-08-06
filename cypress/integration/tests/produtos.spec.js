import LoginPage from '../pages/loginPage';
import ProdutosPage from '../pages/productPage';

describe('Teste Produtos', () => {
  const loginPage = new LoginPage();
  const produtosPage = new ProdutosPage();

  before(() => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
  });

  it('deve exibir a lista de produtos após o login', () => {
    produtosPage.getProductList().should('have.length.greaterThan', 0);
  });
});
