import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de login do Google", () => {
    cy.visit("https://accounts.google.com/signin");
});

When("eu insiro meu nome de usuário e senha", () => {
    cy.get('input[type="email"]').type('testerebeca2@gmail.com');
    cy.contains('Next').click();
    cy.get('input[type="password"]').type('210173ghs', { log: false });
    cy.get('Next').click();
});

Then("devo ser levado para o painel do Google Drive", () => {
    cy.url().should('include', '/drive/my-drive');
});
