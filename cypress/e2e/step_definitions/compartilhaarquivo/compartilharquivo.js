import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("que estou logado no Google Drive", () => {
    // Adicione aqui a lógica para fazer o login no Google Drive, se necessário
});

Given("tenho um arquivo no meu Google Drive", () => {
    // Adicione aqui a lógica para ter um arquivo no Google Drive, se necessário
});

When("eu clico com o botão direito no arquivo", () => {
    // Adicione aqui a lógica para clicar com o botão direito no arquivo
});

When("seleciono {string}", (optionText) => {
    cy.contains(optionText).click();
});

When("insiro o email do usuário com quem quero compartilhar", () => {
    const emailDoUsuario = "exemplo@gmail.com";
    cy.get('input[aria-label="Adicionar pessoas"]').type(emailDoUsuario);
});

When("eu clico em {string}", (buttonText) => {
    cy.contains(buttonText).click();
});

Then("o outro usuário deve receber um email com o link de acesso ao arquivo", () => {
    // Adicione aqui a lógica para verificar se o email foi enviado
    // Esta parte pode ser complicada de automatizar, pois envolve interações externas ao Google Drive
});
