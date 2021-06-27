/// <reference types="Cypress" />

import cadastroElements from "../elements/cadastroElements";
const CadastroElements = new cadastroElements()
const url = Cypress.config("baseUrl");

class codigoCadastro {
    // Cenário global 
    acessarSite(){
        cy.visit(url); // Acessar página principal
    }

    preencherNomeCorretamente(){
        cy.get(CadastroElements.inputNome()).type('Thiago');
    }

    preencherEmailCorretamente() {
        cy.get(CadastroElements.inputEmail()).type('thiagodias15@gmail.com');
    }

    continuarCadastro(){
        cy.get(CadastroElements.formCriarConta()).submit();
    }

    preencherSobrenomeCorretamente(){
        cy.get(CadastroElements.inputSobrenome()).type('Dias Barboza');
    }

    preencherCpfCorretamente(){
        cy.get(CadastroElements.inputCpf()).type('33344422211');
    }

    enviarCadastro(){
        cy.get(CadastroElements.formCadastrar()).submit();
    }

    // Cenário positivo
    preencherSenhaForte(){
        cy.get(CadastroElements.inputSenha()).type('F_R$56f4');
    }
    
    cadastroEfetuado(){
        cy.get(CadastroElements.divPerfilUsuario()).should('be.visible');
    }
    

    // Cenário negativo
    preencherSenhaFraca(){
        cy.get(CadastroElements.inputSenha()).type('teste');
    }

    paginaAtual(){
        cy.get(".alert-error").should('be.visible');
    }


    
}

export default codigoCadastro;