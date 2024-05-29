import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou logado no Google Drive", () => {
    cy.visit("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive%3Fhl%3Dpt-br&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive%3Fhl%3Dpt-br&hl=pt-br&ifkv=AaSxoQxHprxAYGeis-i5d5C4OkTCDTBP9awVQTffx1zC8TZwm7CfTvw8Q1ViionIhg9Nmy_0E6buJw&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-351514981%3A1717007942911280&ddm=0");
    cy.get('input[type="email"]').type('testerebeca2@gmail.com');
    cy.contains('Avançar').click();
    cy.get('input[type="password"]').type('210173ghs', { log: false });
    cy.contains('Avançar').click();
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
