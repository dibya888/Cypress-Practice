/// <reference types="Cypress" />

describe("Common Locator Types", () => {

    it("List common locator types", () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        //ID Locator
        cy.get("#username")

        //Combining elements with attributes
        cy.get('input[name="username"]')

        //Attribute Names
        cy.get('[name="password"]')

        //Class Locator
        cy.get(".radius")

    })

})