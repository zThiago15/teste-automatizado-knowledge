@fazer-cadastro
Feature: fazer cadastro de aluno

    @positive
    Scenario: dados cadastrados com sucesso
        Given que o usuário acessou a página principal
        When ele preencher o campo de nome corretamente
        And preencher o campo de email corretamente
        And preencher o campo de senha com senha forte
        And clicar no botão de criar conta
        And preencher campo de sobrenome corretamente
        And preencher campo de cpf corretamente
        And clicar em cadastrar
        Then então o aluno será cadastrado

    @negative
    Scenario: dados incorretos
        Given que o usuário acessou a página principal
        When ele preencher o campo de nome corretamente
        And preencher o campo de email corretamente
        And preencher o campo de senha fraca
        And clicar no botão de criar conta
        And preencher campo de sobrenome corretamente
        And preencher campo de cpf corretamente
        And clicar em cadastrar
        Then então aparecerá erro de senha fraca

    

    
    
        