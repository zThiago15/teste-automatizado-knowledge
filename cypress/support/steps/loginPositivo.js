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

And('preencher o campo de senha corretamente', () => {
    CodigoLogin.preencherSenharCorretamente();
})

Then('o usuário vai ser redirecionado a uma nova página', () => {
    CodigoLogin.loginEfetuado();
})
