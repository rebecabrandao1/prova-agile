# Projeto Cypress com Cucumber

Este projeto demonstra como usar o Cypress com Cucumber para escrever testes de aceitação automatizados.

## Instalação

1. Clone este repositório:
git clone https://github.com/rebecabrandao1/prova-agile

2. Navegue até o diretório do projeto:

3. Instale as dependências do projeto:
npm install

## Executando os testes

Para executar os testes, você pode usar o seguinte comando:
`npx cypress run`

Isso executará os testes em modo headless, ou seja, sem abrir a interface gráfica do Cypress. Se você preferir executar os testes no modo interativo, que permite ver a execução dos testes em tempo real, você pode usar o seguinte comando:
`npx cypress open`


Isso abrirá a interface gráfica do Cypress, onde você pode selecionar os testes que deseja executar.

## Estrutura do projeto

- `cypress/integration`: Contém os arquivos de especificação de teste escritos em Cucumber.
- `cypress/support`: Contém arquivos de suporte para os testes, como comandos personalizados e plugins.
- `cypress/plugins`: Contém arquivos de configuração e plugins para o Cypress.
- `cypress/fixtures`: Contém arquivos de dados usados nos testes, como arquivos JSON.
- `cypress/videos`: Contém vídeos das execuções dos testes.

## Exemplo de especificação de teste

Um exemplo simples de especificação de teste em Cucumber:

```gherkin
Feature: Acessar a página de login
  Como um usuário
  Eu quero acessar a página de login
  Para poder inserir minhas credenciais e fazer login no sistema

  Scenario: Acessar a página de login
    Given que estou na página inicial
    When eu clico no link "Login"
    Then devo ser redirecionado para a página de login




