/// <reference types="Cypress" />

import elementsKnowledge from '../elements/elementsKnoledge'
const ElementsKnowledge = new elementsKnowledge()
const url = Cypress.config("baseUrl")

class codigoKnowledge {
    acessarSite(){
        cy.visit(url); //Acessa a página principal
    }

    clicarBotaoSobreNos(){
        cy.get(ElementsKnowledge.botaoSobreNos()).click() //Clica no botão Sobre Nós
    }   

    visualizarPagina(){
        cy.get('.header-desc').should('not.be.empty') //Verifica se a descrição não está vazia
    }
}   

export default codigoKnowledge;