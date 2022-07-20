Feature: Criação de usuário
    Como um utilizador do Raro Tube
    Desejo realizar meu cadastro
    Para ter acesso aos materiais exclusivos do curso.

    Background: Criar novo usuário 
        Given url baseUrl
        And path "/auth/cadastrar"

        Scenario:
            * def payload = {name: "Pimpo Go", email: "pimpo@g.com", password: "373a635cd42a283aabf54cc9bf2672f09b562fb6f0f4f7fc15fa8132bf75c877", codigoAcesso: "d1fb87e9-1f6f-4bd9-8715-a8e8eaa2d642"}
            And request payload
            When method post
            Then status 201

        Scenario: Cadastrar usuário com informações inválidas
            * def emailRandom = "bahia@" + java.util.UUID.randomUUID() + ".com"
            * def payload = {name: "Bahia Campeão", email: "#(emailRandom)", password: "baha88", codigoAcesso: "bed18d43-ec77-451b-9887-815f87f7667b"}
            And request payload
            When method post
            Then status 400
            And match response contains {"error": "Bad Request"}
            