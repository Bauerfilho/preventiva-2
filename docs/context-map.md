# Context Map — Intensivão Preventiva

> Mapa de procedência: o que foi importado do contrato-fonte (`PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md`, 9.688 linhas) e como cada bloco virou código.

## 1. Fontes consideradas

| Fonte | Linhas | Papel |
|---|---:|---|
| `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md` | 9.688 | Contrato textual + roteiro didático integral dos 4 módulos. |
| Template `01-Infecto` (clonado em `9cc15be`) | — | Esqueleto de SPA com hash routing, glass morphism, PWA. **Apenas estrutura; conteúdo zerado.** |

Nenhuma outra fonte externa foi consumida durante a produção desta plataforma.

## 2. Restrições contratuais herdadas do PROMPT

Estas restrições nortearam todas as 6 fases de implementação:

- **NO summarization of source material.** Cada conceito do PROMPT foi preservado por inteiro, parafraseado em português editorial, **sem perder profundidade**.
- **MANDATORY complementary interactives.** Toda página de conteúdo de módulo deve ter ≥1 componente interativo (`PrevInt.*`). Validado em Fase 6 + 6.5 (46/46 OK).
- **Unique didactic personality per page.** Cada página tem voz própria: heroes distintos, casos clínicos próprios, didax-blocks com variantes específicas. Verificado pelo total de **77 sectionTitles** + **1.101 didax-blocks** distribuídos heterogeneamente.
- **Build clinical reasoning.** A sequência didática `pageHero → conceptHero → keyTerms → prose → sectionTitle → interativo → didaxBlocks → bancaCallout → revisaoAtiva → pontoDeCostura → pageFooterMeta` foi desenhada para construir raciocínio em camadas.
- **Validation gates.** A Fase 6 estabeleceu QA Playwright automatizado em `scripts/qa-fase6.js` com 13 critérios por página de conteúdo + 5 gates técnicos universais.
- **Formal documentation.** Esta pasta `docs/`.

## 3. Mapeamento PROMPT → código

| Seção do PROMPT | Implementado em | Identificador |
|---|---|---|
| Módulo 1 — Validação de testes diagnósticos (13 páginas) | `js/pages/modulo1.js` | `GO_RENDER['m1-01']` a `GO_RENDER['m1-13']` |
| Módulo 2 — Valores Preditivos (10 páginas) | `js/pages/modulo2.js` | `GO_RENDER['m2-01']` a `GO_RENDER['m2-10']` |
| Módulo 3 — Curva ROC (7 páginas) | `js/pages/modulo3.js` | `GO_RENDER['m3-01']` a `GO_RENDER['m3-07']` |
| Módulo 4 — Tendência Central e Dispersão (9 páginas) | `js/pages/modulo4.js` | `GO_RENDER['m4-01']` a `GO_RENDER['m4-09']` |
| Dashboard + onboarding | `js/pages/_global.js` | `home`, `como-estudar` |
| Integradores (mapa, matriz, simulador, revisão, instalar) | `js/pages/_global.js` | `mapa-global`, `matriz-comparativa`, `simulador-bayesiano`, `revisao-final`, `instalar-app` |

Total: **46 páginas declaradas em `GO_PAGES`** (= 39 de conteúdo + 2 onboarding + 5 integradores).

## 4. O que foi mantido na íntegra

- **Conceitos âncora dos 4 módulos:** Sens, Esp, VP, FP, FN, VN, acurácia, RV+, RV−, paralelo × série, prevalência, VPP, VPN, probabilidade pré/pós-teste, ROC, AUC, ponto de corte, média, mediana, moda, amplitude, variância, desvio padrão. Todos preservados com a profundidade original.
- **Voz fundadora da Preventiva.** A "voz autoral" do prompt foi destilada no helper `fraseAutoral()`, presente em 4 pontos editorialmente fortes (m1-04 — tabela 2x2; m2-03 — porquinha torce o rabo; m3-04 — 5,7 da HbA1c; m4-06 — Felipe × Rafael).
- **Casos clínicos.** Cenas como "primeira arterite temporal", "Rio × Londres", "Felipe (0,2,8,10) × Rafael (4,5,5,6)", "banco de sangue × hepatite C" foram preservadas integralmente.
- **Pegadinhas de banca.** Catalogadas em `bancaCallout` (39 instâncias) + variant `didax-block --pegadinha`.

## 5. O que NÃO foi cortado nem resumido

O PROMPT pede explicitamente **"NO summarization"**. Para auditoria desse requisito:

- Cada página tem prose longa (`<div class="prose">…</div>`) **antes** dos interativos, expondo o conceito por escrito.
- Cada conceito chave aparece em ≥3 camadas: (a) `conceptHero` (pergunta-gatilho), (b) prose, (c) didax-block "importa/pegadinha/avancado".
- Listas de derivações (ex.: RV+ = Sens/(1−Esp)) aparecem tanto em `formulaBox` quanto em `bancaCallout` quanto em `revisaoAtiva` — para fixação ativa.

## 6. O que é original (não estava no PROMPT, mas foi acrescentado)

| Adição | Justificativa |
|---|---|
| Helpers `crossLink`, `jornadaBar`, `pontoDeCostura` (Fase 4) | O PROMPT pedia "build clinical reasoning". Esses 3 helpers entregam **costura editorial entre módulos**, conectando o que se aprendeu em M1 ao que se está vendo em M2, e assim por diante. |
| Helper `fraseAutoral` (Fase 5) | Materializa a voz fundadora como bloco visualmente reconhecível, com `::before` "❝" decorativo. |
| Helper `svgIllus` + 13 funções `PrevSVG.*` (Fases 2–5) | SVGs didáticos vetoriais para conceitos que ganham com visualização (tripé MBE, paralelo × série, ROC, dispersão etc.). |
| Componente `PrevInt.casoClinico` (Fase 6.5) | Para fechar a obrigatoriedade de interativo em páginas de abertura conceitual. |
| QA Playwright `scripts/qa-fase6.js` (Fase 6) | Validação automática de regras técnicas + didáticas. |

## 7. O que ficou fora desta entrega

Nada do conteúdo do PROMPT foi descartado. Não há "lacuna de conteúdo".

A única lacuna que persiste é **fora do contrato textual**: o template original do PROMPT mencionava em apêndice uma possível futura **integração com banco de questões reais (ENARE, USP-RP, Revalida)** — isso depende de licenciamento e ficou explicitamente fora do escopo desta entrega. As "Questões guiadas" e o `quizBanca` usam material didático autoral, alinhado ao estilo das bancas, sem cópia literal de provas oficiais.

## 8. Versão e fechamento

- **Branch de trabalho:** `genspark_ai_developer`
- **Última fase concluída:** Fase 7 (esta documentação)
- **Cadeia de commits:**
  - `9cc15be` chore — template clonado
  - `9d2130a` esqueleto v1
  - `3505ab1` M1 — 13 páginas
  - `8649244` M2 — 10 páginas
  - `d2d311d` M3 — 7 páginas
  - `190215b` M4 — 9 páginas
  - `4bf6664` Fase 4 — costura editorial
  - `0f8294c` Fase 5 — unificação visual + identidade
  - `bc0a08a` Fase 6 — QA Playwright das 46 páginas
  - `6b8cbc7` Fase 6.5 — 6 interativos faltantes
  - (Fase 7 será commit final)
