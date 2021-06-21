/* global Given, Then, When */

import codigoKnowledge from '../pageobjects/codigoKnowledge'
const CodigoKnowledge = new codigoKnowledge()

Given('que usuário acessou a página', () => {
    CodigoKnowledge.acessarSite();
})

When('clicar no botão Sobre nós', () => {
    CodigoKnowledge.clicarBotaoSobreNos();
}) 

Then('devo visualizar a página', () => {
    CodigoKnowledge.visualizarPagina();
})    