class RecuperacaoDeSenhaDeUsuarioPage {

    nomeUsuario = "[name='nome']"
    emailUsuario = "[name='email']"
    senhaUsuario = "[name='senha']"
    confirmarSenhaUsuario = "[name='confirmarSenha']"
    codigoTurma = "[name='codigo']"
    senhaRecuperacao = "[name='novaSenha']"
    confirmarSenhaRecuperacao = "[name='confirmarNovaSenha']"


cadastrarUsuario() {
    cy.visit("/cadastro");
    cy.get(this.nomeUsuario).type("Pimpo Go");
    cy.get(this.emailUsuario).type("pimpo@go.com");
    cy.get(this.senhaUsuario).type("bahia88");
    cy.get(this.confirmarSenhaUsuario).type("bahia88");
    cy.get(this.codigoTurma).type("123e4567-e89b-12d3-a456-426655440000");
    cy.intercept("POST", "https://rarotube-api.herokuapp.com/auth/cadastrar",{
        statusCode: 201,
    body: [{
            "nome": "Pimpo Go",
            "email": "pimpo@go.com",
            "senha": "bahia88",
            "codigoAcesso": "123e4567-e89b-12d3-a456-426655440000"
            }],
    });
}

botaoEsqueciMinhaSenha() {
    cy.visit("/login");
    cy.contains("Esqueci minha senha").click();
}

informarEmail(email) {
    cy.get(this.emailUsuario).clear().type(email);
}

botaoSolicitarCodigo() {
    cy.contains("button", "Solicitar código").click();
}
cadastrarNovaSenha(codigo, senha, confirmacaoSenha) {
    cy.visit("/novasenha");
    cy.get(this.codigoTurma).clear().type(codigo);
    cy.get(this.senhaRecuperacao).clear().type(senha);
    cy.get(this.confirmarSenhaRecuperacao).type(confirmacaoSenha);
    cy.contains("button", "Criar nova senha").click();
}

verificarMensagemTela(mensagem) {
    cy.contains(mensagem).should("be.visible");
}

verificarBotaoEsconderNovaSenha() {
    cy.visit("/novasenha");
    cy.get(".icon-action").eq(0).click();
}

validarBotaoEsconderVisivel() {
    cy.get(".icon-action").should("have.focus");
}
}

export var recuperacaoDeSenhaDeUsuarioPage = new RecuperacaoDeSenhaDeUsuarioPage(); 