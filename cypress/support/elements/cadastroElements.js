class cadastroElements {

    inputNome = () => {
        let inputNome = "input[name='txNome']";
        return inputNome;
    }

    inputEmail = () => {
        let inputEmail = "input[name='txEmail']";
        return inputEmail;
    }

    inputSenha = () => {
        let inputSenha = "input[name='txSenha']";
        return inputSenha;
    }

    formCriarConta = () => {
        let btnCriarConta = "form";
        return btnCriarConta;
    }

    inputSobrenome = () => {
        let inputSobrenome = "input[name='txSobrenome']";
        return inputSobrenome;
    }

    inputCpf = () => {
        let inputCpf = "input[name='txCPF']";
        return inputCpf;
    }

    formCadastrar = () => {
        let btnCadastrar = "form";
        return btnCadastrar;
    }
}

export default cadastroElements;