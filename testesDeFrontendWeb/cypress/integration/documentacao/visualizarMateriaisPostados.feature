Feature: Visualizar materiais postados
    Como um usuário do Raro Tube
    Desejo visualizar os materiais postados
    Para consultar as lições disponíveis

    Background: Acesso o site da Raro Tube
        Given acessei a página da Raro Tube

        Scenario: Visualizo os materiais postados  
            When seleciono um aulão 
            Then sou direcionado para o link da aula 

        Scenario: Aulões disponiveis na página inicial  
            When acesso a página inicial
            Then Visualizo um campo escrito "Nossos aulões" 

        Scenario: Usuário autenticado 
            When acesso com meu usuário 
            Then visualizo os materiais relacionados às aulas do curso
            And vídeos favoritos 