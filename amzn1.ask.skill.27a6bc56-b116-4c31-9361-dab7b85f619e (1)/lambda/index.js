const Alexa = require('ask-sdk-core');
const AlexaShopping = require('ask-sdk-model');

// Questões do CTFL
const QUESTOES_CTFL = [
  {
    questao: 'Qual é o objetivo da fase de planejamento de teste?',
    answer: 'A',
    opcoes: 'A) Identificar os riscos do projeto | B) Definir o cronograma de teste | C) Elaborar casos de teste | D) Executar os testes'
  },
  {
    questao: 'O que é um defeito?',
    answer: 'D',
    opcoes: 'A) Uma falha na execução do teste | B) Um erro cometido pelo testador | C) Uma variação em relação ao esperado | D) Uma anomalia no produto de software'
  },
  {
    questao: 'O que é regressão de software?',
    answer: 'C',
    opcoes: 'A) Um tipo de teste que verifica a funcionalidade básica do sistema | B) Um processo para identificar riscos no projeto de desenvolvimento de software | C) Um tipo de teste que verifica se as alterações no software não afetam funcionalidades existentes | D) Uma técnica para melhorar a produtividade da equipe de teste'
  },
  {
    questao: 'O que é um caso de teste?',
    answer: 'B',
    opcoes: 'A) Um documento que descreve o cronograma de teste | B) Um conjunto de entradas, condições de execução e resultados esperados | C) Um relatório que descreve os defeitos encontrados durante o teste | D) Uma técnica para medir a eficácia do processo de teste'
  },
  {
    questao: 'O que é a cobertura de teste?',
    answer: 'D',
    opcoes: 'A) A porcentagem de defeitos encontrados durante o teste | B) O número total de casos de teste executados | C) A duração do ciclo de vida do teste | D) A medida da extensão em que o software é testado'
  },
  {
    questao: 'Qual é o objetivo do teste de integração?',
    answer: 'B',
    opcoes: 'A) Verificar a conformidade do sistema com requisitos funcionais | B) Testar a interação entre diferentes componentes do sistema | C) Avaliar a usabilidade e a experiência do usuário | D) Encontrar defeitos nas funcionalidades do sistema'
  },
  {
    questao: 'O que é um ambiente de teste?',
    answer: 'C',
    opcoes: 'A) O conjunto de ferramentas utilizadas para automatizar os testes | B) A equipe responsável pela execução dos testes | C) O hardware, software e configurações necessários para realizar os testes | D) O cronograma de execução dos testes'
  },
  {
    questao: 'O que é uma técnica de teste baseada em caixa-preta?',
    answer: 'A',
    opcoes: 'A) Uma técnica em que os testes são realizados sem conhecimento interno do sistema | B) Uma técnica que envolve a execução de todos os cenários possíveis | C) Uma técnica que utiliza apenas dados de entrada válidos | D) Uma técnica que se concentra em testar casos extremos'
  },
  {
    questao: 'Qual é o objetivo do teste de desempenho?',
    answer: 'D',
    opcoes: 'A) Verificar a conformidade do sistema com requisitos funcionais | B) Testar a interação entre diferentes componentes do sistema | C) Avaliar a usabilidade e a experiência do usuário | D) Avaliar o desempenho do sistema em condições específicas de carga'
  },
  {
    questao: 'O que é uma técnica de teste baseada em caixa-branca?',
    answer: 'B',
    opcoes: 'A) Uma técnica em que os testes são realizados sem conhecimento interno do sistema | B) Uma técnica que utiliza conhecimento interno do sistema para criar os testes | C) Uma técnica que se concentra em testar a interface do usuário | D) Uma técnica que envolve a execução de todos os cenários possíveis'
  },
  {
    questao: 'O que é teste de aceitação?',
    answer: 'C',
    opcoes: 'A) Testar a interface do usuário do sistema | B) Testar a funcionalidade básica do sistema | C) Verificar se o sistema atende aos requisitos do cliente | D) Testar a performance e a escalabilidade do sistema'
  },
  {
    questao: 'O que é uma falha?',
    answer: 'C',
    opcoes: 'A) Uma anomalia no produto de software | B) Uma variação em relação ao esperado | C) Uma ação ou condição que leva a um resultado indesejado | D) Uma falha na execução do teste'
  },
  {
    questao: 'Qual é o objetivo do teste de segurança?',
    answer: 'D',
    opcoes: 'A) Verificar a conformidade do sistema com requisitos funcionais | B) Testar a interação entre diferentes componentes do sistema | C) Avaliar a usabilidade e a experiência do usuário | D) Identificar vulnerabilidades e riscos de segurança no sistema'
  },
  {
    questao: 'O que é teste de usabilidade?',
    answer: 'C',
    opcoes: 'A) Testar a interface do usuário do sistema | B) Testar a funcionalidade básica do sistema | C) Avaliar a facilidade de uso e a experiência do usuário | D) Testar a performance e a escalabilidade do sistema'
  },
  {
    questao: 'O que é um requisito funcional?',
    answer: 'A',
    opcoes: 'A) Uma especificação do comportamento do sistema | B) Uma característica não essencial do sistema | C) Uma medida de desempenho do sistema | D) Uma restrição no processo de desenvolvimento de software'
  },
  {
    questao: 'O que é um teste de carga?',
    answer: 'B',
    opcoes: 'A) Testar a interface do usuário do sistema | B) Testar o comportamento do sistema sob uma carga específica | C) Avaliar a facilidade de uso e a experiência do usuário | D) Testar a performance e a escalabilidade do sistema'
  },
  {
    questao: 'O que é uma suíte de teste?',
    answer: 'C',
    opcoes: 'A) Uma ferramenta utilizada para executar testes automatizados | B) Um conjunto de casos de teste individuais | C) Um conjunto de casos de teste relacionados que são executados em conjunto | D) Um relatório que descreve os defeitos encontrados durante o teste'
  },
  {
    questao: 'O que é um teste de sistema?',
    answer: 'A',
    opcoes: 'A) Um teste que verifica se o sistema atende aos requisitos | B) Um teste que verifica a interação entre diferentes componentes | C) Um teste que se concentra em testar a interface do usuário | D) Um teste que verifica a performance e a escalabilidade do sistema'
  },
  {
    questao: 'O que é um teste de unidade?',
    answer: 'D',
    opcoes: 'A) Um teste que verifica se o sistema atende aos requisitos | B) Um teste que verifica a interação entre diferentes componentes | C) Um teste que se concentra em testar a interface do usuário | D) Um teste que verifica se cada componente individual funciona corretamente'
  },
  {
    questao: 'Qual é o objetivo do teste de estresse?',
    answer: 'D',
    opcoes: 'A) Verificar a conformidade do sistema com requisitos funcionais | B) Testar a interação entre diferentes componentes do sistema | C) Avaliar a usabilidade e a experiência do usuário | D) Avaliar o comportamento do sistema sob condições extremas de carga'
  },
  {
    questao: 'Qual das seguintes respostas descreve uma condição de teste?',
    answer: 'B',
    opcoes: 'A) Uma característica distinta de um componente ou sistema | B) Um aspecto testável de um componente ou sistema identificado como base para os testes | C) O grau em que um produto de software fornece funções que atendem às necessidades declaradas e implícitas quando o software é utilizado sob condições específicas | D) Casos de teste projetados para executar combinações de condições e ações resultantes delas'
  },
  {
    questao: 'Qual das seguintes declarações é um objetivo válido para os testes?',
    answer: 'B',
    opcoes: 'A) O teste deve começar o mais tarde possível para que o desenvolvimento tenha tempo suficiente para criar um bom produto | B) Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas | C) Para provar que todos os possíveis defeitos são identificados | D) Para provar que qualquer defeito remanescente não causará nenhuma falha'
  },
  {
    questao: 'Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?',
    answer: 'B',
    opcoes: 'A) Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção | B) Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas | C) Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas | D) Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas'
  },
  {
    questao: 'Qual das declarações abaixo descreve a situação mais comum para uma falha descoberta durante os testes ou na produção?',
    answer: 'A',
    opcoes: 'A) O produto falhou quando o usuário selecionou uma opção em uma caixa de diálogo | B) A versão errada de um arquivo de código fonte compilado foi incluída na compilação | C) O algoritmo de computação utilizou as variáveis de entrada erradas | D) O desenvolvedor interpretou erroneamente a exigência do algoritmo'
  },
  {
    questao: 'O Sr. Test tem testado aplicações de software em dispositivos móveis por um período de 5 anos. Ele tem uma grande experiência em testar aplicações móveis e alcança os melhores resultados em um tempo mais curto do que outros. Durante vários meses, o Sr. Test não modificou os casos de testes automatizados existentes e não criou casos de testes. Isso leva a que cada vez menos defeitos sejam encontrados através da execução dos testes. Que princípio de teste o Sr. Test não observou?',
    answer: 'C',
    opcoes: 'A) Os testes dependem do ambiente | B) Não é possível realizar testes exaustivos | C) A repetição dos mesmos testes não encontrará novos defeitos | D) Defeitos agrupados'
  },
  {
    questao: 'De que forma os testes podem ser parte da Garantia de Qualidade?',
    answer: 'B',
    opcoes: 'A) Ela garante que os requisitos sejam suficientemente detalhados | B) Os testes reduzem o risco de má qualidade do software | C) Asseguram que as normas da organização sejam seguidas | D) Mede a qualidade do software em termos de número de casos de teste executados'
  },
  {
    questao: 'Qual das seguintes opções é VERDADEIRA?',
    answer: 'C',
    opcoes: 'A) O objetivo do teste de regressão é verificar se a correção foi implementada com sucesso, enquanto o objetivo do teste de confirmação é confirmar que a correção não tem efeitos colaterais | B) O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o sistema ainda está funcionando em um novo ambiente | C) O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido | D) O objetivo do teste de regressão é verificar se uma nova funcionalidade está funcionando, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido'
  },
  {
    questao: 'Qual dos seguintes itens NÃO deve ser um gatilho para testes de manutenção?',
    answer: 'A',
    opcoes: 'A) Decisão de testar a possibilidade de manutenção do software | B) Decisão de testar o sistema após a migração para uma nova plataforma operacional | C) Decisão de testar se os dados arquivados são possíveis de serem recuperados | D) Decisão de testar após "hot fixes"'
  },
  {
    questao: 'Quais das seguintes opções são papéis em uma revisão formal?',
    answer: 'D',
    opcoes: 'A) Desenvolvedor, Moderador, Líder de revisão, Revisor, Testador | B) Autor, Moderador, Gerente, Revisor, Desenvolvedor | C) Autor, Gerente, Líder de revisão, Revisor, Designer | D) Autor, Moderador, Líder de revisão, Revisor, Redator'
  },
  {
    questao: 'Qual dos itens a seguir fornece a definição do termo caso de teste?',
    answer: 'B',
    opcoes: 'A) Subconjunto do domínio do valor de uma variável dentro de um componente ou sistema no qual todos os valores devem ser tratados da mesma forma com base na especificação | B) Um conjunto de condições prévias, insumos, ações, resultados esperados e pós condições, desenvolvido com base em condições de teste | C) Produtos de trabalho produzidos durante o processo de teste para uso no planejamento, projeto, execução, avaliação e relatórios sobre testes | D) Uma fonte para determinar um resultado esperado para comparar com o resultado real do sistema em teste'
  },
   {
    questao: 'Qual dos seguintes é um objetivo típico dos testes?',
    answer: 'A',
    opcoes: 'A) Encontrar defeitos e falhas | B) Para validar os trabalhos do plano do projeto, conforme necessário | C) Garantia de testes completos | D) Comparação dos resultados reais com os resultados esperados'
  },
  {
    questao: 'Qual dos seguintes é um exemplo de falha em um sistema de controle de velocidade "cruise control" de um carro?',
    answer: 'C',
    opcoes: 'A) O desenvolvedor do sistema esqueceu de renomear variáveis após uma operação de cortar e colar | B) Código desnecessário que soa um alarme quando a inversão de marcha foi incluída no sistema | C) O sistema deixa de manter uma velocidade definida quando o volume do rádio é aumentado ou diminuído | D) A especificação do projeto do sistema indica erroneamente as velocidades'
  },
  {
    questao: 'Qual dos seguintes aspectos é mais um defeito do que uma causa raiz em um rastreador de fitness?',
    answer: 'C',
    opcoes: 'A) Como o autor dos requisitos não estava familiarizado com o domínio do treinamento físico, ele, portanto, assumiu erroneamente que os usuários queriam batimentos cardíacos em batidas por hora | B) O testador da interface do smartphone não tinha sido treinado em testes de transição de estado, então falhou um defeito grave | C) Uma variável de configuração incorreta implementada para a função GPS poderia causar problemas de localização durante o horário de verão | D) Como a projetista nunca havia trabalhado em dispositivos que pudessem ser usados, ela, como projetista da interface do usuário, entendeu mal os efeitos da luz solar refletida.'
  },
  {
  questao: 'Qual dos itens a seguir fornece a MELHOR descrição de testes exploratórios?',
  answer: 'B',
  opcoes: 'A) Uma prática de teste na qual uma investigação aprofundada dos antecedentes do objeto de teste é utilizada para identificar potenciais pontos fracos que são examinados pelos casos de teste | B) Uma abordagem aos testes em que os testadores projetam e executam dinamicamente testes baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores | C) Uma abordagem de projeto de teste na qual as atividades de teste são planejadas como sessões ininterruptas de análise e projeto de teste, frequentemente usadas em conjunto com testes baseados em checklist | D) Testes baseados na experiência, conhecimento e intuição do testador'
  },
  {
  questao: 'Qual dos seguintes define MELHOR o nível de risco?',
  answer: 'C',
  opcoes: 'A) O nível de risco é calculado somando as probabilidades de todas as situações problemáticas e os danos financeiros que delas resultam | B) O nível de risco é estimado pela multiplicação da probabilidade de uma ameaça ao sistema pela chance de que a ameaça ocorra e resulte em dano financeiro | C) O nível de risco é determinado por uma combinação da probabilidade de um evento indesejável e o impacto esperado desse evento | D) O nível de risco é a soma de todos os perigos potenciais de um sistema multiplicada pela soma de todas as perdas potenciais desse sistema'
 },
 {
  questao: 'Qual dos seguintes é o mais provável de ser um exemplo de risco de PRODUTO?',
  answer: 'A',
  opcoes: 'A) As características de segurança esperadas podem não ser suportadas pela arquitetura do sistema | B) Os desenvolvedores podem não ter tempo para corrigir todos os defeitos encontrados pela equipe de teste | C) Os casos de teste podem não oferecer cobertura total dos requisitos especificados | D) O ambiente de teste de desempenho pode não estar pronto antes que o sistema esteja pronto para entrega'
 },
 {
  questao: 'Qual das seguintes afirmações reflete CORRETAMENTE o valor dos testes estáticos?',
  answer: 'D',
  opcoes: 'A) Ao introduzir revisões, descobrimos que tanto a qualidade das especificações quanto o tempo necessário para o desenvolvimento e os testes aumentaram | B) Usando testes estáticos significa que temos melhor controle e gerenciamento de defeitos mais barato devido à facilidade de detecção de defeitos mais tarde no ciclo de vida | C) Agora que exigimos o uso de análise estática, as exigências não atendidas diminuíram e a comunicação entre testadores e desenvolvedores melhorou | D) Desde que começamos a usar análise estática, encontramos defeitos de codificação que podem não ter sido encontrados realizando apenas testes dinâmicos'
},
{
  questao: 'Qual das seguintes declarações sobre o uso de listas de verificação em uma revisão formal é CORRETA?',
  answer: 'D',
  opcoes: 'A) Como parte do planejamento da revisão, os revisores criam as listas de verificação necessárias para a revisão | B) Como parte da comunicação da questão, os revisores preenchem as listas de verificação previstas para a revisão | C) Como parte da reunião de revisão, os revisores criam relatórios de defeitos com base nas listas de verificação previstas para a revisão | D) Como parte do início da revisão, os revisores recebem as listas de verificação necessárias para a revisão'
},
 {
  questao: 'Qual das seguintes funções e responsabilidades se encaixa CORRETAMENTE em uma revisão formal?',
  answer: 'A',
  opcoes: 'A) Gerente - Decide sobre a execução das revisões | B) Líder de revisão - Assegura o funcionamento eficaz das reuniões de revisão | C) Escriba - Corrige defeitos no produto de trabalho em revisão | D) Moderador - Monitora a relação custo-benefício contínua'
},
{
  questao: 'As revisões que estão sendo utilizadas em sua organização têm os seguintes atributos: Há um papel de escriba; O objetivo é detectar defeitos potenciais; A reunião de revisão é liderada pelo autor; Os revisores encontram defeitos potenciais por revisão individual; É produzido um relatório de revisão. Qual dos seguintes tipos de revisão é o MAIS provável que seja utilizado?',
  answer: 'B',
  opcoes: 'A) Revisão Informal | B) Caminhada | C) Revisão Técnica | D) Inspeção'
},
{
  questao: 'Como resultado da análise de risco, mais testes estão sendo direcionados para aquelas áreas do sistema em teste onde os testes iniciais encontraram mais defeitos do que a média. Qual dos seguintes princípios de teste está sendo aplicado?',
  answer: 'D',
  opcoes: 'A) Cuidado com o paradoxo do pesticida | B) Os testes são dependentes do contexto | C) A ausência de erros é uma falácia | D) Defeitos agrupados'
},
{
  questao: 'Qual das seguintes tarefas é MUITO MAIS EFICIENTE a ser executada pelo gerente de testes?',
  answer: 'A',
  opcoes: 'A) Escrever relatórios resumidos de testes com base nas informações coletadas durante os testes | B) Testes de revisão desenvolvidos por outros | C) Preparar e adquirir dados de teste | D) Analisar, rever e avaliar os requisitos, especificações e modelos de testabilidade'
},
{
  questao: 'Qual dos seguintes é o mais provável de ser usado como motivo para usar um projeto piloto para introduzir uma ferramenta em uma organização?',
  answer: 'A',
  opcoes: 'A) A necessidade de avaliar como a ferramenta se ajusta aos processos e práticas existentes e determinar o que precisaria mudar | B) A necessidade de avaliar as habilidades de automação de testes e as necessidades de treinamento, mentoria e coaching dos testadores que irão utilizar a ferramenta | C) A necessidade de avaliar se a ferramenta fornece a funcionalidade necessária e não duplica as ferramentas de teste existentes | D) A necessidade de avaliar o fornecedor de ferramentas em termos de treinamento e outros tipos de apoio que eles fornecem'
},
{
  questao: 'O que é qualidade?',
  answer: 'B',
  opcoes: 'A) Atividades focadas em proporcionar confiança de que os requisitos de qualidade serão cumpridos | B) O grau em que um componente ou sistema satisfaz as necessidades declaradas e implícitas de suas diversas partes interessadas | C) O grau em que um componente ou sistema protege informações e dados para que as pessoas ou outros componentes ou sistemas tenham o grau de acesso adequado a seus tipos e níveis de autorização | D) Os custos totais incorridos em atividades e questões de qualidade e frequentemente divididos em custos de prevenção, custos de avaliação, custos de falhas internas e custos de falhas externas'
},

{
  questao: 'Qual dos seguintes é um objetivo típico do teste?',
  answer: 'A',
  opcoes: 'A) Prevenir defeitos | B) Reparação de defeitos | C) Comparação dos resultados reais com os resultados esperados | D) Analisando a causa do fracasso'
},

 {
  questao: 'Um telefone tocando momentaneamente distrai um programador, fazendo com que o programador programe inadequadamente a lógica que verifica o limite superior de uma variável de entrada. Mais tarde, durante os testes do sistema, um testador percebe que este campo de entrada aceita valores de entrada inválidos. A lógica codificada impropriamente para a verificação do limite superior é:',
  answer: 'D',
  opcoes: 'A) A causa raiz | B) O fracasso | C) O erro | D) O defeito'
},

  {
  questao: 'Um proprietário de produto diz que seu papel como testador em uma equipe Ágil é pegar todos os bugs antes do final de cada iteração. Qual dos seguintes é um princípio de teste que poderia ser usado para responder a esta falsa afirmação?',
  answer: 'B',
  opcoes: 'A) Agrupamento de defeitos | B) Os testes mostram a presença de defeitos | C) Ausência de erros de falácia | D) Análise da causa raiz'
},

 {
  questao: 'Os programadores frequentemente escrevem e executam testes unitários contra o código que eles escreveram. Durante esta atividade de autoteste, qual dos seguintes aspectos é uma mentalidade de testador que os programadores devem adotar para realizar estes testes unitários de forma eficaz?',
  answer: 'D',
  opcoes: 'A) Boa habilidade de comunicação | B) Cobertura de código | C) Avaliação de defeitos de código | D) Atenção aos detalhes'
},

 {
  questao: 'Considere as seguintes atividades de teste: (1) Seleção de testes de regressão (2) Avaliando a completude da execução do teste (3) Identificar quais histórias de usuários têm relatórios de defeitos em aberto (4) Avaliar se o número de testes para cada exigência é consistente com o nível de risco do produto Considere as seguintes maneiras como a rastreabilidade pode ajudar nos testes: (a) Melhorar a compreensibilidade dos relatórios de status dos testes para incluir o status dos itens de base do teste (b) Tornar os testes auditáveis (c) Fornecer informações para avaliar a qualidade do processo (d) Analisar o impacto das mudanças Qual dos seguintes aspectos combina a atividade de teste com a forma como a rastreabilidade pode auxiliar essa atividade?',
  answer: 'D',
  opcoes: 'A) 1d; 2b; 3c; 4a | B) 1b; 2d; 3a; 4c | C) 1d; 2c; 3a; 4b | D) 1d; 2b; 3a; 4c'
},

 {
  questao: 'Um testador participou de uma discussão sobre a estrutura de banco de dados proposta. O testador identificou um problema potencial de desempenho relacionado a certas buscas comuns de usuários. Este possível problema foi explicado para a equipe de desenvolvimento. Qual dos seguintes aspectos é uma contribuição de teste para o sucesso que o MELHOR corresponde a esta situação?',
  answer: 'C',
  opcoes: 'A) Permitindo que os testes requeridos sejam identificados em um estágio inicial | B) Assegurar que os processos sejam realizados corretamente | C) Reduzindo o risco de defeitos fundamentais de projeto | D) Reduzindo o risco de funcionalidade não testada'
},

{
  questao: 'Qual dos seguintes é um exemplo de uma tarefa que pode ser realizada como parte do processo de teste?',
  answer: 'B',
  opcoes: 'A) Análise de um defeito | B) Dados de teste de projeto | C) Atribuição de uma versão a um item de teste | D) Escrever uma história de usuário'
},

{
  questao: 'Você está executando um teste de desempenho com o objetivo de encontrar possíveis gargalos de rede nas interfaces entre os componentes de um sistema. Qual das seguintes afirmações descreve este teste?',
  answer: 'B',
  opcoes: 'A) Um teste funcional durante o nível de teste de integração | B) Um teste não-funcional durante o nível de teste de integração | C) Um teste funcional durante o nível de teste de componentes | D) Um teste não-funcional durante o nível de teste de componentes'
},

{
  questao: 'Qual das seguintes afirmações é verdadeira?',
  answer: 'C',
  opcoes: 'A) A análise de impacto é útil para os testes de confirmação durante os testes de manutenção | B) O teste de confirmação é útil para o teste de regressão durante o projeto do sistema | C) A análise de impacto é útil para testes de regressão durante os testes de manutenção | D) O teste de confirmação é útil para a análise de impacto durante os testes de manutenção'
},
{
  questao: 'Durante um projeto seguindo métodos ágeis, você encontra uma discrepância entre a interpretação do desenvolvedor de um critério de aceite e a interpretação do proprietário do produto, que você traz à tona durante uma sessão de refinamento da história do usuário. Qual dos seguintes aspectos é um benefício de independência de teste exemplificado por esta situação?',
  answer: 'D',
  opcoes: 'A) Reconhecimento de diferentes tipos de falhas | B) Assumir a responsabilidade primária pela qualidade | C) Remoção precoce de um defeito | D) Desafiar as suposições das partes interessadas'
},

{
  questao: 'Você está definindo o processo para realizar a análise de risco do produto como parte de cada iteração em um projeto Ágil. Qual dos seguintes é o lugar apropriado para documentar este processo em um plano de teste?',
  answer: 'B',
  opcoes: 'A) Escopo dos testes | B) Abordagem de testes | C) Métricas de testes | D) Gerenciamento da configuração do objeto de teste'
},

  // Adicione mais questões aqui
];

 const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
      const recomendacao = 'Para melhorar seu entendimento sobre qualidade e testes de software, gostaria de indicar dois ebook: O ebook "QA Iniciante: Dicas, conceitos,modelos e opiniões sobre qualidade de software " e "Manual do QAINICIANTE: Um Guia para implementar a qualidade de software". Ambos disponíveis na AMAZON. '
      const speechOutput =
        'Bem-vindo ao Quiz Teste de Software! Esse quiz é baseado na CTFL. Responda às perguntas com a opção correta. Se precisar de ajuda, diga "Me ajude". O total de perguntas corretas será informado ao final do jogo e você pode pular uma pergunta dizendo "PULAR". Diga "REPETIR" para ouvir a pergunta novamente. Está pronto para testar seus conhecimentos sobre testes de software?';
  
      const repromptOutput = 'Diga "sim" para começar o jogo ou "não" para sair.';
  
      
      return handlerInput.responseBuilder
        .speak(recomendacao + speechOutput)
        .reprompt(repromptOutput)
        .getResponse();
    },
  };
  
const QuestionIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;

    if (currentQuestion >= QUESTOES_CTFL.length) {
      return handlerInput.responseBuilder
        .speak('Não há mais perguntas.')
        .withShouldEndSession(true)
        .getResponse();
    }

    const questao = QUESTOES_CTFL[currentQuestion].questao;
    const opcoes = QUESTOES_CTFL[currentQuestion].opcoes;
    const speakOutput = `Pergunta ${currentQuestion + 1}: ${questao}. As opções de resposta são: ${opcoes}. Qual é a sua resposta?`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const MIN_QUESTIONS = 40;
const SCORE_UPDATE_INTERVAL = 5; // Intervalo de perguntas para atualização do score

const AnswerIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AnswerIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;
    const userAnswer = Alexa.getSlotValue(handlerInput.requestEnvelope, 'resposta');

    // Lógica para verificar a resposta do usuário
    const correctAnswer = QUESTOES_CTFL[currentQuestion].answer;
    if (userAnswer && userAnswer.trim().toUpperCase() === correctAnswer.toUpperCase()) { // Verifica se a resposta do usuário foi fornecida
      sessionAttributes.score = (sessionAttributes.score || 0) + 1;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      const speakOutput = 'Resposta correta! Parabéns!';
      return checkScore(handlerInput, sessionAttributes, speakOutput);
    } else {
      const currentAttempt = sessionAttributes.currentAttempt || 0;
      const maxAttempts = 1;
      if (currentAttempt < maxAttempts) {
        sessionAttributes.currentAttempt = currentAttempt + 1;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        const speakOutput = 'Resposta incorreta. Tente novamente.';
        const repromptOutput = `Qual é a sua resposta? Você tem mais ${maxAttempts - currentAttempt - 1} tentativa(s).`;
        return handlerInput.responseBuilder.speak(speakOutput + ' ' + repromptOutput).reprompt(repromptOutput).getResponse();
      } else {
        const speakOutput = 'Resposta incorreta. A resposta correta era ' + correctAnswer + '.';
        const repromptOutput = 'Lembre-se de consultar os simulados oficiais da CTFL.';
        sessionAttributes.currentAttempt = 0;
        if (sessionAttributes.currentQuestion === QUESTOES_CTFL.length - 1 && sessionAttributes.score < MIN_QUESTIONS) {
          const nextQuestionIndex = getRandomQuestionIndex(sessionAttributes);
          sessionAttributes.currentQuestion = nextQuestionIndex;
        } else {
          sessionAttributes.currentQuestion = currentQuestion + 1;
        }
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        const nextQuestion = QUESTOES_CTFL[sessionAttributes.currentQuestion].questao;
        const nextOptions = QUESTOES_CTFL[sessionAttributes.currentQuestion].opcoes;
        const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;
        return handlerInput.responseBuilder
          .speak(speakOutput + ' ' + repromptOutput + ' ' + speakNextQuestion)
          .reprompt(speakNextQuestion)
          .getResponse();
      }
    }
  },
};

