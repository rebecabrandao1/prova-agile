import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou logado no Google Drive", () => {
    cy.visit("https://accounts.google.com/signin");
    cy.get('input[type="email"]').type('seu-email@gmail.com');
    cy.contains('Next').click();
    cy.get('input[type="password"]').type('sua-senha', { log: false });
    cy.contains('Next').click();
    cy.url().should('include', '/drive/my-drive');
});

When("eu clico no botão {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

When("seleciono {string}", (optionText) => {
    cy.contains(optionText).click();
});

When("insiro um nome para a nova pasta", () => {
    const nomeDaPasta = "Minha Nova Pasta";
    cy.get('input[aria-label="Nome"]').type(nomeDaPasta);
});

When("eu clico no botão {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("a nova pasta deve aparecer na lista de arquivos", () => {
    cy.contains("Minha Nova Pasta").should('be.visible');
});
