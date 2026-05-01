/// <reference types="Cypress" />

describe("Common Locator Types", () => {

    it("List common locator types", () => {
        cy.visit("https://the-internet.herokuapp.com/redirector")
        cy.get('.example').contains("here").click()
        cy.get('.example').contains("200").click()
        cy.get('h3').should('have.text', "Status Codes")
    })
    it("cy.find() example", () => {
        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("#table1").find('.header').contains('First Name')
    })

})