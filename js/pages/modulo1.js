/* =========================================
   MÓDULO 1 — VALIDAÇÃO DE TESTES DIAGNÓSTICOS
   13 páginas (m1-01 a m1-13). Conteúdo textual íntegro,
   interativos contextualizados, SVGs próprios.
   ========================================= */

/* ─────────────────────────────────────────
   PÁGINA 1 — Por que validar testes diagnósticos?
───────────────────────────────────────── */
GO_RENDER['m1-01'] = function(container, page) {
  const body = `
  ${pageHero({
    module: 'm1', moduleLabel: 'Módulo 1 — Validação de Testes', pageNum: 1,
    title: 'Por que validar um novo teste, se já existe padrão-ouro?',
    lead: 'Antes de qualquer fórmula: a pergunta que dá sentido a tudo que vem depois.',
    grad: 'var(--grad-m1)'
  })}

  ${conceptHero({
    question: 'Pergunta central',
    title: 'Se já temos um exame de referência, por que continuamos criando e testando novos exames?',
    lead: 'Esta pergunta separa o aluno que decora a tabela 2x2 do médico que entende epidemiologia clínica.',
    glow: 'rgba(37,99,235,.22)'
  })}

  ${keyTerms(['padrão-ouro','custo','aceitabilidade','execução','rastreamento','colonoscopia','sangue oculto','saúde pública'])}

  <div class="prose">
    <p>O <span class="keyword">padrão-ouro</span> é o exame que melhor identifica quem realmente tem ou não tem a condição. Em alguns cenários, é uma biópsia; em outros, uma cultura; em outros, um exame de imagem específico. Ele é a <strong>referência</strong> contra a qual comparamos todos os outros testes.</p>

    <p>Mas "melhor" no sentido técnico não significa <strong>"melhor para toda a população"</strong>. Um exame pode ser excelente em capacidade diagnóstica e, ainda assim, ser caro, invasivo, pouco disponível, mal aceito, ou simplesmente impossível de realizar em muitos pacientes.</p>

    <p class="pulled">A validação de testes nasce justamente daí: comparar um novo exame com o padrão-ouro para descobrir se ele consegue cumprir uma função clínica — rastrear, selecionar, excluir, priorizar ou ampliar acesso — sem prejudicar a decisão final.</p>

    <p>Pense no <strong>rastreamento de câncer colorretal</strong>. A colonoscopia é tecnicamente muito superior ao sangue oculto nas fezes: visualiza diretamente a mucosa, permite biópsia e até polipectomia. Mas ela custa centenas de reais por exame, exige preparo intenso, profissional habilitado, estrutura de centro cirúrgico, agenda, e, em muitos casos, sedação. Em um paciente idoso com distúrbio de coagulação, ela é arriscada. Em uma região sem endoscopista, ela é impossível.</p>

    <p>O <strong>sangue oculto nas fezes</strong>, por outro lado, é barato, simples, aceito, e aplicável em escala populacional. Ele não substitui a colonoscopia para confirmação, mas <em>seleciona</em> quem precisa fazer a colonoscopia. Sem ele, o sistema de saúde precisaria oferecer colonoscopia para milhões de pessoas — algo impossível em qualquer lugar do mundo.</p>

    <p>Portanto, validar um teste não é abandonar o padrão-ouro. É perguntar: <em>qual exame funciona melhor para este objetivo, neste paciente, neste sistema de saúde, neste momento da decisão clínica?</em></p>
  </div>

  ${sectionTitle('📊','Comparação visual: padrão-ouro × teste alternativo', 'var(--c-amber)')}
  <div class="dist-wrap">${PrevSVG.padraoOuroVsTeste()}</div>

  ${didaxBlock('caso','🩺','Situação-problema: o gestor de saúde pública',
    `<p>Um gestor municipal precisa organizar o rastreamento de câncer colorretal para 200.000 pessoas. Ele sabe que a colonoscopia é tecnicamente superior — mas só dispõe de 4 colonoscopistas no município e orçamento limitado. Oferecer colonoscopia para todos é matemática impossível: levaria décadas, com filas crescendo mais rápido do que o serviço resolve.</p>
    <p><strong>Pergunta clínica:</strong> qual raciocínio justifica oferecer um teste tecnicamente inferior (sangue oculto) como porta de entrada do rastreamento?</p>
    <p><strong>Resposta:</strong> sangue oculto é barato, aceitável e escalável. Ele identifica os candidatos com maior probabilidade pré-teste de doença, que então recebem a colonoscopia. O sistema fica viável e a sensibilidade global do programa permanece alta.</p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<p>A melhor decisão médica nunca depende apenas do exame mais bonito no livro. Ela depende de <strong>custo, disponibilidade, risco do procedimento, aceitabilidade do paciente e impacto populacional</strong>. Esses são os critérios pelos quais a Medicina Preventiva avalia qualquer teste novo.</p>`)}

  ${bancaCallout(`<p>A banca quer que você perceba que padrão-ouro é apenas uma <strong>referência de comparação</strong>. Novos testes podem ser necessários por custo, aceitabilidade, possibilidade de execução e aplicabilidade populacional. <strong>Validar não é trocar o padrão-ouro — é decidir quando substituí-lo, quando complementá-lo e quando precedê-lo.</strong></p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>A banca pode sugerir que, se já existe padrão-ouro, não há motivo para validar outro teste. <strong>Isso é falso.</strong> Mesmo com padrão-ouro estabelecido, novos testes são validados por questões de custo, acesso, aceitabilidade, invasividade ou aplicabilidade populacional.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>"Teste melhor tecnicamente" <strong>não</strong> é a mesma coisa que "teste mais adequado para rastreamento populacional". Um pode ser perfeito em sensibilidade e ainda assim ser inviável em larga escala.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Achar que validar teste é apenas calcular sensibilidade e especificidade. Isso é <em>parte</em> do processo. A validação também avalia custo, acessibilidade, aceitabilidade, possibilidade de execução, risco e aplicabilidade populacional.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O aluno avançado entende que um teste pode ser <strong>inferior ao padrão-ouro</strong> em desempenho diagnóstico e, ao mesmo tempo, <strong>superior em utilidade pública</strong>. Esse aluno também sabe responder: "para quê?", "para quem?", "em que ponto da cascata diagnóstica?".</p>`)}

  ${didaxBlock('numerico','🔢','Exemplo numérico de referência',
    `<ul class="tight">
      <li>Colonoscopia: custo aproximado de <strong>R$ 600–1.500</strong> por exame; exige sedação em ~30% dos casos.</li>
      <li>Sangue oculto (FIT): custo aproximado de <strong>R$ 5–15</strong> por exame; sem preparo, sem sedação.</li>
      <li>Em um programa para 200 mil pessoas, oferecer colonoscopia direta custaria centenas de milhões. Triagem com sangue oculto torna o programa viável.</li>
    </ul>`)}

  ${revisaoAtiva([
    { q: 'Por que um novo teste pode ser útil mesmo existindo padrão-ouro?', a: 'Por custo, acessibilidade, aceitabilidade, possibilidade de execução, invasividade ou escalabilidade. O novo teste pode ocupar um espaço diferente na cascata diagnóstica (rastreamento, triagem, exclusão preliminar).' },
    { q: 'Cite dois motivos além de custo.', a: 'Aceitabilidade pelo paciente (ex.: preparo extenso, jejum, sedação) e possibilidade de execução em ambientes com baixa estrutura.' },
    { q: 'Em rastreamento populacional, por que aceitabilidade importa?', a: 'Porque um teste tecnicamente excelente que ninguém aceita fazer simplesmente não detecta doença. A taxa de adesão é parte do desempenho real do programa.' }
  ])}

  ${pageFooterMeta({
    resumo: 'Validar testes é estudar quando um exame novo, ainda que inferior ao padrão-ouro, é útil, viável e socialmente aceitável. Custo, aceitabilidade, execução e impacto populacional são critérios tão importantes quanto sensibilidade.',
    proximaConexao: 'Depois de entender por que testes são validados, a próxima página mostra que exame diagnóstico não é decisão isolada: ele se encaixa na Medicina Baseada em Evidências e na decisão compartilhada com o paciente.',
    nextId: 'm1-02'
  })}
  `;
  renderStandard(container, page, body);
};

