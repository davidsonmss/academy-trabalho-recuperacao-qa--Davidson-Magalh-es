Feature:  Gestão de turmas
    Como um usuário administrador
    Desejo gerenciar as turmas do Raro Tube
    Para ter controle sobre a matrícula de alunos e conteúdos do curso.

    Background: Gerenciar as turmas da Raro Tube
        Given url baseUrl 
        And path "/turmas"

        Scenario: Acesso não autorizado
            * def payload = [{id: "123e4567-e89b-12d3-a456-426655440000",nome: "Turma Qa",descricao: "QA",alunos: ["Pimpo"],videos: ["string"]}]
            And request payload
            When method get 
            Then status 401
            And match response contains {"message": "Unauthorized"}
