# QA Fase 6 — Intensivão Preventiva

> Auditoria automática Playwright das **46 páginas** declaradas em `js/data.js`.
> Geração: 2026-05-18T04:07:34.857Z
> Base URL: `http://localhost:8000`

## Sumário

| Métrica | Valor |
|---|---|
| Páginas auditadas | **46** |
| Páginas OK | **46** |
| Páginas com issues | **0** |
| Tempo médio de load | 299 ms |
| Console errors (soma) | 0 |
| Page errors (soma) | 0 |
| Requests falhados | 0 |
| Interativos (PrevInt) | 55 |
| didaxBlocks | 1101 |
| section-title-pv (Fase 5) | 77 |
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

## Conformidade didática

✅ **Todas as 39 páginas de conteúdo (m1/m2/m3/m4) possuem ≥1 componente interativo PrevInt**, em conformidade com o requisito contratual "MANDATORY complementary interactives".

Histórico:
- 1ª varredura (Fase 6): 40/46 OK, 6 páginas sem interativo (`m1-02, m1-03, m2-01, m3-01, m4-01, m4-06` — todas páginas de abertura conceitual).
- 2ª varredura (Fase 6.5): 46/46 OK após inserção dos 6 interativos:
  - `m1-02`: `flashdeck` (4 cards "MBE × IA")
  - `m1-03`: `casoClinico` (jovem 22a com dor torácica atípica)
  - `m2-01`: `tabela2x2` (prévia visual de VPP/VPN)
  - `m3-01`: `flashdeck` (5 cards "RV × ROC")
  - `m4-01`: `calcEstat` (glicemia de jejum de 8 pacientes)
  - `m4-06`: `calcEstat` × 2 (Felipe instável × Rafael estável)

## Páginas com issues

Nenhuma página com issues bloqueantes ✅

## Detalhe por página

| ID | Bloco | Load | Hero | Didax | Sect | Banca | Rev | Inter | SVG | FA | PC | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `home` | home | 1563ms | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `como-estudar` | home | 270ms | 1 | 9 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `m1-01` | m1 | 279ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-02` | m1 | 269ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-03` | m1 | 265ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-04` | m1 | 264ms | 1 | 27 | 2 | 1 | 1 | 2 | 0 | 1 | 0 | ✅ |
| `m1-05` | m1 | 269ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-06` | m1 | 266ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-07` | m1 | 286ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-08` | m1 | 276ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-09` | m1 | 270ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m1-10` | m1 | 275ms | 1 | 30 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-11` | m1 | 275ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-12` | m1 | 275ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m1-13` | m1 | 271ms | 1 | 30 | 2 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `m2-01` | m2 | 268ms | 1 | 30 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-02` | m2 | 266ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m2-03` | m2 | 269ms | 1 | 30 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | ✅ |
| `m2-04` | m2 | 273ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m2-05` | m2 | 275ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-06` | m2 | 267ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-07` | m2 | 266ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-08` | m2 | 266ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-09` | m2 | 270ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m2-10` | m2 | 272ms | 1 | 30 | 2 | 1 | 1 | 2 | 0 | 0 | 1 | ✅ |
| `m3-01` | m3 | 268ms | 1 | 27 | 2 | 1 | 1 | 1 | 1 | 0 | 0 | ✅ |
| `m3-02` | m3 | 266ms | 1 | 30 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-03` | m3 | 268ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-04` | m3 | 317ms | 1 | 27 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | ✅ |
| `m3-05` | m3 | 266ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m3-06` | m3 | 266ms | 1 | 30 | 1 | 1 | 1 | 2 | 1 | 0 | 0 | ✅ |
| `m3-07` | m3 | 273ms | 1 | 27 | 2 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `m4-01` | m4 | 269ms | 1 | 21 | 3 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `m4-02` | m4 | 268ms | 1 | 18 | 3 | 1 | 1 | 1 | 1 | 0 | 0 | ✅ |
| `m4-03` | m4 | 264ms | 1 | 21 | 3 | 1 | 1 | 2 | 1 | 0 | 0 | ✅ |
| `m4-04` | m4 | 267ms | 1 | 24 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-05` | m4 | 271ms | 1 | 27 | 4 | 1 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `m4-06` | m4 | 263ms | 1 | 24 | 3 | 1 | 1 | 2 | 1 | 1 | 0 | ✅ |
| `m4-07` | m4 | 268ms | 1 | 27 | 2 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-08` | m4 | 264ms | 1 | 24 | 3 | 1 | 1 | 2 | 0 | 0 | 0 | ✅ |
| `m4-09` | m4 | 276ms | 1 | 18 | 3 | 1 | 1 | 1 | 0 | 0 | 1 | ✅ |
| `mapa-global` | integ | 274ms | 1 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `matriz-comparativa` | integ | 267ms | 1 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |
| `simulador-bayesiano` | integ | 265ms | 1 | 9 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | ✅ |
| `revisao-final` | integ | 276ms | 1 | 3 | 1 | 0 | 0 | 2 | 0 | 0 | 0 | ✅ |
| `instalar-app` | integ | 274ms | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ✅ |

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