function checkScore(handlerInput, sessionAttributes, speakOutput) {
  // Verifica se todas as perguntas foram respondidas
  if (sessionAttributes.score >= MIN_QUESTIONS && sessionAttributes.currentQuestion >= QUESTOES_CTFL.length - 1) {
    const finalScore = sessionAttributes.score || 0;
    const speakFinalScore = `Você respondeu todas as perguntas. Sua pontuação final é ${finalScore} de ${QUESTOES_CTFL.length}. `;
    const finalMessage = finalScore >= 26 ? 'Parabéns! Você foi aprovado! Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.' : 'Infelizmente, você foi reprovado. Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.';
    return handlerInput.responseBuilder.speak(speakOutput + ' ' + speakFinalScore + finalMessage).getResponse();
  } else if (sessionAttributes.score >= MIN_QUESTIONS) {
    const speakScoreUpdate = `Seu score atual é ${sessionAttributes.score}.`;
    const finalScore = sessionAttributes.score || 0;
    const finalMessage = finalScore >= 26 ? 'Parabéns! Você foi aprovado! Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.' : 'Infelizmente, você foi reprovado. Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.';
    return handlerInput.responseBuilder
      .speak(speakOutput + ' ' + speakScoreUpdate + ' ' + finalMessage)
      .reprompt(speakOutput)
      .getResponse();
  } else {
    sessionAttributes.currentQuestion = getRandomQuestionIndex(sessionAttributes);
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    const nextQuestion = QUESTOES_CTFL[sessionAttributes.currentQuestion].questao;
    const nextOptions = QUESTOES_CTFL[sessionAttributes.currentQuestion].opcoes;

    // Verifica se é hora de atualizar o score
    if ((sessionAttributes.currentQuestion + 1) % SCORE_UPDATE_INTERVAL === 0) {
      const currentScore = sessionAttributes.score || 0;
      const speakScoreUpdate = `Seu score atual é ${currentScore}.`;
      const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;
      return handlerInput.responseBuilder
        .speak(speakOutput + ' ' + speakScoreUpdate + ' ' + speakNextQuestion)
        .reprompt(speakNextQuestion)
        .getResponse();
    } else {
      const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;
      return handlerInput.responseBuilder
        .speak(speakOutput + ' ' + speakNextQuestion)
        .reprompt(speakNextQuestion)
        .getResponse();
    }
  }
}

