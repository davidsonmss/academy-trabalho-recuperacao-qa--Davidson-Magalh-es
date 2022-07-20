class VisualizarMateriaisPostadosPage{

    botaoLogin = "#btnLogin"
    emailUsuario = "[name='email']"
    senhaUsuario = "[name='senha']"

acessarPaginaRaroTube() {
    cy.visit("");
}

selecionarAulao() {
    cy.get("#linkThumbnail").click();
}

verificarUrlDoVideo() {
    cy.url().should("be.equal", "https://rarotube.herokuapp.com/video/3f2aac77-11ca-4b4f-8c39-43e0bf381f3d");
}

verificarNossosAuloes() {
    cy.contains("Nossos Aulões").should("be.visible");
}

logarUsuario() {
    cy.get(this.botaoLogin).click();
    cy.get(this.emailUsuario).type("pimpo@go.com");
    cy.get(this.senhaUsuario).type("bahia88");
    cy.contains("button", "Login").click();
}

verificarAulasDoCurso() {
    cy.contains("Aulas do curso").should("be.visible");
}

verificarFavoritos() {
    cy.contains("Favoritos").should("be.visible");
}
}

export var visualizarMateriaisPostadosPage = new VisualizarMateriaisPostadosPage(); 