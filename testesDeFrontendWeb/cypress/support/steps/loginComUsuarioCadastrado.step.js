import { loginComUsuarioCadastradoPage } from "../pages/LoginComUsuarioCadastradoPage.po";

Given ("cadastrei um usuário", () => {
    loginComUsuarioCadastradoPage.cadastrarUsuario();
});

Given ("acessei a página de login", () => {
    loginComUsuarioCadastradoPage.visitarPaginaLogin();
});

When ("informo um e-mail e senha autenticado", (tabela) => {
    var dados = tabela.rowsHash();
    loginComUsuarioCadastradoPage.loginUsuario(dados.email, dados.senha);
});

Then ("o usuário acessa o site com sucesso", () => {
    loginComUsuarioCadastradoPage.verificarPaginaDoAluno();
});

When ("informo um e-mail não autenticado", (tabela) => {
    var dados = tabela.rowsHash();
    loginComUsuarioCadastradoPage.loginUsuario(dados.email, dados.senha);
});

Then ("visualizo a mensagem {string}", (mensagem) => {
    loginComUsuarioCadastradoPage.verificarMensagemTela(mensagem);
});

When ("clico no botão esconder", (tabela) => {
    var dados = tabela.rowsHash();
    loginComUsuarioCadastradoPage.verificarBotaoEsconder(dados.senha);
});

Then ("visualizo mudança de comportamento do botão", () => {
    loginComUsuarioCadastradoPage.validarBotaoEsconderVisivel();
});