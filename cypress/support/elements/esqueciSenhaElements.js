class esqueciSenhaElements {
    btnEntrar = () => {
        let btnEntrar =  "a[href='login.php']";
        return btnEntrar;
    }

    btnRecuperarSenha = () => {
        let btnRecuperarSenha = ".recuperar-senha";
        return btnRecuperarSenha;
    }

    inputEmail = () => {
        let inputEmail = "input[id='txEmail']";
        return inputEmail;
    }

    btnEnviarEmail = () => {
        let btnEnviarEmail = "form[class='form-recuperar-senha']";
        return btnEnviarEmail;
    }

    txSucess = () => {
        let messageSucess = "p[class='sucess']";
        return messageSucess;
    }

    txFail = () => {
        let messageFail = "p[class='fail']";
        return messageFail;
    }
}

export default esqueciSenhaElements;