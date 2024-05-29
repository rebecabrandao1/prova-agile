Feature: Login no Google Drive
  Como um usuário
  Eu quero poder fazer login no Google Drive
  Para que eu possa acessar meus arquivos e documentos

  Scenario: Login bem-sucedido no Google Drive
    Given que estou na página de login do Google
    When eu insiro meu nome de usuário e senha
    And clico no botão "Próximo"
    Then devo ser levado para o painel do Google Drive
