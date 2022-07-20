class ConsultaDeMaterialPage {

    botaoLogin = "#btnLogin"
    emailUsuario = "[name='email']"
    senhaUsuario = "[name='senha']"

acessarPaginaRaroTube() {
    cy.visit("");
}

verificarBotaoLogin() {
    cy.contains("button", "Login").should("be.visible");
}

verificarVideo() {
    cy.get("#linkThumbnail").should("be.visible");
}

logarUsuario() {
    cy.get(this.botaoLogin).click();
    cy.get(this.emailUsuario).type("pimpo@go.com");
    cy.get(this.senhaUsuario).type("bahia88");
    cy.contains("button", "Login").click();
}

selecionarAulao() {
    cy.get("#linkThumbnail").click();
}

verificarPropriedadesAuloes() {
    cy.url().should("be.equal", "https://rarotube.herokuapp.com/video/3f2aac77-11ca-4b4f-8c39-43e0bf381f3d");
    cy.contains("TALKS - Marketing").should("be.visible");
    cy.contains("02/03/2022").should("be.visible");  
}

verificarDeixeUmComentario() {
    cy.get(".gjbwmz").should("be.visible");
}

verificarVideosRecomendados() {
    cy.contains("Vídeos Recomendados").should("be.visible");
}
}

export var consultaDeMaterialPage = new ConsultaDeMaterialPage(); 