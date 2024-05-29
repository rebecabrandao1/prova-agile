Feature: Login no Google Drive
  Como um usuário
  Eu quero poder fazer login no Google Drive
  Para que eu possa acessar meus arquivos e documentos

Scenario: Login com sucesso
    Given que estou na página de login do Google Drive
    When eu insiro meu nome de usuário e senha
    And clico no botão "Próximo" após inserir o nome de usuário
    And clico no botão "Próximo" após inserir a senha
    Then devo ser levado para o painel do Google Drive