/* ─────────────────────────────────────────
   PÁGINA 2 — MBE: por que IA não substitui o médico
───────────────────────────────────────── */
GO_RENDER['m1-02'] = function(container, page) {
  const body = `
  ${pageHero({ module:'m1', moduleLabel:'Módulo 1 — Validação de Testes', pageNum: 2, title:'Medicina baseada em evidências: por que IA não substitui o médico', lead:'A tripla aliança que dá sustentação a toda decisão diagnóstica.', grad:'var(--grad-m1)' })}

  ${conceptHero({
    question: 'O que sustenta uma decisão clínica realmente boa?',
    title: 'MBE não é "seguir o livro" — é integrar evidência, experiência e paciente',
    lead: 'Validação de testes só faz sentido dentro de uma estrutura mais ampla: a Medicina Baseada em Evidências (MBE), construída sobre três pilares que se atravessam.',
    glow: 'rgba(139,92,246,.20)'
  })}

  ${keyTerms(['MBE','melhor evidência','experiência clínica','decisão compartilhada','quatro És','IA na medicina','arterite temporal','método clínico centrado na pessoa'], 'violet')}

  <div class="prose">
    <p>Medicina baseada em evidências <strong>não é o mesmo que medicina baseada em estudos</strong>. Ela é a integração ativa de três fontes de informação: a melhor evidência disponível, a experiência clínica do médico e os valores e preferências do paciente. Quando alguém diz "MBE", e pensa apenas em ler artigos, está enxergando um terço do conceito.</p>

    <p>O <strong>primeiro pilar</strong> é a <em>melhor evidência disponível</em>. Significa ensaios clínicos bem feitos, revisões sistemáticas, meta-análises, diretrizes de boa qualidade. Mas evidência sem contexto vira protocolo cego. Diretriz desenhada para 1000 pacientes europeus não se aplica de forma idêntica a um paciente do interior do Brasil sem que você module.</p>

    <p>O <strong>segundo pilar</strong> é a <em>experiência clínica</em>. É aqui que o aluno se confunde. Experiência não é decoreba de tabela. Experiência é a memória sensorial-cognitiva acumulada de já ter visto, examinado, conversado, errado e acertado. É a primeira vez que você palpou uma artéria temporal endurecida em uma paciente idosa com cefaleia nova e PCR alta — e nunca mais esqueceu o quadro de <strong>arterite temporal</strong>. Isso não está no livro com a mesma força com que está na sua memória corporal.</p>

    <p>O <strong>terceiro pilar</strong> é o <em>paciente</em>: seus valores, suas crenças, seu contexto socioeconômico, suas preferências, seu medo, sua espiritualidade. O médico tecnicamente excelente que despreza isso oferece péssima medicina, ainda que assertiva. O médico que entende isso pratica <strong>decisão compartilhada</strong>: explica as opções, expõe trade-offs, e constrói a decisão com o paciente.</p>

    <p class="pulled">É por isso que IA não substitui o médico. Algoritmos podem reproduzir o primeiro pilar com brilho. Podem até auxiliar no segundo. Mas o terceiro — o encontro humano, a leitura emocional, a captação de demandas ocultas, a explicação modulada — exige presença.</p>

    <p>Aquele tio que diz no jantar que "logo IA vai substituir médico" geralmente nunca foi atendido por um. Quem já dependeu de um médico em momento difícil sabe: o exame correto sem o cuidado certo é tratamento incompleto.</p>

    <p>O <strong>método clínico centrado na pessoa</strong> sistematiza essa habilidade. Ele propõe os "quatro És": Explorar a doença e a experiência da doença; Entender a pessoa como um todo; Encontrar um terreno comum para o tratamento; e Estabelecer e fortalecer a relação médico-paciente. Perguntas abertas, escuta ativa, atenção às demandas ocultas (o paciente que vem por "dor de cabeça" mas o que quer mesmo é falar sobre o medo de demência) — isso é tão diagnóstico quanto qualquer exame.</p>

    <p>Ser tecnicamente brilhante e desrespeitoso não é "ser bom médico com mau humor". É <strong>ser mau médico em uma dimensão central</strong> da profissão. A Preventiva insiste nisso porque entende: validar testes, calcular sensibilidade, montar tabelas 2x2, tudo isso é instrumental — instrumento de uma medicina que, no fim, é encontro humano.</p>
  </div>

  ${sectionTitle('🌿','O tripé da MBE', 'var(--c-violet)')}
  <div class="flowchart">${PrevSVG.tripeMBE()}</div>

  ${didaxBlock('caso','🩺','Cena clínica: a primeira arterite temporal',
    `<p>Você está no 4º ano. Atende uma senhora de 72 anos com cefaleia nova, dor ao mastigar, claudicação de mandíbula e VHS muito alta. O atendente sênior palpa a artéria temporal e mostra que ela está endurecida e dolorosa. Você nunca mais esquece. Anos depois, em uma emergência cheia, identifica em segundos o quadro — não por ler de novo, mas porque sua mão lembra. <strong>Isso é o segundo pilar da MBE em ação.</strong></p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<ul class="tight">
      <li>Diretriz sozinha vira protocolo. Experiência sozinha vira ego. Paciente sozinho vira procura por validação.</li>
      <li>Os três pilares juntos viram <strong>medicina decente</strong>.</li>
      <li>A escolha de qual exame pedir é exatamente isso: evidência (qual teste tem boa Sens/Esp), experiência (qual paciente eu tenho na frente) e paciente (o que ele aceita).</li>
    </ul>`)}

  ${bancaCallout(`<p>A banca pode oferecer alternativas como "MBE = sempre seguir a melhor evidência disponível", como se fosse pilar único. <strong>Errado.</strong> MBE é a integração ativa dos três pilares. Banca também adora questões sobre comunicação centrada na pessoa, perguntas abertas e demanda oculta.</p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>"O médico mais experiente que segue a melhor evidência é o melhor médico." Falso enquanto enunciado, porque ignora o terceiro pilar (paciente). Esse é o tipo de armadilha que separa quem decora MBE de quem entende.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>Decisão compartilhada não é "deixar o paciente decidir sozinho". É <strong>construir a decisão junto</strong>, com explicação clara das opções e dos trade-offs. Você continua sendo o médico — agora com uma escuta ativa.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Identificar MBE com "leitura de artigos". MBE é prática integrada de evidência + experiência + paciente.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O aluno avançado conhece os "quatro És" do método clínico centrado na pessoa e sabe que demanda oculta é tão diagnóstica quanto sinal vital. Sabe também que IA tem um papel — mas no nível do auxílio, não da substituição.</p>`)}

  ${revisaoAtiva([
    { q: 'Quais são os três pilares da MBE?', a: 'Melhor evidência disponível, experiência clínica do médico e valores/preferências do paciente.' },
    { q: 'Por que IA não substitui médico?', a: 'Pode reproduzir o primeiro pilar (evidência) e auxiliar no segundo, mas não substitui o encontro humano que sustenta o terceiro (decisão compartilhada).' },
    { q: 'O que é demanda oculta?', a: 'A motivação real do paciente por trás da queixa explicitada. Ex.: vem por dor de cabeça, mas o que pesa é o medo de demência. Captá-la é parte do método clínico centrado na pessoa.' }
  ])}

  ${pageFooterMeta({
    resumo: 'MBE é decisão integrada — evidência + experiência + paciente. Validar testes é o instrumental; o exercício é humano, escuta, decisão compartilhada.',
    proximaConexao: 'Com a MBE definida, partimos para a epidemiologia clínica: a ciência de pedir e interpretar exames em casos reais.',
    nextId: 'm1-03'
  })}
  `;
  renderStandard(container, page, body);
};

