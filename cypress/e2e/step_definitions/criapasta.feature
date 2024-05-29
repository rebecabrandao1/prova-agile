Feature: Criar Pasta
  Como um usuário
  Eu quero criar pastas no Google Drive
  Para que eu possa organizar meus arquivos

  Scenario: Criação de pasta bem-sucedida
    Given que estou logado no Google Drive
    When eu clico no botão "Novo"
    And seleciono "Pasta"
    And insiro um nome para a nova pasta
    And eu clico no botão "Criar"
    Then a nova pasta deve aparecer na lista de arquivos
