/// <reference types = "cypress" />

describe("Complete Registration Form", () => {
    it("Click Register", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get('#loginPanel').find('a').contains("Register").click();
        cy.get('[name="customer.firstName"]').type("Soap");
        cy.get('[name="customer.lastName"]').type("MacTavish");
        cy.get('[name="customer.address.street"]').type("Delta Force HQ");
        cy.get('[name="customer.address.city"]').type("Chicago");
        cy.get('[name="customer.address.state"]').type("Chicago");
        cy.get('[name="customer.address.zipCode"]').type("B136GH");
        cy.get('[name="customer.phoneNumber"]').type("+1(578)485684");
        cy.get('[name="customer.ssn"]').type("63274327848732");
        cy.get('[name="customer.username"]').type("admin");
        cy.get('[name="customer.password"]').type("admin");
        cy.get('[name="repeatedPassword"]').type("admin");
        cy.get('#customerForm').find(".button").click();
    })
})