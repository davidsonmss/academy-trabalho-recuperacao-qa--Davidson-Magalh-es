class LoginComUsuarioCadastradoPage {
   
    nomeUsuario = "[name='nome']"
    emailUsuario = "[name='email']"
    senhaUsuario = "[name='senha']"
    confirmarSenhaUsuario = "[name='confirmarSenha']"
    codigoTurma = "[name='codigoAcesso']"

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
visitarPaginaLogin() {
    cy.visit("/login");
}

loginUsuario(email, senha) {
    cy.get(this.emailUsuario).type(email);
    cy.get(this.senhaUsuario).type(senha);
    cy.contains("button", "Login").click();
}

verificarPaginaDoAluno() {
    cy.contains("Favoritos").should("be.visible");
}

verificarMensagemTela(mensagem) {
    cy.contains(mensagem).should("be.visible");
}

verificarBotaoEsconder(senha) {
    cy.get(this.senhaUsuario).type(senha);
    cy.get(".icon-action").eq(0).click();
}

validarBotaoEsconderVisivel() {
    cy.get(".icon-action").should("have.focus");
}
}

export var loginComUsuarioCadastradoPage = new LoginComUsuarioCadastradoPage