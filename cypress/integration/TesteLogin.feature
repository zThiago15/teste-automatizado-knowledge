@fazer-login
Feature: fazer login

    @positive
    Scenario: login realizado com sucesso
        Given que usuário acessou a página principal
        When ele clicar no botão de login
        And preencher o campo de email corretamente
        And preencher o campo de senha corretamente
        Then o usuário vai ser redirecionado a uma nova página
    
    @negative
    Scenario: dados incorretos
        Given que usuário acessou a página principa
        When ele clicar no botão de login
        And preencher o campo de email corretamente
        And preencher o campo de senha incorretamente
        Then será mostrada uma mensagem de erro
        