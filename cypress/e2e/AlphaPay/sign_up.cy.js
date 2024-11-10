/// <reference types="cypress" />

describe ("Sign up process flow", ()=>{
    it ("successfull login automation", ()=> {
        cy.visit("http://alphapay.netlify.app");
        cy.get('.nav_item > a').click();
        cy.get('.react-reveal > :nth-child(1) > div > input').type("Good Guy");
        cy.get(':nth-child(2) > input').type("Niceguy");
        cy.get(':nth-child(3) > input').type("09012312314");
        cy.get(':nth-child(4) > input').type("Nigerian@gmail.com");
        cy.get(':nth-child(5) > input').type("Solution@1");
        cy.get(':nth-child(6) > input').type("Solution@1");
        cy.get('.button').click();

    })
})