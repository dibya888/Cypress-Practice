/// <reference types="Cypress" />

describe("Basic Tests", { browser: 'firefox' }, () => {
    beforeEach("Visit base website", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })
    afterEach("Indicate test completion", () => {
        cy.log("The Test is Completed.") //This is implicit assertion, Cypress checks validity.
    })

    it("Visit the website and verify the header", () => {
        cy.get("img[alt='company-branding']").should("be.visible") //This is explicit assertion as We check validity
        cy.title().should("eq", "OrangeHRM")
    })

    // it("Select by text example", () => {
    //     cy.visit("https://the-internet.herokuapp.com")
    //     cy.get('a').contains("Form Authentication").click()
    //     //cy.contains("Form Authentication").click()    //Alternate of upper line.
    // })

    it("Type Demonastration", () => {
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
    })
})