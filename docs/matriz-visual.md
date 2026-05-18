# Matriz Visual — Intensivão Preventiva

> Paleta, gradientes, SVGs, classes utilitárias e identidade Preventiva. Tudo extraído do código real (`css/preventiva.css`, `js/components/svg-library.js`).

## 1. Paleta de cores (tokens CSS)

Definidos em `css/preventiva.css` linhas 12–29 (modo claro) e 41–54 (modo escuro).

### Cores conceituais

| Token | Hex (claro) | Semântica didática |
|---|---|---|
| `--c-blue` | `#2563eb` | Estrutura, eixo, conceito, tabela 2x2 → **Módulo 1** |
| `--c-teal` | `#14b8a6` | Probabilidade, método, transição → **Módulo 2** |
| `--c-orange` | `#f97316` | Corte, limiar, mudança de ponto → **Módulo 3** |
| `--c-violet` | `#8b5cf6` | Raciocínio avançado, RV, AUC → **Módulo 4** |
| `--c-green` | `#10b981` | Acerto, VP/VN, segurança |
| `--c-red` | `#ef4444` | Erro, FP/FN, risco |
| `--c-amber` | `#f59e0b` | Atenção, prova, pegadinha |

Cada cor tem variante `*-soft` (rgba com baixa opacidade) para fundos.

### Gradientes por módulo

| Token | Modo claro | Uso |
|---|---|---|
| `--grad-m1` | azul claro → azul vivo (4 stops) | Heroes do Módulo 1 |
| `--grad-m2` | ciano claro → teal (4 stops) | Heroes do Módulo 2 |
| `--grad-m3` | creme → laranja (4 stops) | Heroes do Módulo 3 |
| `--grad-m4` | lavanda → violeta (4 stops) | Heroes do Módulo 4 |
| `--grad-revisao` | menta → teal escuro | Integradores |

Cada gradiente tem versão dark-mode (linhas 41–44 + style.css 133).

## 2. Identidade Preventiva (Fase 5)

A identidade visual da Preventiva é construída em 3 camadas:

### Camada 1 — Glass morphism + aurora gradients
Herdada do template e mantida na Preventiva. Heroes, cards e overlays usam `backdrop-filter: blur(...)` + gradientes 4-stop.

### Camada 2 — Voz fundadora (`fraseAutoral`)
Bloco com `::before` decorativo `"❝"` (aspa francesa) em posição absoluta. Estrutura:

```html
<div class="frase-autoral" role="note">
  <span class="fa-tag">Voz Preventiva</span>
  <div class="fa-body">[texto editorial]</div>
  <div class="fa-sig">Intensivão Preventiva — voz editorial</div>
</div>
```

Usado em **4 pontos**: `m1-04` · `m2-03` · `m3-04` · `m4-06` (viradas conceituais de cada módulo).

### Camada 3 — SVGs vetoriais didáticos
13 funções em `PrevSVG.*`. Detalhe na seção 5.

## 3. Classes utilitárias (Fase 5)

Refatoração de inline styles em classes semânticas. Tudo em `css/preventiva.css`.

### Title + Terms

| Classe | Estrutura HTML |
|---|---|
| `.section-title-pv` | `<div class="section-title-pv --m1"><div class="stp-ico"></div><span class="stp-emoji">🩺</span><h3>…</h3></div>` |
| `.section-title-pv.--m1/m2/m3/m4` | Modificador de cor (azul/teal/laranja/violeta) |
| `.key-terms` | flex container com chips de termos-chave |

### Case cards

| Classe | Uso |
|---|---|
| `.case-card` | Card de caso clínico (também usado por `PrevInt.casoClinico`) |
| `.case-card.--blue/teal/orange/violet/green/red/amber` | Borda lateral colorida |
| `.case-card-head` | Cabeçalho com cor temática |
| `.card-head.--blue/teal/...` | `<h4>` pequeno colorido para sub-cards |

### Frase autoral

| Classe | Função |
|---|---|
| `.frase-autoral` | Container do bloco (com `::before "❝"` decorativo) |
| `.fa-tag` | Tag superior ("Voz Preventiva") |
| `.fa-body` | Corpo do texto autoral |
| `.fa-sig` | Assinatura/atribuição |

### SVG ilustrativo

| Classe | Função |
|---|---|
| `.svg-illus` | Wrapper de SVG em `<figure>`-like |
| `.svg-caption` | Legenda didática abaixo do SVG |

### Layout

| Classe | Função |
|---|---|
| `.split-grid` | Grid auto-fit responsivo (2 colunas em desktop, 1 em mobile) |
| `.split2` | Grid 2 colunas fixas |
| `.center-display.--blue/teal/...` | Display centralizado, fonte monoespaçada, cor temática |
| `.formula-inline` | Fórmula inline com fundo suave |
| `.formula-note` | Nota explicativa abaixo de fórmula |

### Tipografia editorial

| Classe | Função |
|---|---|
| `.mt-prose` | Parágrafo curto após `sectionTitle` (cor `--text-muted`) |
| `.lead-text` | Texto de abertura, peso 600 |
| `.answer-text.--blue/teal/...` | Texto de resposta com cor temática |
| `.emphasis.--blue/teal/...` | Ênfase com cor temática |
| `.editorial-note` | Nota editorial italizada, fonte pequena |

