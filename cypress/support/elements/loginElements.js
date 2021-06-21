class loginElements {
    botaoLogin = () => {
        let btnLogin = "a[href='login.php']";
        return btnLogin;
    }

    inputEmail = () => {
        let inputEmail = "input[id='txEmailLogin']";
        return inputEmail;
    }

    inputSenha = () => {
        let inputSenha = "input[id='txSenhaLogin']";
        return inputSenha;
    }

    botaoEntrar = () => {
        let btnEntrar = "input[name='submit-login-usuario']";
        return btnEntrar;
    }
}

export default loginElements;