/* ─────────────────────────────────────────
   PÁGINA 3 — Epidemiologia clínica
───────────────────────────────────────── */
GO_RENDER['m1-03'] = function(container, page) {
  const body = `
  ${pageHero({ module:'m1', moduleLabel:'Módulo 1 — Validação de Testes', pageNum: 3, title:'Epidemiologia clínica: escolher e interpretar exames', lead:'O exame não é o teste — o exame começa na pergunta clínica.', grad:'var(--grad-m1)' })}

  ${conceptHero({
    question: 'Quando pedir, e como interpretar, um exame?',
    title: 'Pedir exame sem hipótese é gerar dado sem decisão',
    lead: 'Epidemiologia clínica é a aplicação da estatística e do raciocínio populacional na decisão individual. Ela responde quando pedir, qual pedir, como interpretar — e quando não pedir.',
    glow: 'rgba(20,184,166,.20)'
  })}

  ${keyTerms(['hipótese pré-teste','probabilidade pré-teste','sensibilidade','especificidade','VPP','VPN','raciocínio populacional','decisão individual'], 'teal')}

  <div class="prose">
    <p>Há médicos que pedem exames por reflexo — "vou pedir tudo, depois vejo". Esses médicos geram colunas e colunas de números que, sem hipótese clínica organizada, não traduzem decisão. Mais grave: geram <strong>achados incidentais</strong> que viram cascata diagnóstica sem fim.</p>

    <p>Epidemiologia clínica propõe o contrário: <strong>todo exame começa com uma pergunta</strong>. Você tem uma hipótese clínica, com uma probabilidade pré-teste estimada (baixa, intermediária ou alta), e o exame entra como uma ferramenta para confirmar ou refutar essa hipótese.</p>

    <p class="pulled">Quanto você espera de um exame depende de quem é o seu paciente, qual a sua hipótese e o que a literatura diz sobre o desempenho do teste naquele cenário.</p>

    <p>Quando uma <strong>jovem de 20 anos sem fatores de risco</strong> tem dor torácica atípica, sua probabilidade pré-teste de doença coronariana é muito baixa. Pedir uma cintilografia miocárdica nessa situação produz, em sua maioria, falsos positivos — porque o pool de candidatos verdadeiramente doentes é pequeno. Um exame positivo aqui não confirma quase nada.</p>

    <p>Já um <strong>homem de 65 anos, hipertenso, diabético, fumante</strong>, com dor torácica típica, tem probabilidade pré-teste alta. Um exame negativo, mesmo num teste sensível, não exclui completamente — pode ser falso negativo. E um positivo simplesmente confirma o que a clínica já sugeria.</p>

    <p>Esse raciocínio é a base da epidemiologia clínica. Ele exige que você saiba duas coisas sobre o exame que está pedindo: <strong>sensibilidade</strong> (capacidade de detectar doentes) e <strong>especificidade</strong> (capacidade de reconhecer sadios). Sem isso, você está jogando moeda com o resultado.</p>

    <p>Outro princípio: epidemiologia clínica reconhece que <em>a mesma sensibilidade e especificidade</em> produzem resultados diferentes em populações com prevalência diferente. Esse é o coração do Módulo 2. Por enquanto, basta entender: o resultado de um exame nunca é "positivo" ou "negativo" no vácuo. Ele é sempre um <strong>pedaço de informação</strong> que se soma à sua hipótese clínica para gerar uma probabilidade pós-teste.</p>
  </div>

  ${sectionTitle('🧠','Fluxo da decisão diagnóstica', 'var(--c-teal)')}
  <div class="flowchart">${PrevSVG.bayesFluxo()}</div>

  ${didaxBlock('caso','🩺','Cenário comparativo: mesmo exame, contextos opostos',
    `<p><strong>Caso A.</strong> Mulher 22 anos, sem fatores de risco, dor torácica atípica em jovem ansiosa. Probabilidade pré-teste de doença coronariana: ~2%.</p>
    <p><strong>Caso B.</strong> Homem 68 anos, HAS, DM, tabagismo 30 anos/maço, dor opressiva. Probabilidade pré-teste de doença coronariana: ~80%.</p>
    <p>Mesmo cintilografia miocárdica positiva (Sens 85%, Esp 75%): no <strong>caso A</strong>, o VPP é baixo — muitos falsos positivos. No <strong>caso B</strong>, o VPP é alto, mas o resultado quase não acrescenta porque a clínica já era forte. Conclusão: o exame "vale" diferente em cada um.</p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<ul class="tight">
      <li>O exame mais útil é aquele pedido em paciente com probabilidade pré-teste intermediária — onde o resultado realmente muda a decisão.</li>
      <li>Em probabilidade pré-teste muito baixa ou muito alta, o exame frequentemente não muda conduta.</li>
      <li>Pedir exame "para confirmar" o que você já tem certeza é fonte clássica de iatrogenia.</li>
    </ul>`)}

  ${bancaCallout(`<p>A banca testa esse raciocínio pedindo: "qual a melhor conduta?" em paciente com clínica muito forte. A resposta certa muitas vezes não envolve pedir exame, e sim tratar empiricamente ou observar — porque o exame não vai mudar nada.</p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>Pedir muito exame parece "ser cuidadoso". É, na verdade, sinal de raciocínio clínico mal estruturado. Banca explora isso com pacientes assintomáticos onde marcador tumoral elevado vira cascata desnecessária.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>"Probabilidade pré-teste" não é "prevalência". Prevalência é uma medida populacional. Probabilidade pré-teste é a sua estimativa <strong>individual</strong>, modulada por idade, sexo, fatores de risco, clínica e prevalência local.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Pedir bateria de exames antes de organizar hipótese. Resultado: dados incidentais, cascata diagnóstica, ansiedade do paciente, custo desnecessário.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O avançado pergunta, antes de pedir qualquer exame: "se o resultado for positivo, o que eu faço? e se for negativo, o que eu faço?". Se as respostas forem iguais, o exame não deveria ter sido pedido.</p>`)}

  ${revisaoAtiva([
    { q: 'O que é probabilidade pré-teste?', a: 'Sua estimativa individual da probabilidade de doença antes do exame, baseada em idade, sexo, fatores de risco, clínica e prevalência local.' },
    { q: 'Por que pedir exame em paciente com clínica muito forte pode ser inútil?', a: 'Porque a probabilidade pré-teste já é tão alta que o resultado raramente muda a conduta — exceto por confirmação documental.' },
    { q: 'Qual a pergunta-filtro antes de pedir qualquer exame?', a: '"Se for positivo, faço o quê? Se for negativo, faço o quê?". Se as ações forem idênticas, o exame é desnecessário.' }
  ])}

  ${pageFooterMeta({
    resumo: 'Pedir exame é gesto clínico, não reflexo. Cada teste tem desempenho próprio (Sens, Esp) e deve ser solicitado para mudar uma decisão, não para confirmar o óbvio.',
    proximaConexao: 'Para falar de sensibilidade, especificidade e seus derivados, precisamos da ferramenta-mãe: a tabela 2x2. É ela que organiza o raciocínio.',
    nextId: 'm1-04'
  })}
  `;
  renderStandard(container, page, body);
};

