/// <reference types="Cypress" />

import loginElements from "../elements/loginElements";
const LoginElements = new loginElements()
const url = Cypress.config("baseUrl");

class codigoLogin {
    // Cenário global 
    acessarSite(){
        cy.visit(url); // Acessar página principal
    }

    acessarPaginaLogin(){
        cy.get(LoginElements.botaoLogin()).click(); // Acessar página de login
    }

    preencherEmailCorretamente(){
        cy.get(LoginElements.inputEmail()).type('fernando@gmail.com');
    }

    // Cenário positivo
    preencherSenharCorretamente(){
        cy.get(LoginElements.inputSenha()).type('F_R$45f');
    }

    loginEfetuado(){
        cy.get("form[class='form-login-usuario']").submit();
    }

    // Cenário negativo
    
    preencherSenhaIncorretamente(){
        cy.get(LoginElements.inputSenha()).type('F_345ghg');
    }


}

export default codigoLogin;