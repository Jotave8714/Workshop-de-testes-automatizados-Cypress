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
Cypress.Commands.add('login', (usuario) => {
    cy.visit('https://uol.hmg.unifor.br/acesso/app/autenticacao/');
    cy.get('app-login > .form-section > .login-inner-form > :nth-child(1) > .form-control')
        .should('be.visible')
        .type(usuario);
    cy.get('.label-float.clearfix > .form-control')
        .should('be.visible')                
        .type(12345678);
    cy.contains('button', 'Acessar')
        .should('be.visible')
        .click();
    cy.url().should('contain', 'inicio');
})