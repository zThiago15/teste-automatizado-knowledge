/* global Given, Then, When, And */
import codigoLogin from '../pageobjects/codigoLogin';
const CodigoLogin = new codigoLogin();

Given('que usuário acessou a página principal', () => {
    CodigoLogin.acessarSite();
})

When('ele clicar no botão de login', () => {
    CodigoLogin.acessarPaginaLogin();
})

And('preencher o campo de email corretamente', () => {
    CodigoLogin.preencherEmailCorretamente();
})

And('preencher o campo de senha incorretamente', () => {
    CodigoLogin.preencherSenharCorretamente();
})

Then('será mostrada uma mensagem de erro', () => {
    CodigoLogin.loginEfetuado();
})
