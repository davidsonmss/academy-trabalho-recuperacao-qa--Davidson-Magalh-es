Feature: Recuperação de senha de usuário
    Como um usuário cadastrado no Raro Tube que esqueceu a senha de acesso ao sistema
    Desejo recuperar minha senha
    Para voltar a ter acesso ao material exclusivo do curso.

    Background: Criar um novo código de recuperação de senha para o usuário
        Given url baseUrl

        Scenario: Código enviado com sucesso
            And path "/auth/solicitar-codigo"
            * def payload = {email: "pimpo@go.com"}
            And request payload 
            When method post
            Then status 201

        Scenario: Não informar o e-mail
            And path "/auth/solicitar-codigo"
            * def payload = {email: ""}
            And request payload 
            When method post 
            Then status 400
            And match response contains {"error": "Bad Request"}

        Scenario: Código não informado
            And path "/auth/solicitar-codigo"
            * def payload = {email: "pimpo@vice.com"}
            And request payload 
            When method post 
            Then status 404
            And match response contains {"message": "Not Found"}

        Scenario: Senha altera com sucesso
            And path "/auth/recuperar-senha"
            * def payload = {codigo: "6c6db6", novaSenha: "golbahia"}
            And request payload 
            When method patch
            Then status 200

        Scenario: Não informar o código 
             And path "/auth/recuperar-senha"
            * def payload = {codigo: "", novaSenha: "golbahia"}
            And request payload 
            When method patch
            Then status 400
            And match response contains {"error": "Bad Request"}

        Scenario: Informar código inválido
            And path "/auth/recuperar-senha"
            * def payload = {codigo: "5988", novaSenha: "golbahia"}
            And request payload 
            When method patch
            Then status 404
            And match response contains  {"message": "Not Found"}


