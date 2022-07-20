import { consultaDeMaterialPage } from "../pages/consultaDeMaterialPage.po";

Given ("acessei a página da Raro Tube", () => {
    consultaDeMaterialPage.acessarPaginaRaroTube();
});

When ("não estou registrado", () => {
    consultaDeMaterialPage.verificarBotaoLogin();
});

Then ("visualizo os materiais postados", () => {
    consultaDeMaterialPage.verificarVideo();
});

When ("estou logado", () => {
    consultaDeMaterialPage.logarUsuario();
});

When ("seleciono um vídeo", () => {
    consultaDeMaterialPage.selecionarAulao();
});

Then ("visualizo as propriedades: nome, url do vídeo, imagem de apresentação, descrição e data de publicação", () => {
    consultaDeMaterialPage.verificarPropriedadesAuloes();
});

Then ("visualizo o campo de comentários", () => {
    consultaDeMaterialPage.verificarDeixeUmComentario();
});

Then ("deve aparecer uma sugestão de próximos vídeos", () => {
    consultaDeMaterialPage.verificarVideosRecomendados();
});