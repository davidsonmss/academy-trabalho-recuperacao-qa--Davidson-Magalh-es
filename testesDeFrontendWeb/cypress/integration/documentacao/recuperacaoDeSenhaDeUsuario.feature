Feature: Recuperação de senha de usuário
    Como um usuário cadastrado no Raro Tube que esqueceu a senha de acesso ao sistema
    Desejo recuperar minha senha
    Para voltar a ter acesso ao material exclusivo do curso.

    Background: Recuperação de senha de acesso 
        Given cadastrei um usuário
        And clico em esqueci minha senha
        When informo o e-mail 
        |       email       |             pimpo@go.com             |
        And solicito o código de recuperação de senha

        Scenario: Cadastrar uma nova senha   
            When cadastro e confirmo a nova senha
            |       codigo      |                7e8864            |
            |       senha       |               bahianovo          |
            |  confirmacaoSenha |               bahianovo          |
            Then visualizo a mensagem "Nova senha gerada com sucesso"

        Scenario: Cadastrar senhas diferentes 
            When cadastro uma senha diferente da outra
            |       codigo      |                7e8864            |
            |       senha       |               bahianovo          |
            |  confirmacaoSenha |              bahiavelho          |
            Then visualizo a mensagem "As senhas devem ser iguais"

        Scenario: O campo senha e confirmar senha deve conter o botão esconder    
            When clico no botão esconder nova senha
            |       senha       |                  bahia88               | 
            Then visualizo mudança de comportamento do botão    