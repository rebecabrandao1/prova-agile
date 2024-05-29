import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de login do Google", () => {
    cy.visit("https://accounts.google.com/signin");
});

When("eu clico no link {string}", (linkText) => {
    cy.contains(linkText).click();
});

When("eu insiro meu endereço de e-mail", () => {
    cy.get('input[type="email"]').type('testerebeca2@gmail.com');
});

When("eu clico no botão {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

When("eu preencho meu nome", () => {
    cy.get('input[name="firstName"]').type('teste');
});

When("eu clico no botão {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("devo ver a mensagem {string}", (message) => {
    cy.contains(message, { timeout: 10000 }).should('be.visible'); 
});
