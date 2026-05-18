# Matriz de Conteúdo — Intensivão Preventiva

> 46 páginas declaradas em `js/data.js` × conceitos-âncora × componentes-chave.

## Visão geral

| Bloco | Páginas | Tópico-mãe |
|---|---:|---|
| Onboarding | 2 | Dashboard + "Como estudar" |
| Módulo 1 (m1) | 13 | Validação de Testes Diagnósticos |
| Módulo 2 (m2) | 10 | Valores Preditivos (probabilidade pós-teste) |
| Módulo 3 (m3) | 7 | Curva ROC |
| Módulo 4 (m4) | 9 | Tendência Central e Dispersão |
| Integradores | 5 | Mapa Mental + Matriz comparativa + Simulador Bayesiano + Revisão Final + Instalar app |
| **Total** | **46** | |

---

## Onboarding (2)

| ID | Label | Componentes-chave |
|---|---|---|
| `home` | Dashboard — Mapa da Preventiva | hero · cards dos 4 módulos · CTA "Começar" |
| `como-estudar` | Como estudar nesta plataforma | hero · 9 didax-blocks · guia de uso |

---

## Módulo 1 — Validação de Testes Diagnósticos (13)

Cor: **azul** (`--c-blue`). Gradient `--grad-m1`. Bloco semântico: `m1`.

| ID | Label | Conceitos-âncora | Interativo PrevInt |
|---|---|---|---|
| `m1-01` | Por que validar testes diagnósticos? | padrão-ouro, validação, papel da estatística | tabela2x2 |
| `m1-02` | MBE — IA não substitui o médico | tripé MBE: evidência + experiência + paciente; quatro Ês; demanda oculta | flashdeck (4 cards) |
| `m1-03` | Epidemiologia clínica | hipótese pré-teste, probabilidade pré-teste, decisão individual | casoClinico (jovem 22a) |
| `m1-04` | A tabela 2x2 | a cruz que organiza tudo: VP/FP/FN/VN | tabela2x2 (+ fraseAutoral) |
| `m1-05` | Quatro resultados (VP/FP/FN/VN) | VP, FP, FN, VN — leitura horizontal × vertical | tabela2x2 |
| `m1-06` | Acurácia | (VP+VN)/N; quando engana; trade-off | tabela2x2 |
| `m1-07` | Sensibilidade | VP/(VP+FN); detectar doentes; SnNOut | tabela2x2 × 2 |
| `m1-08` | Testes em paralelo | priorizar exclusão; ECG + troponina seriados | tabela2x2 × 2 |
| `m1-09` | Especificidade | VN/(FP+VN); reconhecer sadios; SpPin | tabela2x2 × 2 |
| `m1-10` | Testes em série | priorizar confirmação; rastreio HIV → Western blot | tabela2x2 |
| `m1-11` | Sens, Esp × prevalência | o que muda e o que não muda | simPrevalencia |
| `m1-12` | Razões de verossimilhança | RV+ = Sens/(1−Esp); RV− = (1−Sens)/Esp | tabela2x2 (RV-calc) |
| `m1-13` | Fechamento M1 | quiz integrado | quizBanca + pontoDeCostura |

**Costura editorial:** crossLink interno em m1-13 → matriz-comparativa, simulador-bayesiano.

---

## Módulo 2 — Valores Preditivos (10)

Cor: **teal** (`--c-teal`). Gradient `--grad-m2`. Bloco semântico: `m2`.

| ID | Label | Conceitos-âncora | Interativo PrevInt |
|---|---|---|---|
| `m2-01` | Valores preditivos — segundo tempo | VPP, VPN; prob. pós-teste; pergunta humana antes da fórmula | tabela2x2 (prévia visual) |
| `m2-02` | Da tabela à fórmula | VPP = VP/(VP+FP); VPN = VN/(VN+FN) — sem decoreba | tabela2x2 × 2 |
| `m2-03` | A porquinha torce o rabo | prevalência transforma VPP/VPN; svgIllus(vppFunil); fraseAutoral | simPrevalencia |
| `m2-04` | Rio × Londres | mesma Sens/Esp, prev oposta → VPP/VPN opostos | tabela2x2 × 2 |
| `m2-05` | Prevalência vira pré-teste | prevalência local = probabilidade pré-teste; modulação clínica | bayes |
| `m2-06` | Baixa probabilidade pré-teste | boa prática: não pedir; iatrogenia da cascata | bayes |
| `m2-07` | Questão guiada 1 — hanseníase | tabela 2x2 com prevalência baixa em comunidade vulnerável | tabela2x2 |
| `m2-08` | Questões guiadas 2 e 3 | TB SES-GO: alta sens + baixa prev = muitos FP | tabela2x2 |
| `m2-09` | Sintomas como teste — cistite | sintoma = teste informal; VPP do sintoma | tabela2x2 |
| `m2-10` | Fechamento M2 | quiz integrado + ponte para M3 (ROC) | quizBanca + bayes + tabela2x2 |

**Costura editorial:** jornadaBar em m2-01 (de m1 → m2 → m3); crossLink para m1-12; pontoDeCostura em m2-10.

---

## Módulo 3 — Curva ROC (7)

Cor: **laranja** (`--c-orange`). Gradient `--grad-m3`. Bloco semântico: `m3`.

