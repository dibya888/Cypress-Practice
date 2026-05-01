/// <reference types="Cypress" />

describe("Checking checkbox", () => {
    beforeEach('Setup', () => {
        cy.visit('/checkboxes');
    })

    it("Checkbox Check", () => {
        cy.get('#checkboxes').find('[type="checkbox"]').eq(0).check().should('be.checked');
        cy.get('#checkboxes').find('[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
    })
})