// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js

// Custom command for logging in
Cypress.Commands.add('login', (username, password) => {
    cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
    cy.get('#text').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
});

// Custom command for filling the contact form
Cypress.Commands.add('fillContactForm', (firstName, lastName, email, comment) => {
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('.feedback-input').eq(3).type(comment);
});
