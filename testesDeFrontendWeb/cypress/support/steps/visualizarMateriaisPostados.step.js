import { visualizarMateriaisPostadosPage } from '../pages/visualizarMateriaisPostadosPage.po'

Given ("acessei a página da Raro Tube", () => {
    visualizarMateriaisPostadosPage.acessarPaginaRaroTube();
});

When ("seleciono um aulão", () => {
    visualizarMateriaisPostadosPage.selecionarAulao();
});

Then ("sou direcionado para o link da aula", () => {
    visualizarMateriaisPostadosPage.verificarUrlDoVideo();
});

When ("acesso a página inicial", () => {
    visualizarMateriaisPostadosPage.acessarPaginaRaroTube();
});

Then ("Visualizo um campo escrito {string}", () => {
    visualizarMateriaisPostadosPage.verificarNossosAuloes();
});

When ("acesso com meu usuário", () => {
    visualizarMateriaisPostadosPage.logarUsuario();
});

Then ("visualizo os materiais relacionados às aulas do curso", () => {
    visualizarMateriaisPostadosPage.verificarAulasDoCurso();
});

Then ("vídeos favoritos", () => {
    visualizarMateriaisPostadosPage.verificarFavoritos();
});