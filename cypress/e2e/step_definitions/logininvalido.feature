Feature: Login no Google Drive
  Como um usuário
  Eu quero poder fazer login no Google Drive
  Para que eu possa acessar meus arquivos e documentos

  Scenario: Tentativa de login inválido no Google Drive
    Given que estou na página de login do Google
    When eu insiro um nome de usuário inválido e uma senha inválida
    And clico no botão "Próximo"
    Then deve aparecer uma mensagem de "senha inválida"
