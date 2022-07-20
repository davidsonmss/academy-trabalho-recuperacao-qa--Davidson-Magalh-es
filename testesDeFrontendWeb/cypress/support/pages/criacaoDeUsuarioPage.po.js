class CriacaoDeUsuarioPage {

    nomeUsuario = "[name='nome']"
    emailUsuario = "[name='email']"
    senhaUsuario = "[name='senha']"
    confirmarSenhaUsuario = "[name='confirmarSenha']"
    codigoTurma = "[name='codigoAcesso']"


visitarPaginaCadastro() {
    cy.visit("/cadastro");
}

cadastrarUsuario(nome, email, senha, confirmacaoSenha, codigoDaTurma) {
    cy.get(this.nomeUsuario).type(nome);
    cy.get(this.emailUsuario).type(email);
    cy.get(this.senhaUsuario).type(senha);
    cy.get(this.confirmarSenhaUsuario).type(confirmacaoSenha);
    cy.get(this.codigoTurma).type(codigoDaTurma);
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

cadastrarUsuarioErro(nome, email, senha, confirmacaoSenha, codigoDaTurma) {
    cy.get(this.nomeUsuario).type(nome);
    cy.get(this.emailUsuario).type(email);
    cy.get(this.senhaUsuario).type(senha);
    cy.get(this.confirmarSenhaUsuario).type(confirmacaoSenha);
    cy.get(this.codigoTurma).type(codigoDaTurma);
    cy.intercept("POST", "https://rarotube-api.herokuapp.com/auth/cadastrar",{
        statusCode: 400,
    body: [{
            "nome": "Davidson Go",
            "email": "pimpo@go.com",
            "senha": "5988",
            "codigoAcesso": "123e4567-e89b-12d3-a456-426655440000"
            }],
    });
}

cadastrarUsuarioNomeVazio(email, senha, confirmacaoSenha, codigoDaTurma) {
    cy.get(this.nomeUsuario);
    cy.get(this.emailUsuario).type(email);
    cy.get(this.senhaUsuario).type(senha);
    cy.get(this.confirmarSenhaUsuario).type(confirmacaoSenha);
    cy.get(this.codigoTurma).type(codigoDaTurma);
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

botaocadastro() {
    cy.contains("button", "Cadastrar").click();
}

verificarBotaoEsconder(senha) {
    cy.get(this.senhaUsuario).type(senha);
    cy.get(".icon-action").eq(0).click();
    
    
}
validarBotaoEsconderVisivel() {
    cy.get(".icon-action").should("have.focus");
}

verificarMensagemTela(mensagem) {
    cy.contains(mensagem).should("be.visible");
}

}

export var criacaoDeUsuarioPage = new CriacaoDeUsuarioPage();