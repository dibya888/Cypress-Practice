/// <reference types = "Cypress"/>

describe("Opening New Account", () => {
    beforeEach("Load Home Page", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    })
    it("Login", () => {
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin');
        cy.get("#loginPanel").find('[class="button"]').click();
        cy.get('.title').should('have.text', 'Accounts Overview');
        cy.get('.title').should('be.visible').and('be.enabled').and('be.focused');
        cy.get('#leftPanel').find('a').contains("Open New Account").click();
        cy.get('#type').select('SAVINGS');
        cy.get('#fromAccountId').select('17118');
        cy.get('[value="Open New Account"]').click();
        cy.get('.title').should('have.text', 'Account Opened!');
        cy.get('[ng-app="AddAccountApp"]').find('p').contains('Congratulations, your account is now open.');
    })

})