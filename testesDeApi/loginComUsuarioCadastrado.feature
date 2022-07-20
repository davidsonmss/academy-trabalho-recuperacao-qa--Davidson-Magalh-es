Feature: Login com usuário cadastrado
    Como um usuário cadastrado no Raro Tube
    Desejo realizar minha autenticação no sistema
    Para ter acesso ao material exclusivo do curso.

    Background: Acessar a página de login
        Given url baseUrl
        And path "/auth/login"

        Scenario: Login realizado
            * def payload = {email: "pimpo@go.com",senha: "bahia88"}
            And request payload
            When method post 
            Then status 201

        Scenario: Informar e-mail inválido
            * def payload = {email: "pimpo@go",senha: "bahia88"}
            And request payload
            When method post 
            Then status 400
            And match response contains {"error": "Bad Request"}
 
        Scenario: Login não autorizado.	
            * def payload = {email: "pimpo@vice.com",senha: "bahia88"}
            And request payload
            When method post
            Then status 401
            And match response contains {"message": "Unauthorized"}
