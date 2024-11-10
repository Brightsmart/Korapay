/// <reference types="cypress" />

describe("update process flow", ()=>{
    it("update automation", ()=>{
        cy.visit("http://alphapay.netlify.app");
        cy.get('a > .btn').click();
        cy.get(':nth-child(1) > input').type("Nigerian@gmail.com");
        cy.get('.password').type("Solution@1");
        cy.get('.button').click();
        cy.wait(100);
        cy.get('.dashboard_nav_profile > a > img').click();
        cy.get('form > :nth-child(1) > input').clear();
        cy.get('form > :nth-child(1) > input').type("Chelsea");
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type("Arsenal");
        cy.get('form > .button').click();
        cy.wait(50);
        cy.contains("Update Successful");
    })
})