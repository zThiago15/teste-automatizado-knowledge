/* global Given, Then, When, And */
import codigoCadastro from '../pageobjects/codigoCadastro';
const CodigoCadastro = new codigoCadastro();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from falling the test
    return false
})

Given('que o aluno acessou a página principal', () => {
    CodigoCadastro.acessarSite();
})

When('ele preencher o campo de nome corretamente', () => {
    CodigoCadastro.preencherNomeCorretamente();
})

And('preencher o campo de email corretamente', () => {
    CodigoCadastro.preencherEmailCorretamente();
})

And('preencher o campo de senha com senha forte', () => {
    CodigoCadastro.preencherSenhaForte();
})

And('clicar no botão de criar conta', () => {
    CodigoCadastro.continuarCadastro();
})

And('preencher campo de sobrenome corretamente', () => {
    CodigoCadastro.preencherSobrenomeCorretamente();
})

And('preencher campo de cpf corretamente', () => {
    CodigoCadastro.preencherCpfCorretamente();
})

And('clicar em cadastrar', () => {
    CodigoCadastro.enviarCadastro();
})

Then('então o cadastro será efetuado', () => {
    CodigoCadastro.cadastroEfetuado();
})
