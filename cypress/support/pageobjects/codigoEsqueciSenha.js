/// <reference types="cypress" />

import esqueciSenhaElements from "../elements/esqueciSenhaElements";
const EsqueciSenhaElements = new esqueciSenhaElements();
const url = Cypress.config("baseUrl");

class codigoEsqueciSenha {

    //Cenário global
    acessarSite(){
        cy.visit(url);
    }

    clicarBotaoEntrar(){
        cy.get(EsqueciSenhaElements.btnEntrar()).click();
    }

    clicarEsqueciSenha(){
        cy.get(EsqueciSenhaElements.btnRecuperarSenha()).click();
    }

    enviarEmail(){
        cy.get(EsqueciSenhaElements.btnEnviarEmail()).submit();
    }

    //Cenário positivo
    digitarEmailCadastrado(){
        cy.get(EsqueciSenhaElements.inputEmail()).type('fernando@gmail.com');
    }

    emailEnviado(){
        cy.get(EsqueciSenhaElements.txSucess()).should('be.visible')
    }

    //Cenário negativo
    digitarEmailInvalido(){
        cy.get(EsqueciSenhaElements.inputEmail()).type('danilo@gmail.com');
    }

    emailNaoEnviado(){
        cy.get(EsqueciSenhaElements.txFail()).should('be.visible');
    }

}

export  default codigoEsqueciSenha;