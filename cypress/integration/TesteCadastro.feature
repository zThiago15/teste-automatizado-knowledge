@fazer-cadastro
Feature: Fazer cadastro de aluno

    @negative
    Scenario: Dados incorretos
        Given que o usuário acessou a página principal
        When ele preencher o campo de nome corretamente
        And preencher o campo de email corretamente
        And preencher o campo de senha fraca
        And clicar no botão de criar conta
        And preencher campo de sobrenome corretamente
        And preencher campo de cpf corretamente
        And clicar em cadastrar
        Then então aparecerá erro de senha fraca

    

    
    
        