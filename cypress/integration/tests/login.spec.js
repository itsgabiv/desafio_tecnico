import LoginPage from '../pages/loginPage';

describe('Teste de Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('fazer login com credenciais válidas', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('não deve fazer login com credenciais inválidas', () => {
    loginPage.fillUsername('invalid_user');
    loginPage.fillPassword('invalid_password');
    loginPage.submit();
    cy.get('.error-message-container').should('be.visible');
  });
});