function getRandomQuestionIndex(sessionAttributes) {
  const answeredQuestions = sessionAttributes.answeredQuestions || [];
  const remainingQuestions = QUESTOES_CTFL.filter((question, index) => !answeredQuestions.includes(index));
  
  // Verifica se todas as perguntas foram respondidas
  if (remainingQuestions.length === 0) {
    return getRandomQuestionIndexFallback(sessionAttributes);
  }
  
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const nextQuestionIndex = QUESTOES_CTFL.findIndex(question => question === remainingQuestions[randomIndex]);
  sessionAttributes.answeredQuestions = [...answeredQuestions, nextQuestionIndex];
  return nextQuestionIndex;
}

function getRandomQuestionIndexFallback(sessionAttributes) {
  const answeredQuestions = sessionAttributes.answeredQuestions || [];
  const remainingQuestions = QUESTOES_CTFL.filter((question, index) => !answeredQuestions.includes(index) && index !== 54);
  
  // Verifica se todas as perguntas foram respondidas, exceto a posição 54
  if (remainingQuestions.length === 0) {
    return -1; // Retorna -1 para indicar que todas as perguntas foram respondidas
  }
  
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const nextQuestionIndex = QUESTOES_CTFL.findIndex(question => question === remainingQuestions[randomIndex]);
  sessionAttributes.answeredQuestions = [...answeredQuestions, nextQuestionIndex];
  return nextQuestionIndex;
}

