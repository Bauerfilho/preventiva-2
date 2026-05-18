# Arquitetura Didática — Intensivão Preventiva

> Como uma página é construída, na ordem em que o aluno encontra os elementos.

## 1. Princípio guia

Cada página de conteúdo da Preventiva implementa uma **sequência canônica de 11 estações** que constrói raciocínio em camadas, do desejo clínico ao automatismo de banca.

```
1.  pageHero        →  "qual é a pergunta deste capítulo?"
2.  jornadaBar      →  "de onde você vem · onde você está · para onde vai" (transições)
3.  conceptHero     →  "qual é a virada conceitual que vamos fazer?"
4.  crossLink       →  "antes de seguir, revise X em outro módulo" (quando aplicável)
5.  keyTerms        →  "estes são os termos com que você vai se acostumar"
6.  prose           →  "leia a explicação por inteiro, sem resumo"
7.  sectionTitle    →  marca a virada do leitor para o próximo bloco visual
8.  svgIllus        →  "viva visualmente o conceito" (M2/M3/M4)
9.  interativo PrevInt →  "faça você mesmo: mexa, calcule, decida"
10. didaxBlocks     →  variantes: caso/importa/pegadinha/naoconfunda/errocomum/avancado/hit/...
11. bancaCallout    →  "o que a banca quer testar disso"
12. revisaoAtiva    →  perguntas de fixação ativa com toggle
13. fraseAutoral    →  voz fundadora (apenas páginas-pilar)
14. pontoDeCostura  →  conexão editorial com o módulo seguinte (transições)
15. pageFooterMeta  →  resumo operacional + ponte para a próxima página
16. navFooter       →  "anterior · próxima"
```

Nem todas as 16 estações aparecem em todas as páginas. As **obrigatórias** para uma página de conteúdo (validadas pelo QA da Fase 6) são:

| Estação | Validação automática |
|---|---|
| `pageHero` | `.page-hero >= 1` |
| `conceptHero` | `.concept-hero >= 1` |
| `sectionTitle` | `.section-title-pv >= 1` |
| didax-block | `[class*="didax-block"] >= 1` |
| Interativo | `.tbl2x2-wrap`, `.dist-wrap`, `.roc-wrap`, `.flashdeck`, `.quiz-section`, ou `.case-card .case-options` |
| `bancaCallout` | `.banca-callout >= 1` |
| Revisão ativa | `.didax-block.--resumo` contendo `<ol>` com `<details>` |
| `pageFooterMeta` | `.didax-block.--resumo` ou `.didax-block.--proxima` |
| `navFooter` | `.page-nav >= 1` |

## 2. Anatomia em código

### 2.1 Esqueleto-padrão (`renderStandard`)

Cada `GO_RENDER[pageId]` chama `renderStandard(container, page, body)`, onde `body` é a concatenação de strings produzidas pelos helpers acima. O método de montagem é **declarativo e funcional**: cada estação é uma chamada de função que retorna HTML.

```js
GO_RENDER['m1-04'] = function(container, page) {
  const body = `
    ${pageHero({ module:'m1', moduleLabel:'…', pageNum:4, title:'…', lead:'…', grad:'var(--grad-m1)' })}
    ${conceptHero({ question:'…', title:'…', lead:'…', glow:'…' })}
    ${keyTerms(['…','…','…'], 'blue')}
    <div class="prose">…</div>
    ${sectionTitle('🩺','Título da seção', 'm1')}
    ${PrevInt.tabela2x2({…})}
    ${didaxBlock('caso','🩺','Título', '<p>…</p>')}
    ${bancaCallout(`…`)}
    ${revisaoAtiva([ { q:'…', a:'…' } ])}
    ${fraseAutoral({ tag:'Voz Preventiva', body:'…', assinatura:'…' })}
    ${pageFooterMeta({ resumo:'…', proximaConexao:'…', nextId:'m1-05' })}
  `;
  renderStandard(container, page, body);
};
```

### 2.2 Variantes de `didaxBlock`

Existem 12 variantes-padrão de bloco didático, cada uma com CSS próprio e propósito semântico:

| Variante | Ícone canônico | Propósito |
|---|---|---|
| `caso` | 🩺 | Cena clínica / situação-problema |
| `importa` | 💡 | "Por que isso importa na prática?" |
| `pegadinha` | ⚠️ | Pegadinha de prova |
| `naoconfunda` | 🔀 | Pares conceituais que se confundem |
| `errocomum` | ❌ | Erro comum do aluno |
| `avancado` | ⚡ | "O que diferencia o aluno avançado" |
| `numerico` | 🔢 | Preparação numérica para a fórmula |
| `proxima` | → | Conexão com a próxima página |
| `resumo` | ✓ | Resumo operacional / revisão ativa |
| `hit` | 💡 | Insight central forte |
| `paralelo` | 🟦 / 🟪 | Comparações lado a lado |
| `serie` | 📈 | Sequências e progressões clínicas |
| `prevalencia` | 📊 | Cenários epidemiológicos |
| `estrutura` | 🏛️ | Cenas estruturais (IBGE, Seleção…) |
| `autoral` | (decorativo) | Frase autoral (estilo da `fraseAutoral`) |

## 3. Camadas de aprendizagem

Vista do ponto de vista do aluno, a sequência canônica produz três camadas de aprendizagem:

### Camada 1 — Recepção (estações 1-6)
**Aluno escuta.** `pageHero`, `jornadaBar`, `conceptHero`, `crossLink`, `keyTerms`, prose. Tudo é leitura passiva, mas com formatação editorial que **destaca os conceitos âncora** (`<strong>`, `<em>`, `class="keyword"`, `class="pulled"`).

