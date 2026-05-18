# Intensivão Preventiva

**Epidemiologia Clínica & Bioestatística — preparatório premium para residência médica.**

Plataforma educacional interativa em SPA (HTML + CSS + Vanilla JS) com PWA offline, organizada em **4 módulos** e **46 páginas**, construída a partir do contrato canônico `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md`.

> *"Tempo, prevalência e raciocínio mudam o diagnóstico."*

---

## Visão geral

| Módulo                                                 | Cor      | Páginas |
|--------------------------------------------------------|----------|---------|
| **M1** — Epidemiologia Clínica & Medicina Baseada em Evidências | azul     | 13 |
| **M2** — Sensibilidade, Especificidade, VPP/VPN, Prevalência   | teal     | 10 |
| **M3** — Razões de Verossimilhança, Curva ROC, AUC             | laranja  | 7  |
| **M4** — Tendência Central e Dispersão                          | violeta  | 9  |
| Integradores + Home                                            | gradiente| 7  |

Total: **46 páginas**, **55 componentes interativos**, **13 SVGs didáticos próprios**, **1.101 didax-blocks**.

---

## Princípios da plataforma

1. **Não resumir o material-fonte.** O conteúdo é expandido em blocos didáticos variados (caso, importa, pegadinha, naoconfunda, errocomum, avancado, paralelo, serie, resumo, etc.).
2. **Construir raciocínio, não memorização.** Cada conceito vem com casos clínicos, simuladores, gráficos manipuláveis e revisão ativa.
3. **Identidade didática única por página.** 16 estações canônicas, com personalidade por módulo (paleta + frase autoral nas 4 páginas-pilar).
4. **Costura editorial.** Nenhum módulo é silo: `jornadaBar`, `crossLink` e `pontoDeCostura` amarram o todo.
5. **Validação automatizada.** QA Playwright nas 46 rotas valida 5 gates técnicos + 8 gates didáticos.

---

## Stack

- HTML5 + CSS3 (tokens, gradientes, dark mode via `[data-theme="dark"]`).
- **Vanilla JS** (zero dependências em runtime).
- **Hash routing** próprio (formato `#m4-06`, sem leading slash).
- **PWA**: `sw.js` + `manifest.webmanifest` + `offline.html`.
- Fontes: **Inter** (UI) + **JetBrains Mono** (numérico).
- **Playwright** v1.60 — só em `devDependencies` para QA local.

---

## Estrutura de pastas

```
/home/user/webapp
├── index.html                    # shell SPA
├── offline.html                  # fallback PWA
├── manifest.webmanifest
├── sw.js                         # CACHE_NAME = preventiva-pwa-v20260518-1
├── package.json                  # scripts: serve / qa
├── css/                          # 8 arquivos, ~7.494 linhas
│   ├── preventiva.css            # tokens + classes base
│   ├── preventiva-interactive.css
│   ├── preventiva-fase4.css      # costura editorial
│   ├── preventiva-fase5.css      # identidade visual
│   └── ...
├── js/
│   ├── app.js                    # bootstrap + tema + sw registration
│   ├── router.js                 # hash router
│   ├── data.js                   # GO_PAGES (46 entradas)
│   ├── components/
│   │   ├── interactive.js        # PrevInt.* (8 componentes)
│   │   └── svg-library.js        # PrevSVG.* (13 funções)
│   └── pages/
│       ├── _helpers.js           # 18 helpers (pageHero, sectionTitle, didaxBlock, ...)
│       ├── home.js
│       ├── modulo1.js            # m1-01..m1-13
│       ├── modulo2.js            # m2-01..m2-10
│       ├── modulo3.js            # m3-01..m3-07
│       ├── modulo4.js            # m4-01..m4-09
│       └── integradores.js       # integ-*
├── scripts/
│   └── qa-fase6.js               # runner Playwright das 46 rotas
└── docs/
    ├── context-map.md            # PROMPT → código
    ├── arquitetura-didatica.md   # 16 estações canônicas
    ├── matriz-conteudo.md        # 46 páginas × conceitos × interativos
    ├── matriz-visual.md          # tokens, paletas, SVGs
    ├── componentes-interativos.md# API PrevInt.*
    ├── fontes-e-roteiros.md      # rastreabilidade autoral
    ├── qa-checklist.md           # como rodar QA + checklist manual
    ├── qa-fase6.md / .json       # último relatório QA
    └── relatorio-final.md        # síntese executiva das 7 fases
```