/* ─────────────────────────────────────────
   PÁGINA 4 — A tabela 2x2
───────────────────────────────────────── */
GO_RENDER['m1-04'] = function(container, page) {
  const body = `
  ${pageHero({ module:'m1', moduleLabel:'Módulo 1 — Validação de Testes', pageNum: 4, title:'A tabela 2x2: a cruz que organiza o raciocínio', lead:'Sem ela, nada de Sens, Esp, VPP, VPN, acurácia, RV. Com ela, tudo se encaixa.', grad:'var(--grad-m1)' })}

  ${conceptHero({
    question: 'Qual a estrutura mental que sustenta toda a epidemiologia clínica?',
    title: 'A tabela 2x2 cruza o que o teste disse com o que é a verdade (padrão-ouro)',
    lead: 'Quatro caselas. Quatro resultados possíveis. Toda fórmula que você vai usar daqui em diante sai daqui.',
    glow: 'rgba(37,99,235,.22)'
  })}

  ${keyTerms(['tabela 2x2','padrão-ouro','VP','FP','FN','VN','teste positivo','teste negativo','doente','sadio'])}

  <div class="prose">
    <p>Toda análise de teste diagnóstico começa cruzando duas dimensões:</p>
    <ol>
      <li><strong>O que o padrão-ouro diz</strong> — quem realmente é doente, quem realmente é sadio.</li>
      <li><strong>O que o nosso teste diz</strong> — quem testou positivo, quem testou negativo.</li>
    </ol>
    <p>Esse cruzamento gera <strong>quatro caselas</strong> — quatro possibilidades de resultado:</p>
  </div>

  ${sectionTitle('🧩','A estrutura conceitual', 'var(--c-blue)')}
  <div class="dist-wrap">${PrevSVG.tabela2x2Concept()}</div>

  <div class="prose">
    <p>Memorize a posição das caselas — ela vai aparecer em centenas de questões. <strong>Doentes ficam à esquerda</strong> (no padrão-ouro), <strong>sadios à direita</strong>. <strong>Teste positivo em cima</strong>, <strong>teste negativo embaixo</strong>. Os <em>verdadeiros</em> (VP e VN) ficam na diagonal: doente que testou positivo (acerto) e sadio que testou negativo (acerto). Os <em>falsos</em> (FP e FN) ficam na antidiagonal: sadio que testou positivo (FP, erro) e doente que testou negativo (FN, erro).</p>
    <p class="pulled">VP e VN são os <strong>acertos</strong>. FP e FN são os <strong>erros</strong>. Toda métrica de teste diagnóstico vai contar acertos e erros — só muda qual eixo (linha ou coluna) você usa como denominador.</p>
    <p>Agora vem o salto. Você pode treinar isso lendo, mas só vai dominar mexendo. Use a tabela interativa abaixo. <strong>Mude os valores</strong>. Veja em tempo real a sensibilidade, a especificidade, a acurácia, o VPP, o VPN e as razões de verossimilhança se moverem.</p>
  </div>

  ${sectionTitle('⚙','Laboratório interativo — tabela 2x2 mãe', 'var(--c-blue)')}
  ${PrevInt.tabela2x2()}

  ${didaxBlock('caso','🩺','Cenário aplicado',
    `<p>Você está validando um novo teste para detecção de tuberculose pulmonar. Aplica em 1.000 pacientes com hipótese clínica, todos depois confirmados (ou descartados) por baciloscopia + cultura (padrão-ouro). Resultados:</p>
    <ul class="tight"><li><strong>Doentes:</strong> 100 (90 testaram +, 10 testaram −)</li><li><strong>Sadios:</strong> 900 (30 testaram +, 870 testaram −)</li></ul>
    <p>Monte a 2x2 mentalmente. <strong>Sensibilidade = 90/100 = 90%. Especificidade = 870/900 = 96,7%. Acurácia = 960/1000 = 96%.</strong> Já pode brincar com os números no quadro acima.</p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<p>A 2x2 não é só ferramenta de prova. É a estrutura mental que sustenta qualquer análise diagnóstica que você fizer na vida — bancada, ensaio clínico, decisão de diretriz, escolha entre dois exames. Quem desenha a 2x2 sem hesitar tem 70% do raciocínio resolvido.</p>`)}

  ${bancaCallout(`<p>A banca adora dar uma 2x2 com células embaralhadas, ou inverter eixos (teste no padrão-ouro, padrão-ouro no teste), ou pedir métrica calculada a partir de coluna errada. <strong>Verifique sempre quem está no eixo do padrão-ouro</strong> antes de aplicar fórmula.</p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>Trocar o eixo. Se você calcular Sens usando o denominador da linha (positivos totais) em vez da coluna (doentes totais), o resultado é VPP, não Sens. Confusão clássica.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>VP+FN ≠ VP+FP. O primeiro são <strong>todos os doentes</strong> (denominador da Sens). O segundo são <strong>todos os teste-positivos</strong> (denominador do VPP). São conceitos diferentes que ocupam linhas e colunas diferentes.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Decorar fórmulas sem saber de qual casela e de qual eixo elas vêm. Quando a banca embaralha a tabela, você se perde.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O avançado <strong>refaz a 2x2 do zero</strong> em qualquer questão. Em 30 segundos. Não tenta decorar fórmulas, monta a estrutura e calcula. Isso protege contra qualquer pegadinha de eixos invertidos.</p>`)}

  ${revisaoAtiva([
    { q: 'Quem fica na coluna esquerda da tabela 2x2?', a: 'Os doentes verdadeiros, segundo o padrão-ouro.' },
    { q: 'Quem fica na linha superior?', a: 'Os teste-positivos.' },
    { q: 'Onde estão VP e VN?', a: 'Na diagonal principal — são os acertos do teste.' },
    { q: 'Onde estão FP e FN?', a: 'Na antidiagonal — são os erros do teste.' }
  ])}

  ${pageFooterMeta({
    resumo: 'A tabela 2x2 cruza padrão-ouro (colunas) com teste (linhas). VP e VN na diagonal; FP e FN na antidiagonal. Toda fórmula sai dali.',
    proximaConexao: 'Próxima página: aprofundar o significado dos quatro resultados — VP, FP, FN, VN — e seus impactos clínicos.',
    nextId: 'm1-05'
  })}
  `;
  renderStandard(container, page, body);
};