const TimerInterceptor = {
  process(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;

    if (currentQuestion > 0) {
      const startTime = sessionAttributes.startTime;
      const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo decorrido em segundos

      if (elapsedTime > 15) {
        const speakOutput = 'Tempo esgotado! Você excedeu o tempo limite de 15 segundos para responder.';

        // Aqui você pode adicionar a lógica desejada para lidar com o tempo esgotado, como pular para a próxima pergunta.
        // Neste exemplo, estou pulando para a próxima pergunta.
        sessionAttributes.currentQuestion = getRandomQuestionIndex(sessionAttributes);
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        const nextQuestion = QUESTOES_CTFL[sessionAttributes.currentQuestion].questao;
        const nextOptions = QUESTOES_CTFL[sessionAttributes.currentQuestion].opcoes;
        const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;
        return handlerInput.responseBuilder
          .speak(speakOutput + ' ' + speakNextQuestion)
          .reprompt(speakNextQuestion)
          .getResponse();
      }
    } else {
      sessionAttributes.startTime = new Date().getTime();
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    }

    return;
  },
};

const SkipIntentHandlerWithTimer = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'SkipIntent'
    );
  },
  handle(handlerInput) {
    stopTimer(handlerInput); // Para o cronômetro atual
    startTimer(handlerInput); // Inicia um novo cronômetro
    return SkipIntentHandler.handle(handlerInput);
  },
};

