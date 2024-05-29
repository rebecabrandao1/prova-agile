Feature: Compartilhar Arquivo
  Como um usuário
  Eu quero compartilhar arquivos com outros usuários no Google Drive
  Para que eles possam acessar os arquivos

  Scenario: Compartilhamento de arquivo bem-sucedido
    Given que estou logado no Google Drive
    And tenho um arquivo no meu Google Drive
    When eu clico com o botão direito no arquivo
    And seleciono "Compartilhar"
    And insiro o email do usuário com quem quero compartilhar
    And clico em "Enviar"
    Then o outro usuário deve receber um email com o link de acesso ao arquivo
