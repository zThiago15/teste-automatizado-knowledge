/* global Given, Then, When */

import codigoKnowledge from '../pageobjects/codigoKnowledge'
const CodigoKnowledge = new codigoKnowledge()

Given('que o usuário acessou a pagina', () => {
    CodigoKnowledge.acessarSite();
})

When('clicar no botão Sobre nós', () => {
    CodigoKnowledge.clicarBotaoSobreNos();
}) 

Then('devo visualizar a página', () => {
    CodigoKnowledge.visualizarPagina();
})    