/* ─────────────────────────────────────────
   PÁGINA 5 — Quatro resultados possíveis
───────────────────────────────────────── */
GO_RENDER['m1-05'] = function(container, page) {
  const body = `
  ${pageHero({ module:'m1', moduleLabel:'Módulo 1 — Validação de Testes', pageNum: 5, title:'Quatro resultados possíveis: VP, FP, FN e VN', lead:'Cada um tem peso clínico diferente. Confundir não é detalhe técnico — é erro de conduta.', grad:'var(--grad-m1)' })}

  ${conceptHero({
    question: 'O resultado do teste foi positivo — e agora?',
    title: 'Os quatro destinos possíveis de qualquer paciente que faz um exame diagnóstico',
    lead: 'VP, FP, FN e VN não são apenas siglas. Cada um representa uma decisão clínica diferente, um risco diferente, uma cascata diferente.'
  })}

  ${keyTerms(['VP','FP','FN','VN','iatrogenia','falsa segurança','dano por sobrediagnóstico','rastreamento'])}

  <div class="prose">
    <p>Cada paciente que faz um exame entra, no fim, em uma de quatro caixas. E o impacto clínico de cair em cada uma é diferente — às vezes drasticamente.</p>

    <p><strong>VP (Verdadeiro Positivo):</strong> doente que testou positivo. É o cenário-alvo. O exame fez o que devia. O paciente é encaminhado para tratamento. <em>Acerto.</em></p>

    <p><strong>VN (Verdadeiro Negativo):</strong> sadio que testou negativo. Também acerto. O paciente é tranquilizado e dispensado de cuidado adicional. Boa medicina, sem dano.</p>

    <p><strong>FP (Falso Positivo):</strong> sadio que testou positivo. <em>Erro com cara de acerto.</em> O paciente sadio agora carrega um diagnóstico falso. Vai fazer outros exames, talvez invasivos. Vai ter ansiedade. Talvez vá receber tratamento de uma doença que não tem. Em rastreamento populacional de doença rara, o FP é o erro mais frequente — e tem custo real.</p>

    <p><strong>FN (Falso Negativo):</strong> doente que testou negativo. <em>Erro com cara de tranquilidade.</em> O paciente real e doente é dispensado como se estivesse bem. A doença progride. Quando ele volta com sintomas, o tempo de tratamento ideal já passou. Em câncer ou doenças infecciosas transmissíveis, o FN tem dano clínico e populacional.</p>

    <p class="pulled">VP e VN são acertos. FP é "diagnosticar quem não tem". FN é "deixar de diagnosticar quem tem". Os dois erros têm pesos diferentes em contextos diferentes — e isso vai definir se um teste deve ser mais sensível ou mais específico.</p>

    <p>Quando você é o médico que recebe o resultado do exame, é preciso lembrar: nenhum exame é perfeito. <strong>Cada resultado positivo pode ser FP. Cada resultado negativo pode ser FN.</strong> O que muda essa probabilidade é a combinação do desempenho do teste com a clínica do paciente. Esse é o motivo de existirem dois pares de métricas — Sens/Esp (sobre o teste) e VPP/VPN (sobre o resultado naquele paciente).</p>
  </div>

  ${sectionTitle('🎯','Aterre o conceito: encaixe os quatro destinos', 'var(--c-blue)')}
  ${PrevInt.tabela2x2({ preset: { vp: 90, fp: 30, fn: 10, vn: 870 } })}

  ${didaxBlock('caso','🩺','Cenário-impacto: o que dói em cada erro',
    `<p><strong>FP em rastreamento de câncer de mama:</strong> paciente sadia recebe mamografia "BIRADS 4", é encaminhada para biópsia desnecessária, com hematoma, ansiedade, custo, e às vezes cicatriz. Esse erro tem dano real.</p>
    <p><strong>FN em rastreamento de HIV:</strong> paciente infectado é dispensado como "soronegativo". Continua expondo parceiros. Demora meses para receber TARV. Dano individual e populacional.</p>
    <p><strong>FP em troponina:</strong> paciente sem SCA é internado em CTI por 24h. Custo, exposição, ansiedade, mas geralmente sem dano permanente.</p>
    <p><strong>FN em troponina:</strong> paciente com SCA real recebe alta. Pode morrer. O dano é catastrófico.</p>
    <p>É por isso que troponina é um teste <strong>sensível</strong> — preferimos errar com FP (overinvestigação) a errar com FN (morte). A escolha entre Sens e Esp depende do peso clínico do erro.</p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<ul class="tight"><li>Saber o desempenho do teste te diz a frequência relativa dos quatro destinos.</li><li>Saber o contexto clínico te diz qual erro você pode tolerar.</li><li>Pedir o teste sem saber as duas coisas = jogar moeda.</li></ul>`)}

  ${bancaCallout(`<p>Banca adora questões em que pedem o "pior erro possível" em um contexto e oferecem alternativas misturando FP e FN. Sempre pergunte: <strong>"em qual contexto eu prefiro errar para mais e em qual prefiro errar para menos?"</strong></p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>"Falso negativo é sempre pior que falso positivo." <strong>Falso.</strong> Em rastreamento de doença grave e tratável (HIV, sífilis, câncer detectável), sim. Em rastreamento de achado incidental sem impacto (microcalcificação benigna), o FP pode causar mais dano que o FN.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>FP é "diagnóstico errado de doença". FN é "rotular como sadio quem está doente". Os dois são erros — mas com impactos clínicos opostos.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Esquecer que todo teste positivo na população assintomática de doença rara é, na maioria, FP. Esse é o coração do Módulo 2 — espera-se que você não caia nessa nas próximas páginas.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O avançado <strong>pensa nos quatro destinos antes de pedir o exame</strong>. Pergunta: "se for VP, beneficio? se for FP, prejudico? se for FN, perco doente que poderia tratar? se for VN, tranquilizo verdadeiramente?". É a maturidade que distingue conduta de protocolo.</p>`)}

  ${revisaoAtiva([
    { q: 'O que define um VP?', a: 'Paciente doente (no padrão-ouro) que testou positivo. Acerto.' },
    { q: 'Qual o impacto clínico típico de um FP em rastreamento?', a: 'Sadio recebe diagnóstico falso. Cascata de exames adicionais, ansiedade, custo, eventual procedimento desnecessário.' },
    { q: 'Por que troponina é teste sensível?', a: 'Porque, em SCA, FN tem dano catastrófico (morte). Preferimos FP (CTI desnecessário) a FN (perder infarto).' }
  ])}

  ${pageFooterMeta({
    resumo: 'VP e VN são acertos; FP e FN, erros. O peso clínico de cada erro depende do contexto — define se um teste deve ser sensível ou específico.',
    proximaConexao: 'Com os quatro destinos definidos, partimos para a primeira métrica global do teste: acurácia.',
    nextId: 'm1-06'
  })}
  `;
  renderStandard(container, page, body);
};

