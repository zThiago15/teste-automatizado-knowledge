/* global Given, Then, When, And */
import codigoCadastro from '../pageobjects/codigoCadastro';
const CodigoCadastro = new codigoCadastro();

Given('que o usuário acessou a página principal', () => {
    CodigoCadastro.acessarSite();
})

When('ele preencher o campo de nome corretamente', () => {
    CodigoCadastro.preencherNomeCorretamente();
})

And('preencher o campo de email corretamente', () => {
    CodigoCadastro.preencherEmailIncorretamente();
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

Then('então o aluno será cadastrado', () => {
    CodigoCadastro.cadastroEfetuado();
})
