Feature: Criação de usuário
    Como um utilizador do Raro Tube
    Desejo realizar meu cadastro
    Para ter acesso aos materiais exclusivos do curso.

    Background: Acessar a página de registrar usuário  
        Given acessei a página de cadastrar usuário 

        Scenario: Devem ser preenchidos os campos obrigatórios
            When registro os dados para cadastro 
            |       nome        |              Pimpo Go                | 
            |       email       |             pimpo@go.com             |
            |       senha       |               bahia88                |
            |  confirmacaoSenha |               bahia88                |
            |    codigoDaTurma  | 123e4567-e89b-12d3-a456-426655440000 |
            Then visualizo a mensagem "Usuário cadastrado com sucesso!"
        
        Scenario: Cadastrar um usuário com código turma incorreto 
            When registro o código turma inválido
            |       nome        |              Pimpo Go                | 
            |       email       |             pimpo@go.com             |
            |       senha       |               bahia88                |
            |  confirmacaoSenha |               bahia88                |
            |    codigoDaTurma  |          bahia5988-d2312-19978       |
            Then visualizo a mensagem "Código turma inválido"

        Scenario: Cadastrar um e-mail em formato inválido 
            When registro um e-mail em formato inválido 
            |       nome        |              Pimpo Go                | 
            |       email       |               pimpo@g                |
            |       senha       |               bahia88                |
            |  confirmacaoSenha |               bahia88                |
            |    codigoDaTurma  | 123e4567-e89b-12d3-a456-426655440000 |
            Then visualizo a mensagem "Email inválido"

        Scenario: Impossibilidade de cadastro com mesmo e-mail
            When registro um e-mail já cadastrado 
            |       nome        |             Davidson Go              | 
            |       email       |             pimpo@go.com             |
            |       senha       |                5988                  |
            |  confirmacaoSenha |                5988                  |
            |    codigoDaTurma  | 123e4567-e89b-12d3-a456-426655440000 |
            Then visualizo a mensagem "Usuário já cadastrado"

        Scenario: Cadastrar um usuário com o campo nome sem preencher  
            When não registro um nome  
            |       nome        |                                      | 
            |       email       |             pimpo@go.com             |
            |       senha       |               bahia88                |
            |  confirmacaoSenha |               bahia88                |
            |    codigoDaTurma  | 123e4567-e89b-12d3-a456-426655440000 |
            Then visualizo a mensagem "Campo obrigatório"

        Scenario: O campo senha e confirmar senha deve conter o botão esconder    
            When clico no botão esconder
            |       senha       |                  bahia88               |
            Then visualizo mudança de comportamento do botão