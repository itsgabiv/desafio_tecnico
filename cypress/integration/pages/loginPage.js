class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(userName) {
    cy.get('#user-name').type(userName);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('#login-button').click();
  }
}

export default LoginPage;
