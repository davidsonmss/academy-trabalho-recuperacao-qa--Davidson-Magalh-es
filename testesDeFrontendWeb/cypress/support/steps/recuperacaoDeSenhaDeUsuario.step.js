import { recuperacaoDeSenhaDeUsuarioPage } from "../pages/recuperacaoDeSenhaDeUsuarioPage.po";

Given ("cadastrei um usuário", () => {
    recuperacaoDeSenhaDeUsuarioPage.cadastrarUsuario();
});

When ("clico em esqueci minha senha", () => {
    recuperacaoDeSenhaDeUsuarioPage.botaoEsqueciMinhaSenha();
});

When ("informo o e-mail", (tabela) => {
    var dados = tabela.rowsHash();
    recuperacaoDeSenhaDeUsuarioPage.informarEmail(dados.email);
});

When ("solicito o código de recuperação de senha", () => {
    recuperacaoDeSenhaDeUsuarioPage.botaoSolicitarCodigo();
});

When ("cadastro e confirmo a nova senha", (tabela) => {
    var dados = tabela.rowsHash();
    recuperacaoDeSenhaDeUsuarioPage.cadastrarNovaSenha(dados.codigo, dados.senha, dados.confirmacaoSenha);
});

Then ("visualizo a mensagem {string}", (mensagem) => {
    recuperacaoDeSenhaDeUsuarioPage.verificarMensagemTela(mensagem);
});

When ("cadastro uma senha diferente da outra", (tabela) => {
    var dados = tabela.rowsHash();
    recuperacaoDeSenhaDeUsuarioPage.cadastrarNovaSenha(dados.codigo, dados.senha, dados.confirmacaoSenha);
});

Then ("visualizo a mensagem {string}", (mensagem) => {
    recuperacaoDeSenhaDeUsuarioPage.verificarMensagemTela(mensagem);
});

When ("clico no botão esconder nova senha", () => {
    recuperacaoDeSenhaDeUsuarioPage.verificarBotaoEsconderNovaSenha();
});

Then ("visualizo mudança de comportamento do botão", () => {
    recuperacaoDeSenhaDeUsuarioPage.validarBotaoEsconderVisivel();
});