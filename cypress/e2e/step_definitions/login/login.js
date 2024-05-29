import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou na página de login do Google Drive", () => {
    cy.visit("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive%3Fhl%3Dpt-br&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive%3Fhl%3Dpt-br&hl=pt-br&ifkv=AaSxoQxHprxAYGeis-i5d5C4OkTCDTBP9awVQTffx1zC8TZwm7CfTvw8Q1ViionIhg9Nmy_0E6buJw&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-351514981%3A1717007942911280&ddm=0");
});

When("eu insiro meu nome de usuário e senha", () => {
    cy.get('input[type="email"]').type('testerebeca2@gmail.com');
    cy.get('#identifierNext').click();
    //cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible');
    cy.get('input[type="password"]').should('be.visible').type('210173ghs', { log: false });
    cy.get('#passwordNext').click();
});

Then("devo ser levado para o painel do Google Drive", () => {
    cy.url({ timeout: 20000 }).should('include', '/drive/my-drive');
});