import { criacaoDeUsuarioPage } from "../pages/criacaoDeUsuarioPage.po";

Given ("acessei a página de cadastrar usuário", () => {
    criacaoDeUsuarioPage.visitarPaginaCadastro();
});

When ("registro os dados para cadastro", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.cadastrarUsuario(dados.nome, dados.email, dados.senha, dados.confirmacaoSenha, dados.codigoDaTurma);
    criacaoDeUsuarioPage.botaocadastro();
});

Then ("visualizo a mensagem {string}", (mensagem) => {
    criacaoDeUsuarioPage.verificarMensagemTela(mensagem);
});

When ("registro o código turma inválido", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.cadastrarUsuario(dados.nome, dados.email, dados.senha, dados.confirmacaoSenha, dados.codigoDaTurma);
    criacaoDeUsuarioPage.botaocadastro();
});

When ("registro um e-mail em formato inválido", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.cadastrarUsuario(dados.nome, dados.email, dados.senha, dados.confirmacaoSenha, dados.codigoDaTurma);
    criacaoDeUsuarioPage.botaocadastro();
});

When ("registro um e-mail já cadastrado", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.cadastrarUsuarioErro(dados.nome, dados.email, dados.senha, dados.confirmacaoSenha, dados.codigoDaTurma);
    criacaoDeUsuarioPage.botaocadastro();
});

When ("não registro um nome", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.cadastrarUsuarioNomeVazio(dados.email, dados.senha, dados.confirmacaoSenha, dados.codigoDaTurma);
    criacaoDeUsuarioPage.botaocadastro();
});

When ("clico no botão esconder", (tabela) => {
    var dados = tabela.rowsHash();
    criacaoDeUsuarioPage.verificarBotaoEsconder(dados.senha);
});

Then ("visualizo mudança de comportamento do botão", () => {
    criacaoDeUsuarioPage.validarBotaoEsconderVisivel();
});