Feature: Recuperar senha no Google Drive
  Como um usuário
  Eu quero poder recuperar minha senha no Google Drive
  Para que eu possa acessar minha conta novamente

  Scenario: Recuperar senha com sucesso no Google Drive
    Given que estou na página de login do Google
    When eu clico no link "Forgot email?"
    And eu insiro meu endereço de e-mail
    And eu clico no botão "Próxima"
    And eu preencho meu nome
    And eu clico no botão "Próxima"
    Then devo ver a mensagem "Nenhuma conta encontrada"