function stopTimer(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  sessionAttributes.startTime = null;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}

function startTimer(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  sessionAttributes.startTime = new Date().getTime();
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}


const PASSING_SCORE = 5;

const SkipIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'SkipIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;

    if (currentQuestion + 1 < QUESTOES_CTFL.length) {
      sessionAttributes.currentQuestion = currentQuestion + 1;
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      const nextQuestion = QUESTOES_CTFL[currentQuestion + 1].questao;
      const nextOptions = QUESTOES_CTFL[currentQuestion + 1].opcoes;

      const skipPhrases = [
        'Ok, vamos para a próxima pergunta.',
        'Sem problemas, pulando para a próxima pergunta.',
        'Entendido, avançando para a próxima pergunta.',
        'Ótimo, vamos para a próxima pergunta.',
        'Próxima pergunta à vista. Pulando para lá.'
      ];

      const randomIndex = Math.floor(Math.random() * skipPhrases.length);
      const speakNextQuestion = `${skipPhrases[randomIndex]} ${nextQuestion}. Aqui estão as opções de resposta: ${nextOptions}. Qual é a sua resposta?`;

      return handlerInput.responseBuilder
        .speak(speakNextQuestion)
        .reprompt(speakNextQuestion)
        .getResponse();
    } else {
      const finalScore = sessionAttributes.score || 0;
      const speakFinalScore = `Você respondeu todas as perguntas. Sua pontuação final é ${finalScore} de ${QUESTOES_CTFL.length}. `;

      let finalMessage = '';
      if (finalScore >= PASSING_SCORE) {
        finalMessage = 'Parabéns! Você foi aprovado! Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.';
      } else {
        finalMessage = 'Infelizmente, você foi reprovado. Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.';
      }

      return handlerInput.responseBuilder.speak(speakFinalScore + finalMessage).getResponse();
    }
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;
    const totalQuestions = QUESTOES_CTFL.length;

    const instructions = 'Ok aqui estão as instruções. Você pode testar seus conhecimentos respondendo perguntas sobre testes de software. Para responder uma pergunta, diga "Minha resposta é" seguido da resposta correta. Você também pode pular uma pergunta dizendo "Pular". Para ouvir a pergunta novamente diga "REPETIR". Lembre-se de que você tem duas chances para acertar cada pergunta.';
    const additionalInfo = 'A prova oficial da CTFL possui 40 questões de múltipla escolha em língua portuguesa. O mínimo de acertos exigido é de 65%, ou seja, 26 questões. O tempo é de 60 minutos (75 minutos se você estiver fazendo em um idioma não nativo). Para mais informações, consulte o site do BSTQB.';
    const bstqbSimulados = 'No site do BSTQB estão disponíveis 03 (três) simulados para baixar: provas A, B e C.';

    if (currentQuestion === 0) {
      // Primeira pergunta
      const question = QUESTOES_CTFL[currentQuestion];
      const speakOutput = `${instructions} ${additionalInfo} ${bstqbSimulados} Pronto! Vamos começar o quiz! Pergunta ${currentQuestion + 1}: ${question.questao}. As opções de resposta são: ${question.opcoes}. Qual é a sua resposta?`;

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    } else if (currentQuestion < totalQuestions) {
      // Próxima pergunta
      const question = QUESTOES_CTFL[currentQuestion];
      const speakNextQuestion = `${instructions} Próxima pergunta. ${question.questao}. As opções de resposta são: ${question.opcoes}. Qual é a sua resposta?`;

      return handlerInput.responseBuilder
        .speak(speakNextQuestion)
        .reprompt(speakNextQuestion)
        .getResponse();
    } else {
      // Todas as perguntas foram respondidas
      const speakOutput = `Você respondeu todas as perguntas. O quiz chegou ao fim. Obrigado por jogar!`;

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    }
  },
};

const RestartGameIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestartGameIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    sessionAttributes.score = 0;
    sessionAttributes.currentQuestion = getRandomQuestionIndex([]);
    sessionAttributes.usedQuestionIndexes = [];
    sessionAttributes.tries = 0;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    const nextQuestion = QUESTOES_CTFL[sessionAttributes.currentQuestion].questao;
    const nextOptions = QUESTOES_CTFL[sessionAttributes.currentQuestion].opcoes;
    const speakNextQuestion = `Vamos começar o jogo do zero. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;
    return handlerInput.responseBuilder.speak(speakNextQuestion).reprompt(speakNextQuestion).getResponse();
  },
};



const RepeatIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.RepeatIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentQuestion = sessionAttributes.currentQuestion || 0;
    const questao = QUESTOES_CTFL[currentQuestion].questao;
    const opcoes = QUESTOES_CTFL[currentQuestion].opcoes;
    const speakOutput = `Pergunta ${currentQuestion + 1}: ${questao}. As opções de resposta são: ${opcoes}. Qual é a sua resposta?`;
    
    sessionAttributes.currentQuestion = currentQuestion; // opcional, mas pode ser útil para manter o controle da pergunta atual
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);


    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const ScoreIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'ScoreIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentScore = sessionAttributes.score || 0;
    const speakOutput = `Seu score atual é ${currentScore} de ${QUESTOES_CTFL.length} perguntas.`;

    // Verifica se todas as perguntas foram respondidas
    if (sessionAttributes.score >= MIN_QUESTIONS && sessionAttributes.currentQuestion >= QUESTOES_CTFL.length - 1) {
      const finalScore = sessionAttributes.score || 0;
      const speakFinalScore = `Você respondeu todas as perguntas. Sua pontuação final é ${finalScore} de ${QUESTOES_CTFL.length}. `;
      const finalMessage = finalScore >= 26 ? 'Parabéns! Você foi aprovado! Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.' : 'Infelizmente, você foi reprovado. Lembre-se de que essas perguntas são apenas exemplos e podem ser usadas como ponto de partida. Para fazer o exame, estude usando o syllabus CTFL.';
      
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

      return handlerInput.responseBuilder.speak(speakOutput + ' ' + speakFinalScore + finalMessage).getResponse();
    } else {
      sessionAttributes.currentQuestion = getRandomQuestionIndex(sessionAttributes);
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      const nextQuestion = QUESTOES_CTFL[sessionAttributes.currentQuestion].questao;
      const nextOptions = QUESTOES_CTFL[sessionAttributes.currentQuestion].opcoes;

      // Verifica se é hora de atualizar o score
      if ((sessionAttributes.currentQuestion + 1) % SCORE_UPDATE_INTERVAL === 0) {
        const speakScoreUpdate = `Seu score atual é ${currentScore}.`;
        const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        return handlerInput.responseBuilder
          .speak(speakOutput + ' ' + speakScoreUpdate + ' ' + speakNextQuestion)
          .reprompt(speakNextQuestion)
          .getResponse();
      } else {
        const speakNextQuestion = `Próxima pergunta. ${nextQuestion}. As opções de resposta são: ${nextOptions}. Qual é a sua resposta?`;

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        return handlerInput.responseBuilder
          .speak(speakOutput + ' ' + speakNextQuestion)
          .reprompt(speakNextQuestion)
          .getResponse();
      }
    }
  },
};


const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent')
    );
  },
  handle(handlerInput) {
    const speakOutput = 'Obrigado por jogar o Quiz teste de software. Até mais! Acesse QA INICIANTE no instagram!';

    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.error(`Erro ocorrido: ${error.message}`);

    const speakOutput = 'Desculpe, não consegui entender o comando. Por favor, tente novamente ou abra um chamado brincadeirinha. Informe o erro nos comentarios da loja ou no instagram QA INICIANTE. Obrigado!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const YesIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
    );
  },
  handle(handlerInput) {
    // Lógica para lidar com a intenção Yes
    const speakOutput = 'Você disse sim!';
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};



const NoIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentScore = sessionAttributes.score || 0;
    const speakOutput = `Tudo bem! Obrigado por jogar! Seu score final é ${currentScore} pontos. Até a próxima!.  Volte quando quiser jogar ou quando estiver pronto.` ;
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};


const StopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent')
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const currentScore = sessionAttributes.score || 0;
    const speakOutput = `Obrigado por jogar! Seu score final é ${currentScore} pontos. Até a próxima!`;
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    QuestionIntentHandler,
    AnswerIntentHandler,
    SkipIntentHandler,
    RepeatIntentHandler,
    RestartGameIntentHandler,
    SkipIntentHandlerWithTimer,
    ScoreIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    NoIntentHandler,
    YesIntentHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();