/// <reference types="cypress" />

describe ("Successful Payment process flow", ()=>{
    it ("Successful Payment automation", ()=> {
        cy.visit("https://checkout.koraapi.com/pay/QkPen8uAo893H1j");
        cy.get('[data-testid="customer-name-input"]').type("Bright Guy");
        cy.get('#customer-email').type("Solution@gmail.com");
        cy.get('#link-amount').type("1000");
        cy.get('.kpy-col-btn').click();
        cy.get('[data-testid="payment-options"] > :nth-child(1)').click();
        cy.get('[data-testid="card-number"]').type("5442056106072595");
        cy.get('[data-testid="card-expiry"]').type("0930");
        cy.get('[data-testid="card-cvv"]').type("123");
        cy.get('.kpy-col-btn').click();
        cy.get('#card-pin-0').type("1234");
        cy.get('#card-otp').type("123456");
        cy.get('.kpy-col-btn').click();
        cy.wait(10);
        cy.contains('Awesome! Your payment was successful');
    })
})