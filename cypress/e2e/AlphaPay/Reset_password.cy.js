/// <reference types="cypress" />

describe("change Password process flow", ()=>{
    it("change password automation", ()=>{
        cy.visit("http://alphapay.netlify.app");
        cy.get('a > .btn').click();
        cy.get(':nth-child(4) > a').click();
        cy.get('input').type("Nigerian@gmail.com");
        cy.get('.button').click();
        cy.contains('Generating password reset link');
    })
})