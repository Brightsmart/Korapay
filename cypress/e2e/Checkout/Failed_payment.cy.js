/// <reference types="cypress" />

describe ("Failed Payment process flow", ()=>{
    it ("Failed Payment automation", ()=> {
        cy.visit("https://checkout.koraapi.com/pay/QkPen8uAo893H1j");
        cy.get('[data-testid="customer-name-input"]').type("Bright Guy");
        cy.get('#customer-email').type("Solution@gmail.com");
        cy.get('#link-amount').type("1000");
        cy.get('.kpy-col-btn').click();
        cy.get('[data-testid="payment-options"] > :nth-child(1)').click();
        cy.get('[data-testid="card-number"]').type("506066506066506067");
        cy.get('[data-testid="card-expiry"]').type("0930");
        cy.get('[data-testid="card-cvv"]').type("408");
        cy.get('.kpy-col-btn').click();
        cy.contains('Invalid request data');
    })
})