| ID | Label | Conceitos-âncora | Interativo PrevInt |
|---|---|---|---|
| `m3-01` | Da RV à Curva ROC | matemático × visual; eixo Y = Sens; eixo X = 1−Esp; svgIllus(rocDidatica) | flashdeck (5 cards) |
| `m3-02` | Lendo os eixos da ROC | trade-off Sens × Esp ao deslizar o corte | rocCurva |
| `m3-03` | O melhor ponto | superior-esquerdo; índice de Youden implícito | rocCurva |
| `m3-04` | De onde vem o 5,7 da HbA1c | duas distribuições (sãos × doentes); fraseAutoral | rocCurva |
| `m3-05` | Mexendo no ponto de corte | mais sens × mais esp — escolha clínica | rocCurva |
| `m3-06` | AUC | comparar testes pela área; svgIllus(distribuicoesROC) | rocCurva × 2 |
| `m3-07` | Como a banca cobra ROC | quiz integrado + 4 reflexos automáticos | quizBanca + pontoDeCostura |

**Costura editorial:** jornadaBar em m3-01 (de m2 → m3 → m4); crossLink para m1-12 + m2-10; pontoDeCostura em m3-07.

---

## Módulo 4 — Tendência Central e Dispersão (9)

Cor: **violeta** (`--c-violet`). Gradient `--grad-m4`. Bloco semântico: `m4`.

| ID | Label | Conceitos-âncora | Interativo PrevInt |
|---|---|---|---|
| `m4-01` | Por que TC cai em Medicina? | resumir grupos em um número; analogia IBGE/Seleção/turma; pontoDeCostura M3→M4 | calcEstat |
| `m4-02` | Média | x̄ = Σx/n; svgIllus(histogramaTendencia); muitos números em panorama | calcEstat |
| `m4-03` | Mediana | resiste a extremos; svgIllus(assimetrias); salário CEO | calcEstat × 2 |
| `m4-04` | Moda | valor que mais aparece; multimodal | calcEstat × 2 |
| `m4-05` | Mediana em prova | ordenar primeiro; n par × n ímpar | calcEstat |
| `m4-06` | Dispersão | centro não é espalhamento; Felipe × Rafael; svgIllus(dispersaoDP); fraseAutoral | calcEstat × 2 |
| `m4-07` | Amplitude e desvio | max − min; desvio = xi − x̄ | calcEstat × 2 |
| `m4-08` | Variância e desvio padrão | s² = Σ(xi−x̄)²/(n−1); s = √s² | calcEstat × 2 |
| `m4-09` | Banca cobra: centro × dispersão | quiz integrado + fechamento global | quizBanca + pontoDeCostura |

**Costura editorial:** jornadaBar em m4-01 (de m3 → m4); pontoDeCostura em m4-01 e m4-09.

---

## Integradores (5)

| ID | Label | Função |
|---|---|---|
| `mapa-global` | Mapa Mental Integrado | SVG `heroMapa` + visão dos 4 módulos |
| `matriz-comparativa` | Matriz comparativa dos 4 módulos | tabela cruzada das medidas (Sens, Esp, VPP, VPN, RV, ROC, média, mediana, moda, DP) |
| `simulador-bayesiano` | Simulador Bayesiano (pré → pós) | `PrevInt.bayes` integral |
| `revisao-final` | Revisão Final Global | quizBanca com 10 questões mistas |
| `instalar-app` | Como instalar o app (PWA) | guia iOS/Android/Desktop |

---

## Mapa de identidade Fase 5 (`fraseAutoral`)

| Página | Conceito-pilar |
|---|---|
| `m1-04` | "A tabela 2x2 é a cruz que organiza o raciocínio" |
| `m2-03` | "A porquinha torce o rabo: prevalência muda tudo" |
| `m3-04` | "5,7 não é mágico; é a fronteira entre duas distribuições" |
| `m4-06` | "Centro não é espalhamento: a média sozinha mente" |

Esses 4 pontos foram escolhidos por carregarem a **virada conceitual de cada módulo**.

---

## Mapa de SVGs (`svgIllus` + `PrevSVG.*`)

| Página | SVG | Conceito |
|---|---|---|
| Dashboard | `heroMapa` | Visão dos 4 módulos em árvore |
| `m1-02` | `tripeMBE` | Os 3 pilares da MBE |
| `m1-03` | `bayesFluxo` | Fluxo da decisão diagnóstica |
| `m1-04` | `padraoOuroVsTeste` | Comparação teste × padrão-ouro |
| `m1-07/09` | `snnoutSpinDual` | SnNOut × SpPin |
| `m1-08/10` | `paraleloSerie` | Paralelo × série |
| `m2-03` | `vppFunil` | Funil VPP × prevalência |
| `m3-01` | `rocDidatica` | Curva ROC didática |
| `m3-06` | `distribuicoesROC` | Sãos × doentes sobre ROC |
| `m4-02` | `histogramaTendencia` | Média/mediana/moda sobre histograma |
| `m4-03` | `assimetrias` | Distribuições simétrica/assimétrica |
| `m4-06` | `dispersaoDP` | 3 amostras, mesma média, dispersão crescente |

13 funções `PrevSVG.*` cobrem 12 inserções via `svgIllus` + 1 hero no dashboard.
