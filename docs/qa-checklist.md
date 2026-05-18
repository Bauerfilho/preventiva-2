# QA Checklist — Intensivão Preventiva

Documento operacional. Reúne **como rodar** o QA automatizado, **o que cada gate verifica** e o **checklist manual** que deve ser passado antes de marcar uma página nova como pronta.

Referências cruzadas:
- `docs/arquitetura-didatica.md` — sequência canônica de 16 estações.
- `docs/componentes-interativos.md` — APIs de `PrevInt.*`.
- `docs/qa-fase6.md` / `docs/qa-fase6.json` — último relatório executado.

---

## 1. Como rodar o QA

### 1.1 Pré-requisitos

- Node 18+
- Dependências do projeto: `playwright` (instalado localmente em `devDependencies`).
- Chromium baixado para Playwright (uma vez):
  ```bash
  npx playwright install chromium
  ```

### 1.2 Servidor local

O QA assume o app servido em `http://localhost:8000`.

```bash
npm run serve
# equivalente a: python3 -m http.server 8000
```

Deixe rodando em outro terminal ou em background.

### 1.3 Rodar o QA das 46 páginas

```bash
npm run qa
# equivalente a: node scripts/qa-fase6.js
```

O runner:
1. Abre Chromium headless.
2. Visita as 46 rotas (`#home`, `#m1-01..#m1-13`, `#m2-01..#m2-10`, `#m3-01..#m3-07`, `#m4-01..#m4-09`, integradores `#integ-*`).
3. Captura métricas e gera dois artefatos:
   - `docs/qa-fase6.md` — relatório legível.
   - `docs/qa-fase6.json` — dump completo.

### 1.4 Interpretando o output

No final do `qa-fase6.md` há sempre uma linha:

```
Resultado: NN/46 OK
```

- **46/46 OK** = todas as páginas passaram em todos os gates.
- Páginas problemáticas aparecem em uma seção dedicada com a lista exata de critérios reprovados.
- Se `0 issues`, o relatório inclui o bloco **"Conformidade didática"** com métricas agregadas (média de didax-blocks, total de PrevInt, etc.).

---

## 2. Gates técnicos (automáticos)

Cada página precisa passar nos **5 gates técnicos** abaixo. Falha em qualquer um marca a página como reprovada.

| # | Gate                       | Como é medido                                       | Tolerância |
|---|----------------------------|-----------------------------------------------------|------------|
| 1 | `console.errors`           | Listener `page.on('console')` filtrando `type=error`| 0 erros    |
| 2 | `pageerror`                | Listener `page.on('pageerror')` (exceções JS)       | 0          |
| 3 | `requestfailed`            | Listener `page.on('requestfailed')`                 | 0          |
| 4 | `<title>` preenchido       | `document.title` não-vazio                          | obrigatório|
| 5 | `<main id="conteudo">` renderizado | `body` contém o conteúdo declarativo da rota | obrigatório|

Tempo de carregamento médio do último run: **~299 ms**. Páginas acima de **3 s** são sinalizadas para investigação (não reprovam, mas viram alerta).

---

## 3. Gates didáticos (automáticos, conteúdo)

Aplicados apenas a páginas de conteúdo (exclui `#home` e integradores que são puramente narrativos).

### 3.1 Estações obrigatórias

Detectores CSS usados em `scripts/qa-fase6.js`:

| Estação              | Seletor detector                                  |
|----------------------|---------------------------------------------------|
| pageHero             | `.page-hero`                                      |
| jornadaBar           | `.jornada-bar`                                    |
| conceptHero          | `.concept-hero` ou `.page-hero .page-hero__lead`  |
| keyTerms             | `.key-terms`                                      |
| sectionTitle (≥1)    | `.section-title-pv`                               |
| svgIllus (≥1)        | `.svg-illus`                                      |
| didaxBlocks (≥4)     | `.didax-block`                                    |
| interativo (≥1)      | ver §3.2                                          |
| bancaCallout         | `.banca-callout`                                  |
| revisaoAtiva         | `.didax-block.--resumo ol details`                |
| fraseAutoral         | `.frase-autoral` *(só nas 4 páginas-pilar)*       |
| pontoDeCostura       | `.ponto-costura` (≥1 por módulo)                  |
| pageFooterMeta       | `.didax-block.--resumo` + `.didax-block.--proxima`|

