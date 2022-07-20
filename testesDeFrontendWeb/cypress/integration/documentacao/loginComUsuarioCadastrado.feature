Feature: Login com usuário cadastrado
    Como um usuário cadastrado no Raro Tube
    Desejo realizar minha autenticação no sistema
    Para ter acesso ao material exclusivo do curso.

    Background: Acessar a página login
        Given cadastrei um usuário
        And acessei a página de login 
    
        Scenario: Para acessar o site deve ser fornecido o e-mail e senha já cadastrados
            When informo um e-mail e senha autenticado 
            |       email       |             pimpo@go.com             |
            |       senha       |               bahia88                |
            Then o usuário acessa o site com sucesso 

        Scenario: Forneço um e-mail ou senha não autenticado 
            When informo um e-mail não autenticado
            |       email       |           emailerrado@g.com          |
            |       senha       |               bahia88                |
            Then visualizo a mensagem "E-mail ou senha inválidos"
        
        Scenario: O campo senha deve conter o botão esconder    
            When clico no botão esconder 
            |       senha       |                  bahia88               |
            Then visualizo mudança de comportamento do botão