### Listas

| Classe | Função |
|---|---|
| `.tight` | `<ul>`/`<ol>` com margens reduzidas |

## 4. Variantes de `didax-block`

Cada chamada `didaxBlock(variant, icon, title, html)` gera `<div class="didax-block --variant">`. Tem CSS específico por variant:

| Variant | Acento visual |
|---|---|
| `caso` | Borda azul/teal, fundo neutro |
| `importa` | Borda verde, ícone 💡 |
| `pegadinha` | Borda amber, fundo amber-soft |
| `naoconfunda` | Borda violet, ícone 🔀 |
| `errocomum` | Borda red, ícone ❌ |
| `avancado` | Borda violet escuro, ícone ⚡ |
| `numerico` | Borda blue, ícone 🔢 |
| `proxima` | Borda teal, ícone → |
| `resumo` | Borda green, ícone ✓ |
| `hit` | Destaque forte com gradiente sutil |
| `paralelo` | Para comparações lado a lado em `.split-grid` |
| `serie` | Para sequências clínicas |
| `prevalencia` | Para cenários epidemiológicos |
| `estrutura` | Para cenas estruturais (analogias) |
| `autoral` | Variante decorativa similar à `frase-autoral` |

15 variantes ao todo. Todas com CSS próprio em `css/preventiva.css`.

## 5. Biblioteca SVG (`PrevSVG.*`)

13 funções vetoriais em `js/components/svg-library.js`.

| Função | Tema | Página(s) de uso |
|---|---|---|
| `padraoOuroVsTeste` | Comparação visual teste × padrão-ouro | `m1-01`, `m1-04` |
| `tripeMBE` | Tripé MBE (3 pilares) | `m1-02` |
| `snnoutSpinDual` | SnNOut × SpPin | `m1-07`, `m1-09` |
| `paraleloSerie` | Paralelo × série | `m1-08`, `m1-10` |
| `bayesFluxo` | Fluxo da decisão diagnóstica | `m1-03`, `simulador-bayesiano` |
| `rocDidatica` | Curva ROC ilustrativa | `m3-01` |
| `assimetrias` | Distribuições simétrica/assimétricas | `m4-03` |
| `dispersaoDP` | 3 amostras, mesma média, DP crescente | `m4-06` |
| `vppFunil` | Funil VPP × prevalência (Fase 5) | `m2-03` |
| `distribuicoesROC` | Sãos × doentes sob ROC (Fase 5) | `m3-06` |
| `histogramaTendencia` | Média/mediana/moda sobre histograma (Fase 5) | `m4-02` |
| `heroMapa` | Mapa dos 4 módulos | `home`, `mapa-global` |

**Total de SVGs inline renderizados pela plataforma:** 29 (medição Fase 6).

## 6. CSS files — papéis

| Arquivo | Linhas | Papel |
|---|---:|---|
| `css/preventiva.css` | 965 | Identidade Preventiva, didax-blocks, classes utilitárias Fase 5 |
| `css/style.css` | 1.525 | Reset, layout, navegação, gradientes globais |
| `css/components.css` | 1.553 | Componentes do template (tbl2x2, dist-wrap, roc-wrap, flashdeck, quiz-section…) |
| `css/theme.css` | 1.285 | Sistema de tema (claro/escuro) e tokens base |
| `css/theme-glass.css` | 954 | Glass morphism layers |
| `css/theme-motion.css` | 885 | Animações e transições |
| `css/animations.css` | 154 | Animações utilitárias |
| `css/pwa.css` | 173 | UI específica PWA (install prompt, offline banner) |
| **Total** | **7.494** | |

## 7. Tipografia

- **Sans-serif:** Inter (300, 400, 500, 600, 700, 800, 900 + italic 400)
- **Monospace:** JetBrains Mono (400, 600) — usada em fórmulas, valores numéricos, calc

Carregadas do Google Fonts com `preconnect` no `<head>`.

## 8. Modo escuro

Implementado via `[data-theme="dark"]` no `<html>`. Toggle em `js/theme-enhancer.js`. Cada variável da paleta tem versão dark com mais saturação e menor luminância.

## 9. Responsividade

- **Mobile-first** por padrão.
- Breakpoints: `min-width: 720px` (tablet) e `min-width: 1024px` (desktop).
- `.split-grid` usa `auto-fit + minmax(280px, 1fr)` para colapsar naturalmente.
- Todos os SVGs têm `viewBox` e ocupam 100% de largura.

## 10. Acessibilidade

- Heroes têm `role="banner"` (implícito via `<header>`).
- Interativos têm `aria-label` descritivo (ex.: tabela 2x2 → `aria-label="Tabela 2x2 interativa"`).
- Flashcards: `tabindex="0"` + `role="button"` + Enter/Space para virar.
- `prefers-reduced-motion: reduce` desativa animações pesadas (em `theme-motion.css`).
- Contraste verificado em modo claro e escuro: AA mínimo, AAA para texto principal.