### 3.2 Interativo — pelo menos 1 por página

Considera-se "interativo" a presença de ao menos um dos seletores abaixo:

| Componente PrevInt   | Seletor raiz                          |
|----------------------|---------------------------------------|
| tabela2x2            | `.tbl2x2-wrap`                        |
| simPrevalencia       | `.dist-wrap` (com `data-kind="prev"`) |
| bayes                | `.dist-wrap` (com `data-kind="bayes"`)|
| calcEstat            | `.dist-wrap` (com `data-kind="calc"`) |
| rocCurva             | `.roc-wrap`                           |
| flashdeck            | `.flashdeck`                          |
| quizBanca            | `.quiz-section`                       |
| casoClinico          | `.case-card .case-options`            |

> ⚠️ `.case-card` **sozinho** não conta como casoClinico (existem usos decorativos em `#m3-01` etc.). O detector exige a presença de `.case-options` dentro.

### 3.3 Limiares numéricos

Última auditoria (commit `6b8cbc7`):

- **didax-blocks total:** 1.101 (média **~24 por página**).
- **sectionTitles-pv total:** 77.
- **PrevInt total:** 55 instâncias.
- **SVGs inline (PrevSVG):** todas as páginas têm ≥1.

Se uma nova página ficar abaixo de **4 didax-blocks** ou **1 PrevInt**, o QA reprova.

---

## 4. Identidade visual — Fase 5 (verificação manual)

Não automatizado, mas deve ser conferido antes de criar PR.

- [ ] `pageHero` usa gradiente correto do módulo (`--grad-m1..m4`).
- [ ] Todos os `sectionTitle` recebem o slug do módulo (`'m1'..'m4'`) — sem variantes default cinzas.
- [ ] `keyTerms` aparece **antes** da primeira `prose`/`sectionTitle`.
- [ ] `svgIllus` envolve PrevSVG (não SVG solto sem moldura).
- [ ] `fraseAutoral` aparece exatamente nas **4 páginas-pilar**: `m1-04`, `m2-03`, `m3-04`, `m4-06` (ver `docs/matriz-conteudo.md`).
- [ ] Paleta respeita o módulo: m1=azul, m2=teal, m3=laranja, m4=violeta.
- [ ] Dark mode (`[data-theme="dark"]`) ainda legível (testar via toggle).

---

## 5. Costura editorial — Fase 4 (verificação manual)

- [ ] `jornadaBar` está logo após `pageHero` (segunda estação).
- [ ] Pelo menos **1 `crossLink`** por módulo apontando para outro módulo.
- [ ] Pelo menos **1 `pontoDeCostura`** por módulo amarrando o conceito anterior ao próximo.
- [ ] `pageFooterMeta` traz `resumo` + `proxima` apontando para a página seguinte da jornada.
- [ ] Páginas integradoras (`integ-*`) referenciam pelo menos 2 módulos.

---

## 6. Checklist — adicionar uma nova página

Use este passo a passo ao criar `m{X}-{NN}` novo.