/* ─────────────────────────────────────────
   PÁGINA 6 — Acurácia
───────────────────────────────────────── */
GO_RENDER['m1-06'] = function(container, page) {
  const body = `
  ${pageHero({ module:'m1', moduleLabel:'Módulo 1 — Validação de Testes', pageNum: 6, title:'Acurácia: a proporção de acertos do teste', lead:'Simples de calcular. Traiçoeira de interpretar.', grad:'var(--grad-m1)' })}

  ${conceptHero({
    question: 'O que significa um teste com 95% de acurácia?',
    title: 'Acurácia = fração de acertos no total. Mas isso pode esconder catástrofes.',
    lead: 'A métrica mais intuitiva é também a mais perigosa quando aplicada em populações desequilibradas (com prevalência muito alta ou muito baixa).'
  })}

  ${keyTerms(['acurácia','VP+VN','prevalência','desequilíbrio','métrica global'])}

  <div class="prose">
    <p>A <strong>acurácia</strong> é a fração de acertos do teste sobre o total de testados. Em linguagem de tabela 2x2:</p>
  </div>

  ${formulaBox('Acurácia',
    `<strong>Acurácia</strong> = ${frac('VP + VN', 'VP + FP + FN + VN')} = <em>acertos / total</em>`,
    'Vai de 0 (nunca acerta) a 1 (sempre acerta). Costuma ser expressa em %.')}

  <div class="prose">
    <p>Parece a métrica mais óbvia. E é simples mesmo. Mas há uma armadilha. Considere um teste com <strong>acurácia de 99%</strong> para uma doença rara, com prevalência de 1%.</p>

    <p>Imagine 10.000 pessoas. Doença verdadeira: 100 (1%). Sadios: 9.900. Se o teste tem Sens 99% e Esp 99%:</p>
    <ul>
      <li>VP = 99 (entre os 100 doentes)</li>
      <li>FN = 1</li>
      <li>VN = 9.801 (entre os 9.900 sadios)</li>
      <li>FP = 99</li>
      <li><strong>Acurácia = (99+9801)/10000 = 99%</strong> ✓</li>
    </ul>

    <p>Acurácia altíssima. Mas quantos dos <em>positivos</em> são realmente doentes? <strong>99 / (99+99) = 50%</strong>. Metade dos teste-positivos é falso positivo. Acurácia de 99% — e mesmo assim você não pode acreditar em metade dos positivos. Esse é o "<strong>paradoxo da acurácia</strong>".</p>

    <p class="pulled">Acurácia é uma métrica global. Ela camufla desequilíbrios entre as caselas quando a prevalência é extrema. Por isso, em epidemiologia clínica, raramente se usa acurácia isolada. Preferimos o par Sens/Esp, ou, para o paciente individual, VPP/VPN.</p>

    <p>Onde acurácia ainda é útil? Em <strong>comparação direta entre testes</strong> aplicados na mesma população. Se o teste A tem acurácia 92% e o B, 87%, em condições iguais, o A vence em desempenho global. Mas se você quer saber qual exame pedir em paciente específico, acurácia não responde.</p>
  </div>

  ${sectionTitle('⚙','Veja a acurácia se mover', 'var(--c-blue)')}
  ${PrevInt.tabela2x2({ preset: { vp: 99, fp: 99, fn: 1, vn: 9801 }, presets: [
    { name: 'Doença rara (1%)', vp: 99, fp: 99, fn: 1, vn: 9801 },
    { name: 'Doença comum (50%)', vp: 99, fp: 1, fn: 1, vn: 99 },
    { name: 'Equilíbrio (10%)', vp: 99, fp: 9, fn: 1, vn: 891 },
  ]})}

  ${didaxBlock('caso','🩺','Cenário: o "teste perfeito" da prova',
    `<p>A banca apresenta: "novo teste com 99% de acurácia para diagnóstico de feocromocitoma". Você sente que está tudo certo. Erra a questão.</p>
    <p>Por quê? Porque feocromocitoma é raro. Com prevalência de 0,1% e Sens/Esp 99/99, a maioria dos positivos é falso positivo. Acurácia escondeu a tragédia diagnóstica.</p>`)}

  ${didaxBlock('importa','💡','Por que isso importa na prática?',
    `<ul class="tight"><li>Use acurácia para comparar testes na mesma população — ela funciona como métrica de eficiência global.</li><li>Não use para decidir individualmente — use Sens/Esp e VPP/VPN.</li><li>Desconfie de testes apresentados apenas com acurácia em rastreamento de doença rara.</li></ul>`)}

  ${bancaCallout(`<p>Banca testa o "paradoxo da acurácia" com frequência. Esteja atento: questão dá <strong>apenas acurácia alta</strong> e pede para você confiar no teste em doença rara. A resposta correta geralmente envolve dizer que <strong>VPP estaria baixo apesar da acurácia alta</strong>.</p>`)}

  ${didaxBlock('pegadinha','⚠️','Pegadinha de prova',
    `<p>"Teste com acurácia 99% é confiável em qualquer cenário." <strong>Falso.</strong> Em prevalência baixa, mesmo acurácia altíssima pode esconder VPP baixo.</p>`)}

  ${didaxBlock('naoconfunda','🔀','Não confunda',
    `<p>Acurácia ≠ Sensibilidade ≠ VPP. Acurácia conta acertos sobre total. Sens conta acertos entre doentes. VPP conta acertos entre teste-positivos. Três denominadores diferentes.</p>`)}

  ${didaxBlock('errocomum','❌','Erro comum',
    `<p>Reportar acurácia como "qualidade do teste" e parar por aí. É apenas o começo.</p>`)}

  ${didaxBlock('avancado','⚡','O que diferencia o aluno avançado',
    `<p>O avançado <strong>nunca confia em acurácia isolada</strong>. Pede Sens, Esp e contexto de prevalência antes de opinar sobre o teste.</p>`)}

  ${revisaoAtiva([
    { q: 'Qual a fórmula da acurácia?', a: '(VP + VN) / (VP + FP + FN + VN). Soma dos acertos sobre total testados.' },
    { q: 'Por que acurácia pode enganar em doença rara?', a: 'Porque uma quantidade enorme de VN puxa a acurácia para cima, escondendo um número desproporcional de FP em relação aos VP.' },
    { q: 'Em que situação acurácia é útil?', a: 'Em comparação direta entre testes aplicados na mesma população — funciona como métrica de eficiência global.' }
  ])}

  ${pageFooterMeta({
    resumo: 'Acurácia é a fração de acertos sobre o total. Útil para comparar testes na mesma população, perigosa para julgar testes em prevalência baixa.',
    proximaConexao: 'Para entender as duas métricas que realmente sustentam validação, vamos olhar a coluna dos doentes: sensibilidade.',
    nextId: 'm1-07'
  })}
  `;
  renderStandard(container, page, body);
};

/* As próximas páginas (m1-07 a m1-13) seguem em outro bloco para manter o arquivo legível. */

/* Stubs temporários para m1-07 a m1-13 — preenchidos nas próximas iterações */
['m1-07','m1-08','m1-09','m1-10','m1-11','m1-12','m1-13'].forEach(id => {
  if (!GO_RENDER[id]) GO_RENDER[id] = function(c, p) {
    c.innerHTML = pageHero({module:'m1', moduleLabel:'Módulo 1', title: p.label, lead:'Página em construção contínua — em breve preenchida com conteúdo integral.', grad:'var(--grad-m1)'}) +
      '<div style="padding: 40px; text-align:center; color:var(--text-muted)">Conteúdo desta página ainda sendo costurado.</div>' +
      navFooter(p.id);
  };
});
