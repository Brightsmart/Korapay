/// <reference types="cypress" />

describe("Logout process flow", ()=>{
    it("Logout automation", ()=>{
        cy.visit("http://alphapay.netlify.app");
        cy.get('a > .btn').click();
        cy.get(':nth-child(1) > input').type("Nigerian@gmail.com");
        cy.get('.password').type("Solution@1");
        cy.get('.button').click();
        cy.get('.dashboard_nav_profile > a > img').click();
        cy.get('[href="/coming-soon"]').click();
        cy.wait(10);
        cy.contains('Sign In');
    })
})