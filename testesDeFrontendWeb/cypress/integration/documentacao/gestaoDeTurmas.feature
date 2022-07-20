Feature: Gestão de turmas
    Como um usuário administrador
    Desejo gerenciar as turmas do Raro Tube
    Para ter controle sobre a matrícula de alunos e conteúdos do curso.

    Background: Somente usuários com perfil administrador podem gerenciar turmas
        Given acessei com perfil administrador

        Scenario: Criação de novas turmas
            When cadastro uma nova turma 
            Then recebo um novo UUID de turma

        Scenario: Consultar turmas já cadastradas
            When vou consultar turmas 
            Then vejo a lista de todas as turmas cadastradas  
        
        Scenario: Atualização de turmas já cadastradas 
            When atualizo uma turma já cadastrada 
            Then recebo um novo UUID da turma 

        Scenario: Deletar turma já cadastrada 
            When removo uma turma já cadastrada 
            Then visualizo a mensagem "Turma removida com sucesso!"