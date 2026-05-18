# QA Fase 6 — Intensivão Preventiva

> Auditoria automática Playwright das **46 páginas** declaradas em `js/data.js`.
> Geração: 2026-05-18T03:57:38.660Z
> Base URL: `http://localhost:8000`

## Sumário

| Métrica | Valor |
|---|---|
| Páginas auditadas | **46** |
| Páginas OK | **40** |
| Páginas com issues | **6** |
| Tempo médio de load | 298 ms |
| Console errors (soma) | 0 |
| Page errors (soma) | 0 |
| Requests falhados | 0 |
| Interativos (PrevInt) | 48 |
| didaxBlocks | 1101 |
| section-title-pv (Fase 5) | 71 |
| key-terms (Fase 5) | 37 |
| .banca-callout | 39 |
| revisão ativa (didax --resumo + details) | 40 |
| .didax-block.--proxima (conexão) | 41 |
| SVG inline (total) | 29 |
| .frase-autoral (Fase 5) | 4 |
| .svg-illus (Fase 5) | 6 |
| .jornada-bar (Fase 4) | 5 |
| .cross-link (Fase 4) | 12 |
| .ponto-costura (Fase 4) | 5 |

## Achados acionáveis

### Páginas de conteúdo SEM componente interativo PrevInt

O contrato exige "MANDATORY complementary interactives" em todas as páginas de conteúdo. As páginas abaixo passam em tudo (zero erros, didax e revisão presentes), mas **não chamam nenhum `PrevInt.*`**. Todas são páginas de abertura conceitual de módulo ou subtópico, o que pode ser intencional — mas vale checar antes do encerramento da Fase 6.

| Página | Bloco | Posição editorial | Sugestão de interativo |
|---|---|---|---|
| `m1-02` | m1 | abertura M1 (MBE × IA) | flashdeck curto com 4 afirmações "IA × médico" para virar conceito |
| `m1-03` | m1 | epidemiologia clínica — base teórica | casoClinico com 1 cenário "pedir o exame certo?" |
| `m2-01` | m2 | abertura M2 (valores preditivos) | tabela2x2 mostrando VPP/VPN aparecendo na 2ª camada |
| `m3-01` | m3 | abertura M3 (RV → ROC) | rocCurva já presente no m3-02 — adicionar versão simplificada de calibração ou flashdeck |
| `m4-01` | m4 | abertura M4 (tendência central) | calcEstat com dataset clínico introdutório |
| `m4-06` | m4 | abertura conceitual da dispersão | calcEstat lado a lado (Felipe 0,2,8,10 × Rafael 4,5,5,6) para visualizar mesma média / DP diferente |

> **Decisão pendente:** ratificar essas omissões como deliberadas (e documentar em `arquitetura-didatica.md`) **ou** completar com os interativos sugeridos acima.

## Páginas com issues

| ID | Bloco | Issues |
|---|---|---|
| `m1-02` | m1 | NO interativo |
| `m1-03` | m1 | NO interativo |
| `m2-01` | m2 | NO interativo |
| `m3-01` | m3 | NO interativo |
| `m4-01` | m4 | NO interativo |
| `m4-06` | m4 | NO interativo |

## Detalhe por página

| ID | Bloco | Load | Hero | Didax | Sect | Banca | Rev | Inter | SVG | FA | PC | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `home` | home | 1409ms | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `como-estudar` | home | 275ms | 1 | 9 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `m1-01` | m1 | 266ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-02` | m1 | 269ms | 1 | 27 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | ⚠️ |
| `m1-03` | m1 | 276ms | 1 | 27 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | ⚠️ |
| `m1-04` | m1 | 281ms | 1 | 27 | 2 | 1 | 1 | 2 | 0 | 1 | 0 | ✅ |
| `m1-05` | m1 | 273ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-06` | m1 | 285ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-07` | m1 | 271ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-08` | m1 | 272ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-09` | m1 | 266ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-10` | m1 | 267ms | 1 | 30 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-11` | m1 | 268ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-12` | m1 | 277ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-13` | m1 | 271ms | 1 | 30 | 2 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `m2-01` | m2 | 266ms | 1 | 30 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | ⚠️ |
| `m2-02` | m2 | 267ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m2-03` | m2 | 270ms | 1 | 30 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | ✅ |
| `m2-04` | m2 | 263ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m2-05` | m2 | 270ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-06` | m2 | 267ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-07` | m2 | 267ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-08` | m2 | 266ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-09` | m2 | 273ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-10` | m2 | 266ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 1 | ✅ |
| `m3-01` | m3 | 267ms | 1 | 27 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | ⚠️ |
| `m3-02` | m3 | 274ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-03` | m3 | 269ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-04` | m3 | 304ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | ✅ |
| `m3-05` | m3 | 296ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-06` | m3 | 272ms | 1 | 30 | 1 | 1 | 1 | 2 | 1 | 0 | 0 | ✅ |
| `m3-07` | m3 | 263ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `m4-01` | m4 | 293ms | 1 | 21 | 2 | 1 | 1 | 0 | 0 | 0 | 1 | ⚠️ |
| `m4-02` | m4 | 274ms | 1 | 18 | 3 | 1 | 1 | 1 | 1 | 0 | 0 | ✅ |
| `m4-03` | m4 | 266ms | 1 | 21 | 3 | 1 | 1 | 2 | 1 | 0 | 0 | ✅ |
| `m4-04` | m4 | 279ms | 1 | 24 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-05` | m4 | 271ms | 1 | 27 | 4 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m4-06` | m4 | 267ms | 1 | 24 | 2 | 1 | 1 | 0 | 1 | 1 | 0 | ⚠️ |
| `m4-07` | m4 | 269ms | 1 | 27 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-08` | m4 | 317ms | 1 | 24 | 3 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-09` | m4 | 271ms | 1 | 18 | 3 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `mapa-global` | integ | 280ms | 1 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `matriz-comparativa` | integ | 267ms | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `simulador-bayesiano` | integ | 264ms | 1 | 9 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `revisao-final` | integ | 264ms | 1 | 3 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | ✅ |
| `instalar-app` | integ | 266ms | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |

## Identidade Fase 5 — fraseAutoral

| Página | Esperado | Encontrado | Status |
|---|---|---|---|
| `m1-04` | ≥1 | 1 | ✅ |
| `m2-03` | ≥1 | 1 | ✅ |
| `m3-04` | ≥1 | 1 | ✅ |
| `m4-06` | ≥1 | 1 | ✅ |

## Costura Fase 4 — pontoDeCostura

| Página | pontoCosturaCount | jornadaBarCount | crossLinkCount |
|---|---|---|---|
| `m1-13` | 1 | 1 | 1 |
| `m2-10` | 1 | 1 | 1 |
| `m3-07` | 1 | 0 | 2 |
| `m4-09` | 1 | 0 | 3 |

---
_Gerado por `scripts/qa-fase6.js`._