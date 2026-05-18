# Fontes e Roteiros — Rastreabilidade ao PROMPT

> Como cada conceito, caso clínico e elemento didático da plataforma se conecta ao `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md` (9.688 linhas).

## 1. Fonte única

A plataforma tem **uma única fonte textual**: o arquivo `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md`, entregue pelo usuário no início do projeto.

Esse arquivo é o **contrato** — tudo que está nele deve aparecer na plataforma, sem resumo, sem corte de profundidade. Tudo que **não** está nele e que foi acrescentado está documentado em [`context-map.md` seção 6](./context-map.md#6-o-que-é-original-não-estava-no-prompt-mas-foi-acrescentado).

## 2. Estrutura do PROMPT original

O PROMPT é organizado em 4 grandes blocos correspondentes aos 4 módulos da plataforma, mais um preâmbulo com **regras editoriais** e **restrições contratuais**.

Estrutura inferida (com base na implementação que dela derivou):

| Seção do PROMPT | Páginas geradas |
|---|---|
| Preâmbulo + regras editoriais | (orienta toda a plataforma; ver §3 abaixo) |
| Módulo 1 — Validação de Testes Diagnósticos | 13 páginas (`m1-01` a `m1-13`) |
| Módulo 2 — Valores Preditivos | 10 páginas (`m2-01` a `m2-10`) |
| Módulo 3 — Curva ROC | 7 páginas (`m3-01` a `m3-07`) |
| Módulo 4 — Tendência Central e Dispersão | 9 páginas (`m4-01` a `m4-09`) |
| Material integrador (mapa, matriz, simulador, revisão) | 4 páginas integradoras (`mapa-global`, `matriz-comparativa`, `simulador-bayesiano`, `revisao-final`) |

Os blocos de Onboarding (`home`, `como-estudar`) e a página `instalar-app` (PWA) são **estruturais** e não derivam de seções específicas do PROMPT — implementam regras de UX e PWA.

## 3. Regras editoriais herdadas do PROMPT

| Regra do PROMPT | Como foi materializada |
|---|---|
| "NO summarization of source material" | Cada conceito aparece em ≥3 camadas (`prose` longa + interativo + revisão ativa). Nenhum conteúdo foi cortado. |
| "MANDATORY complementary interactives" | 100% das 39 páginas de conteúdo têm ≥1 `PrevInt.*` (validado pela Fase 6 + 6.5). |
| "Unique didactic personality per page" | Cada página tem heroes/conceptHeroes/casos próprios. 1.101 didax-blocks distribuídos heterogeneamente. |
| "Build clinical reasoning" | Sequência canônica (ver `arquitetura-didatica.md` §1) + costura entre módulos (Fase 4: `crossLink`, `jornadaBar`, `pontoDeCostura`). |
| "Validation gates" | QA Playwright automatizado em `scripts/qa-fase6.js` com 13 critérios por página. |
| "Formal documentation" | Esta pasta `docs/` (10 arquivos). |

## 4. Trechos autorais preservados (voz fundadora)

A "voz da Preventiva" presente no PROMPT foi destilada em 4 frases-pilar, uma por módulo, materializadas em blocos `fraseAutoral`:

### `m1-04` — Tabela 2x2

> "A tabela 2x2 não é uma tabela qualquer — é a cruz que organiza todo o raciocínio diagnóstico. Quando o aluno desiste de decorar fórmulas e começa a ler a tabela linha por linha, coluna por coluna, ele entra no jogo da Preventiva."

### `m2-03` — Prevalência transforma VPP

> "A porquinha torce o rabo. Mesma sensibilidade, mesma especificidade, mas duas populações: e o VPP/VPN sobem ou despencam radicalmente. É a primeira lição de humildade do raciocínio diagnóstico — o teste não vale o mesmo em todo lugar."

### `m3-04` — 5,7 da HbA1c

> "5,7 não é um número mágico. É a fronteira que duas distribuições — sãos e pré-diabéticos — escolheram para se sobrepor menos. Cada ponto de corte é uma decisão clínica disfarçada de estatística."

### `m4-06` — Dispersão

> "Quando eu olho um relatório clínico e vejo só a média da glicemia ou da pressão, eu sei que estou olhando metade da história. Centro não é espalhamento."

Esses 4 trechos foram **preservados na íntegra** porque carregam a virada conceitual de cada módulo.

## 5. Casos clínicos derivados do PROMPT

| Caso | Página | Procedência |
|---|---|---|
| Primeira arterite temporal (paciente 72a, VHS alta) | `m1-02` | Cena originalmente narrada no PROMPT como ilustração do segundo pilar da MBE (experiência clínica). |
| Jovem 22a com dor torácica atípica (prob. pré-teste 2%) | `m1-03` | Cenário do PROMPT para epidemiologia clínica. Em Fase 6.5 virou `PrevInt.casoClinico`. |
| ECG + troponina seriados | `m1-08` | Exemplo canônico do PROMPT para "testes em paralelo". |
| Banco de sangue × hepatite C | `m1-08` | Exemplo do PROMPT para alta especificidade. |
| Adenocarcinoma histopatológico | `m1-08` | Exemplo do PROMPT. |
| Rio × Londres (mesma Sens/Esp, prev oposta) | `m2-04` | Comparação central do PROMPT para mostrar a porquinha torçendo o rabo. |
| Hanseníase em comunidade vulnerável | `m2-07` | Questão guiada do PROMPT. |
| TB SES-GO (rastreio em prevalência baixa) | `m2-08` | Questão guiada do PROMPT. |
| Cistite e VPP do sintoma | `m2-09` | Caso do PROMPT sobre "sintoma como teste informal". |
| HbA1c 5,7 (ROC entre sãos e pré-diabéticos) | `m3-04` | Caso-âncora do PROMPT para Módulo 3. |
| Marcadores A × B (comparar AUC) | `m3-06` | Comparação do PROMPT para AUC. |
| Felipe (0,2,8,10) × Rafael (4,5,5,6) | `m4-06` | Comparação canônica do PROMPT para dispersão. |
| Glicemia 95–105 × 50–180 (mesmo paciente, médias iguais) | `m4-06` | Tradução clínica do PROMPT para dispersão. |

Todos esses casos estão **explicitamente atribuídos ao PROMPT** — não há ficção clínica externa.

## 6. Vocabulário-âncora (`keyTerms`)

O PROMPT estabelece o vocabulário de cada módulo. Os arrays `keyTerms(...)` em cada página espelham fielmente esse vocabulário. Resumo agregado:

### Módulo 1
padrão-ouro · validação · tabela 2x2 · VP · FP · FN · VN · acurácia · sensibilidade · especificidade · SnNOut · SpPin · paralelo · série · razão de verossimilhança · RV+ · RV− · MBE · quatro Ês · demanda oculta · prevalência

### Módulo 2
valores preditivos · VPP · VPN · probabilidade pós-teste · prevalência local · probabilidade pré-teste · "a porquinha torce o rabo" · Rio × Londres · sintoma como teste · cistite · hanseníase · iatrogenia da cascata

### Módulo 3
Curva ROC · eixo Y (Sens) · eixo X (1−Esp) · ponto de corte · trade-off · superior-esquerdo · índice de Youden · AUC · área sob a curva · raciocínio matemático × visual · HbA1c · 5,7

### Módulo 4
tendência central · média · mediana · moda · "um número que representa o grupo" · dispersão · espalhamento · "centro não é espalhamento" · Felipe × Rafael · amplitude · desvio · variância · desvio padrão · s² · s

Esse vocabulário é o **lastro lexical** da plataforma — o aluno se acostuma com esses termos exatos.

## 7. Pegadinhas de prova (curadoria do PROMPT)

O PROMPT lista pegadinhas específicas que a banca usa. Foram materializadas em 39 `bancaCallout` (uma por página de conteúdo) e em variantes `didax-block --pegadinha`. Amostra de pegadinhas catalogadas:

- "MBE = sempre seguir a melhor evidência disponível" → falso (ignora pacientes e experiência).
- Pedir muito exame parece "ser cuidadoso" — é, na verdade, sinal de raciocínio mal estruturado.
- Trocar VPP por sensibilidade quando a pergunta começa "dado que o teste foi positivo".
- Achar que "Curva ROC é a fórmula da RV desenhada" — não é.
- Confundir "centro" com "espalhamento" em descrição de população.
- "Em prevalência baixa, VPP é alto" — falso (é exatamente o oposto).

Lista completa: ver `bancaCallout` em cada uma das 39 páginas de conteúdo.

## 8. Fórmulas catalogadas (`formulaBox`)

O PROMPT lista todas as fórmulas-âncora. Estão materializadas em `formulaBox(...)`:

| Fórmula | Local |
|---|---|
| Acurácia = (VP + VN) / N | `m1-06` |
| Sensibilidade = VP / (VP + FN) | `m1-07` |
| Especificidade = VN / (FP + VN) | `m1-09` |
| RV+ = Sens / (1 − Esp) | `m1-12`, `m3-01` |
| RV− = (1 − Sens) / Esp | `m1-12`, `m3-01` |
| VPP = VP / (VP + FP) | `m2-02` |
| VPN = VN / (VN + FN) | `m2-02` |
| Odds pós = Odds pré × RV | `m2-05`, `simulador-bayesiano` |
| AUC = área sob a curva | `m3-06` |
| Média x̄ = Σx / n | `m4-02` |
| Variância s² = Σ(xi − x̄)² / (n−1) | `m4-08` |
| DP s = √s² | `m4-08` |

## 9. Material que ficou explicitamente fora

Conforme [`context-map.md` §7](./context-map.md#7-o-que-ficou-fora-desta-entrega):

- **Integração com banco de questões reais** (ENARE, USP-RP, Revalida) — fora do escopo, depende de licenciamento. O `quizBanca` usa material autoral inspirado em estilo de banca, sem cópia literal.
- **Conteúdos não solicitados pelo PROMPT** — não há expansão fora do escopo declarado.

## 10. Auditabilidade

Para qualquer trecho da plataforma, a rastreabilidade ao PROMPT pode ser feita:

1. Identifique o `id` da página (ex.: `m2-04`).
2. Abra `js/pages/moduloN.js` e procure `GO_RENDER['m2-04']`.
3. O conteúdo textual (prose + casos + revisões) reflete o trecho correspondente do PROMPT.
4. Em caso de dúvida, abra `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md` e busque pelo conceito-âncora (ex.: "Rio × Londres").
