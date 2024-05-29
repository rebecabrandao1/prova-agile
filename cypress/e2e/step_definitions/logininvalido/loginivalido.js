import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de login do Google", () => {
    cy.visit("https://accounts.google.com/signin");
});

When("eu insiro um nome de usuário inválido e uma senha inválida", () => {
    cy.get('input[type="email"]').type('testerebeca@gmail.com');
    cy.contains('Next').click();
    cy.get('input[type="password"]').type('123456', { log: false });
    cy.get('Next').click();
});

When("clico no botão {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("deve aparecer uma mensagem de {string}", (message) => {
    cy.contains(message).should('be.visible');
});
