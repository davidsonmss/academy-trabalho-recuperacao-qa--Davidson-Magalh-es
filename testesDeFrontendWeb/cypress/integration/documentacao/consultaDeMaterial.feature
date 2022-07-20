Feature: Consulta de material 
    Como um usuário do Raro Tube
    Desejo consultar determinado material postado
    Para ter acesso ao conteúdo das aulas	

    Background: Consulta de materiais postados 
        Given acessei a página da Raro Tube
    
        Scenario: Deve consultar os materiais mesmo sem estar registrado 
            When não estou registrado 
            Then visualizo os materiais postados 

        Scenario: O material deve conter as propriedades para os alunos  
            And estou logado 
            When seleciono um vídeo  
            Then visualizo as propriedades: nome, url do vídeo, imagem de apresentação, descrição e data de publicação 

        Scenario: Deve ser exibido um campo para comentários 
            And estou logado 
            When seleciono um vídeo  
            Then visualizo o campo de comentários

        Scenario: Deve existir um painel de vídeos recomendados 
            When seleciono um vídeo  
            Then deve aparecer uma sugestão de próximos vídeos 