### 6.1 Conteúdo
1. Acrescente entrada em `js/data.js` → `GO_PAGES` com `{id, block, icon, label, grad}`.
2. Crie a função `GO_RENDER['mX-NN'] = () => ...` no `js/pages/moduloX.js`.
3. Monte a sequência canônica (16 estações) — copie de uma página vizinha como template.
4. Garanta:
   - 1 `pageHero` + 1 `jornadaBar` + 1 `conceptHero`.
   - 1 `keyTerms` (≥3 termos).
   - ≥1 `sectionTitle('emoji','título', 'mX')`.
   - ≥1 `svgIllus(PrevSVG.algo({...}))`.
   - ≥4 `didaxBlock` variados (caso, importa, pegadinha, naoconfunda, ...).
   - **≥1 `PrevInt.*`** (obrigatório — vide `docs/componentes-interativos.md`).
   - 1 `bancaCallout`.
   - 1 `revisaoAtiva([3-5 perguntas])`.
   - 1 `pageFooterMeta({resumo, proxima})`.

### 6.2 Estilo
5. Se introduzir novo helper visual, adicione CSS em `css/preventiva.css` respeitando os tokens existentes.
6. Se introduzir nova `PrevSVG`, registre em `js/components/svg-library.js` e documente em `docs/matriz-visual.md`.

### 6.3 QA
7. `node --check js/pages/moduloX.js`.
8. `npm run qa` — confirme **46/46** (ou N/46 se adicionou páginas além das 46).
9. Atualize `docs/matriz-conteudo.md` (linha da nova página).
10. Se a nova página tiver `fraseAutoral`, atualize `docs/fontes-e-roteiros.md`.

### 6.4 Git
11. `git add -A && git commit -m "feat(mX): conteúdo de mX-NN — <tema>"`.
12. `git push origin genspark_ai_developer`.

---

## 7. Adicionar novo componente interativo

Se precisar criar um novo `PrevInt.algo`:

1. Implementar em `js/components/interactive.js` (exportar via `window.PrevInt`).
2. Estilizar em `css/preventiva-interactive.css`.
3. **Registrar no QA**: editar `scripts/qa-fase6.js` (~linha 155) e acrescentar o seletor raiz em `interativoSelectors`.
4. Documentar em `docs/componentes-interativos.md`:
   - Assinatura.
   - Output HTML.
   - Página(s) de uso.
5. Rodar `npm run qa` novamente.

---

## 8. Pre-flight antes de PR

Checklist mínimo para enviar PR:

- [ ] `npm run qa` → **46/46 OK**.
- [ ] `node --check` em todos os arquivos modificados.
- [ ] `git status` limpo (todas as mudanças commitadas).
- [ ] `docs/qa-fase6.md` atualizado (rodar o QA gera novo).
- [ ] Se houve mudança visual, `docs/matriz-visual.md` atualizado.
- [ ] Se houve mudança de conteúdo, `docs/matriz-conteudo.md` atualizado.
- [ ] CACHE_NAME em `sw.js` incrementado quando há mudança de shell (CSS/JS principal).

---

## 9. Diagnóstico rápido — falhas comuns

| Sintoma                                          | Causa provável                                | Onde investigar                              |
|--------------------------------------------------|-----------------------------------------------|----------------------------------------------|
| Página em branco, `console.error` "Unexpected"   | Erro de sintaxe no renderer                   | `node --check js/pages/moduloX.js`           |
| `requestfailed` em CSS                           | CACHE_NAME desatualizado vs APP_SHELL         | `sw.js` — verificar lista e versão           |
| `interativo: 0` no QA                            | Esqueceu `PrevInt.*` na página                | Renderer da página                           |
| `didax-blocks < 4`                               | Conteúdo curto demais                         | Expandir com `pegadinha`, `naoconfunda`, etc.|
| `revisaoAtiva: 0`                                | Esqueceu `revisaoAtiva([...])` no rodapé      | Renderer — penúltima estação                 |
| `casoClinico` detectado por engano               | Usou `.case-card` decorativo sem `.case-options` | Detector em `scripts/qa-fase6.js` linha ~155 |

---

## 10. Versão

- Última execução verde: **46/46 OK** após commit `6b8cbc7` (Fase 6.5).
- Última atualização deste documento: Fase 7 (consolidação).
