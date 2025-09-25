Feature: User Authentication

Como usuário da plataforma UOL
Eu quero me autenticar
Para acessar a minha página inicial

Scenario:  Login bem-sucedido
Given estou na página de login da Unifor
When eu insiro o número de matrícula "<matricula>"
And eu insiro a senha "<senha>"
And eu clico no botão "Acessar"
Then eu sou redirecionado para a página inicial

Scenario Outline: Login com erro
Given que estou na página de login da Unifor
When eu insiro uma "<matricula>" ou "<senha>" inválida
And eu clico no botão "Acessar"
Then uma "mensagem" de erro é exibida
Examples:
  | Preencha todos os campos corretamente.|