### Camada 2 — Vivência (estações 7-9)
**Aluno faz.** `sectionTitle` marca a virada. `svgIllus` materializa o conceito visualmente. **Interativo PrevInt** força o aluno a mexer, calcular, decidir. Sem essa camada, o conceito permanece abstrato.

### Camada 3 — Cristalização (estações 10-16)
**Aluno consolida.** `didaxBlocks` em variantes específicas atacam diferentes ângulos do conceito. `bancaCallout` traduz para a linguagem da prova. `revisaoAtiva` força recuperação ativa. `fraseAutoral` carimba a voz fundadora. `pontoDeCostura` e `pageFooterMeta` conectam à próxima página, mantendo o fio narrativo.

## 4. Costura editorial (Fase 4)

Três helpers adicionais conectam módulos entre si, evitando que cada módulo seja uma ilha:

### `crossLink({ module, pageId, variant, label, hint })`
Link cruzado para uma página específica de **outro** módulo. Variantes:
- `'recap'` — "Revise X em M1 antes de seguir"
- `'bridge'` — "Avance para Y em M3"

Usado em 12 lugares na plataforma.

### `jornadaBar({ from, current, next })`
Barra horizontal com 3 células no topo de páginas de transição entre módulos. Cada célula tem `module` (ex.: `'m2'`), `label`, e cores específicas do módulo. Usada em 5 páginas (aberturas de M2/M3/M4 + fechamentos).

### `pontoDeCostura({ fromModule, toModule, fromTitle, toTitle, ponte, links })`
Bloco editorial extenso de transição entre módulos. Contém uma "ponte" textual (`ponte`) explicando o porquê da transição e uma lista de `crossLink` para revisões importantes. Usado em 5 páginas-charneira.

## 5. Identidade Preventiva (Fase 5)

### `fraseAutoral({ tag, body, assinatura })`
Bloco visualmente distinto (com aspas decorativas `::before "❝"`) que carrega a voz fundadora da Preventiva. Usado em apenas 4 páginas — exatamente onde a voz tem peso conceitual máximo:

| Página | Conceito | Trecho-âncora |
|---|---|---|
| `m1-04` | tabela 2x2 | "A tabela 2x2 é a cruz que organiza todo o raciocínio diagnóstico…" |
| `m2-03` | prevalência transforma VPP | "A porquinha torce o rabo… mesma Sens e Esp, mundos diferentes…" |
| `m3-04` | 5,7 da HbA1c | "5,7 não é mágico. É a fronteira que duas distribuições escolheram…" |
| `m4-06` | dispersão | "Centro não é espalhamento. Quando vejo uma média sozinha, sei que olho metade da história…" |

### `svgIllus(svgString, caption)`
Wrapper para uma das 13 funções `PrevSVG.*`, com legenda didática opcional. Usado em 6 páginas (m3-01, m3-06, m4-02, m4-03, m4-06, m2-03).

## 6. Princípio da redundância controlada

O PROMPT pede explicitamente "NO summarization". Para honrar isso sem cair em repetição cansativa, a plataforma usa **redundância controlada**: cada conceito-âncora aparece em **3 a 5 camadas diferentes** dentro da mesma página, **cada uma em formato distinto**:

- (a) `conceptHero` — formato pergunta-gatilho
- (b) `prose` — formato dissertativo
- (c) `formulaBox` — formato matemático (quando cabe)
- (d) interativo PrevInt — formato manipulação direta
- (e) `didaxBlock --importa` — formato "por que importa"
- (f) `bancaCallout` — formato banca de prova
- (g) `revisaoAtiva` — formato pergunta-resposta com toggle
- (h) `fraseAutoral` — formato voz autoral (páginas-pilar)

Essa redundância é **didática**, não estilística: cada formato ativa um circuito cognitivo diferente.

## 7. Padrões anti-pattern (proibidos)

- ❌ **Página sem interativo.** Validado pela Fase 6.5 — 100% das 39 páginas de conteúdo agora têm ao menos 1 `PrevInt.*`.
- ❌ **Resumo no lugar do conteúdo.** Cada `prose` tem ≥ 4 parágrafos.
- ❌ **Sequência diferente da canônica.** As estações respeitam a ordem definida na seção 1 deste documento.
- ❌ **Inline styles soltos.** A Fase 5 refatorou inline styles para classes utilitárias (`section-title-pv`, `key-terms`, `case-card --color`, etc.). Restam ~40 inline styles em tabelas matemáticas onde o layout específico é necessário.
- ❌ **Variante de didax-block sem CSS.** Toda variante usada deve ter regra correspondente em `css/preventiva.css`.

## 8. Como adicionar uma nova página

1. Acrescente a entrada em `js/data.js` no array `GO_PAGES`:
   ```js
   { id: 'm5-01', block: 'm5', icon: '1', label: 'Título', grad: 'm5' }
   ```
2. Escreva o renderer em `js/pages/moduloN.js`:
   ```js
   GO_RENDER['m5-01'] = function(container, page) { ... };
   ```
3. Use as estações canônicas conforme seção 1.
4. Rode `npm run qa` antes de commitar.
5. Garanta que o relatório (`docs/qa-fase6.md`) continua mostrando todas as páginas como OK.

## 9. Resumo executivo

A arquitetura didática da Preventiva entrega 3 garantias:

1. **Uniformidade estrutural** — toda página segue a mesma sequência canônica, validada por QA automatizado.
2. **Profundidade preservada** — nenhum conceito é resumido; cada um aparece em múltiplas camadas com formatos distintos.
3. **Conexão entre módulos** — a costura editorial (Fase 4) evita módulos-ilha; cada transição é editorialmente justificada.