---

## Como rodar

### Requisitos

- Python 3 (para servidor estático), **ou** qualquer servidor HTTP.
- Node 18+ (somente para rodar o QA — não é necessário para servir).

### Servir localmente

```bash
npm run serve
# equivalente a: python3 -m http.server 8000
# Acesse: http://localhost:8000
```

### Rodar o QA das 46 páginas

```bash
npm install                       # instala playwright (devDependency)
npx playwright install chromium   # uma vez, baixa o browser
npm run qa                        # gera docs/qa-fase6.{md,json}
```

Resultado esperado: **`Resultado: 46/46 OK`** ao final de `docs/qa-fase6.md`.

---

## Arquitetura de uma página

Toda página segue a **sequência canônica de 16 estações** (detalhada em `docs/arquitetura-didatica.md`):

1. `pageHero` — hero com gradiente do módulo.
2. `jornadaBar` — onde estou na trilha do módulo.
3. `conceptHero` — pergunta-chave da página.
4. `keyTerms` — vocabulário-âncora.
5. `prose` — texto autoral.
6. `sectionTitle` — divisor visual com slug do módulo.
7. `svgIllus` — ilustração `PrevSVG.*`.
8. `interativo` — pelo menos um `PrevInt.*`.
9. `didaxBlocks` — bloco caso, importa, pegadinha, naoconfunda, errocomum, avancado, paralelo, serie, prevalencia, ...
10. `bancaCallout` — boxe de pegadinha de prova.
11. `revisaoAtiva` — `<ol><details>` com perguntas reveláveis.
12. `fraseAutoral` *(somente nas 4 páginas-pilar)*.
13. `pontoDeCostura` — amarra com o conceito anterior/próximo.
14. `crossLink` — atalho cross-módulo.
15. `pageFooterMeta` — resumo + próxima.
16. `navFooter` — botões anterior/próximo.

---

## Componentes interativos (`PrevInt.*`)

| Componente       | Função                                                            |
|------------------|-------------------------------------------------------------------|
| `tabela2x2`      | Tabela 2×2 com VPP/VPN/Sens/Esp calculados em tempo real.         |
| `simPrevalencia` | Simulador de impacto da prevalência sobre VPP/VPN.                |
| `bayes`          | Fluxo bayesiano: pré-teste × RV → pós-teste.                      |
| `calcEstat`      | Média, mediana, moda, DP, variância a partir de `values: number[]`.|
| `rocCurva`       | Curva ROC didática com duas distribuições normais e ponto de corte.|
| `flashdeck`      | Cartões viráveis pergunta/resposta.                               |
| `quizBanca`      | Questão de banca com 5 alternativas + explicação.                 |
| `casoClinico`    | Caso clínico narrativo com pergunta + alternativas + dica.        |

API completa em `docs/componentes-interativos.md`.

---

## SVG didáticos (`PrevSVG.*`)

13 funções vetoriais próprias, sem dependências externas:

`padraoOuroVsTeste`, `tripeMBE`, `snnoutSpinDual`, `paraleloSerie`, `bayesFluxo`, `rocDidatica`, `assimetrias`, `dispersaoDP`, `vppFunil`, `distribuicoesROC`, `histogramaTendencia`, `heroMapa`, ...

Mapeamento por página em `docs/matriz-visual.md`.

---

## Identidade visual

