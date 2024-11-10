/// <reference types="cypress" />

describe("sign in process flow", ()=>{
    it("sign automation", ()=>{
        cy.visit("http://alphapay.netlify.app");
        cy.get('a > .btn').click();
        cy.get(':nth-child(1) > input').type("Nigerian@gmail.com");
        cy.get('.password').type("Solution@1");
        cy.get('.button').click();
        cy.wait(100);
        cy.contains('Login Successful');
    })
})