| Token         | Hex      | Uso                            |
|---------------|----------|--------------------------------|
| `--c-blue`    | #2563eb  | Módulo 1                       |
| `--c-teal`    | #14b8a6  | Módulo 2                       |
| `--c-orange`  | #f97316  | Módulo 3                       |
| `--c-violet`  | #8b5cf6  | Módulo 4                       |
| `--c-green`   | —        | acertos                        |
| `--c-red`     | —        | erros, alertas                 |
| `--c-amber`   | —        | atenção                        |

Frases-pilar (`fraseAutoral`):

- **M1-04 (MBE):** "Evidência sem clínica é estatística; clínica sem evidência é folclore."
- **M2-03 (Prevalência):** "Antes da fórmula, o terreno: prevalência muda a leitura do mesmo teste."
- **M3-04 (ROC):** "A curva ROC mostra escolhas; o ponto de corte é uma decisão clínica."
- **M4-06 (Dispersão):** "Sentir antes de calcular. Calcular para confirmar o que se sentiu."

---

## Validação (Fase 6 + 6.5)

- **5 gates técnicos:** zero `console.error`, zero `pageerror`, zero `requestfailed`, `<title>` preenchido, body renderizado.
- **8 gates didáticos:** pageHero, jornadaBar, sectionTitle, didax-blocks ≥4, svgIllus, interativo ≥1, revisaoAtiva, pageFooterMeta.
- **Tempo médio de load:** ~299 ms por página.

Checklist operacional em `docs/qa-checklist.md`.

---

## PWA

- Service worker: `sw.js`, cache `preventiva-pwa-v20260518-1`.
- App shell pré-cacheado (CSS, JS, fontes locais, ícones).
- Fallback offline: `offline.html`.
- Testar offline: DevTools → Application → Service Workers → Offline → recarregar.

Ao mudar arquivos do shell, **incremente o sufixo de versão** em `CACHE_NAME`.

---

## Workflow Git

Branch de desenvolvimento: `genspark_ai_developer`.

Convenção de commit:

```
feat(escopo): descrição curta
fix(escopo): correção
docs(escopo): documentação
test(escopo): QA / testes
```

Antes de PR:

1. `npm run qa` → **46/46 OK** obrigatório.
2. `git status` limpo.
3. Atualizar `docs/` se houve mudança de conteúdo ou visual.
4. Atualizar `CACHE_NAME` em `sw.js` se mexeu no shell.

Checklist completo em `docs/qa-checklist.md`.

---

## Documentação

Toda a documentação formal está em `docs/`:

- **`context-map.md`** — vínculo PROMPT_UNICO ↔ código.
- **`arquitetura-didatica.md`** — sequência canônica de 16 estações + 15 variantes de didaxBlock.
- **`matriz-conteudo.md`** — 46 páginas × conceitos × interativos × SVGs.
- **`matriz-visual.md`** — tokens, gradientes, classes utilitárias, fontes, dark mode.
- **`componentes-interativos.md`** — API de cada `PrevInt.*` + checklist para adicionar novo.
- **`fontes-e-roteiros.md`** — rastreabilidade autoral; cita verbatim as 4 frases-pilar e os 13 casos clínicos extraídos do PROMPT.
- **`qa-checklist.md`** — como rodar `npm run qa`, gates, diagnóstico rápido.
- **`qa-fase6.md` / `qa-fase6.json`** — último relatório de QA.
- **`relatorio-final.md`** — síntese executiva das 7 fases.

---

## Licença e conteúdo

- Código: uso interno do projeto Intensivão Preventiva.
- Conteúdo médico-didático: extraído e expandido a partir de `PROMPT_UNICO_CODEX_INTENSIVAO_PREVENTIVA.md`.

---

## Status

- ✅ **Fase 1–5** — Estrutura, módulos, costura, identidade visual.
- ✅ **Fase 6** — QA Playwright automatizado.
- ✅ **Fase 6.5** — Fechamento dos 6 interativos faltantes (46/46 OK).
- ✅ **Fase 7** — Documentação formal (8 docs + README + offline).

**Pronto para produção.**
