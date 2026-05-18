# Componentes Interativos — `PrevInt.*`

> API completa do namespace `PrevInt` em `js/components/interactive.js`. Cada função retorna **string HTML**; os listeners são anexados via `setTimeout(..., 0)` após o DOM montar.

## Visão geral

| Componente | Linha | Classe raiz CSS | Uso atual |
|---|---:|---|---:|
| `PrevInt.tabela2x2` | 32 | `.tbl2x2-wrap` | ~25 instâncias |
| `PrevInt.simPrevalencia` | 143 | `.dist-wrap` | 2 |
| `PrevInt.bayes` | 211 | `.dist-wrap` | 4 |
| `PrevInt.calcEstat` | 291 | `.dist-wrap` | 11 |
| `PrevInt.rocCurva` | 397 | `.roc-wrap` | 8 |
| `PrevInt.casoClinico` | 604 | `.case-card` | 1 |
| `PrevInt.flashdeck` | 641 | `.flashdeck` | 2 |
| `PrevInt.quizBanca` | 662 | `.quiz-section` | 5 |

Total medido em runtime (QA Fase 6.5): **55 instâncias** distribuídas entre 39 páginas de conteúdo + 1 simulador integrador.

## Convenções gerais

- Todas as funções recebem um objeto `opts` (com defaults) ou uma estrutura simples.
- IDs gerados por `uid(prefix)` para evitar colisão entre múltiplas instâncias na mesma página.
- O HTML é retornado como string para ser concatenado no `body` do renderer.
- Os listeners são anexados em `setTimeout(..., 0)` para garantir que o DOM já existe.

---

## 1. `PrevInt.tabela2x2(opts)`

**Tabela 2x2 interativa** — o componente mais usado da plataforma.

### Assinatura

```js
PrevInt.tabela2x2({
  vp: 90, fp: 30, fn: 10, vn: 870,  // valores iniciais
  lockPrev: false,                   // se true, fixa a prevalência (proporção doentes/N)
  title: 'Título opcional',
  preset: { vp, fp, fn, vn },        // alias para valores iniciais
  presets: [ {label, vp, fp, fn, vn} ]  // botões de presets clicáveis
})
```

### Saídas calculadas em tempo real

Sens, Esp, VPP, VPN, acurácia, prevalência, RV+, RV−, N total, TP, TN, doentes, sadios.

### Onde usar

Quando você quer que o aluno **mexa nos valores e veja Sens/Esp/VPP/VPN responderem**. Padrão de uso M1 e M2.

---

## 2. `PrevInt.simPrevalencia(opts)`

**Simulador de prevalência** — slider de prevalência que move VPP/VPN preservando Sens/Esp.

### Assinatura

```js
PrevInt.simPrevalencia({
  sens: 0.95,
  esp: 0.90,
  prev: 0.10   // prevalência inicial (0..1)
})
```

### O que o aluno vê

Painel com 4 KPIs (VPP, VPN, Sens, Esp) + slider de prevalência (0.1%–80%) + narrativa textual que se atualiza descrevendo o cenário.

### Onde usar

Páginas que querem demonstrar **a porquinha torçendo o rabo**: `m2-03` (canônica), `m1-11`.

---

## 3. `PrevInt.bayes(opts)`

**Calculadora bayesiana** — pré-teste × RV → pós-teste.

### Assinatura

```js
PrevInt.bayes({
  prev: 0.10,   // probabilidade pré-teste (0..1)
  rvp: 10,      // RV+
  rvn: 0.10     // RV−
})
```

### O que o aluno vê

Dois sliders (pré-teste, RVs) + KPIs de probabilidade pós-teste positivo e negativo + visualização de transformação odds → probability.

### Onde usar

`m2-05`, `m2-06`, `m2-10`, e a página integradora `simulador-bayesiano`.

---

## 4. `PrevInt.calcEstat(opts)`

**Calculadora estatística** — média, mediana, moda, amplitude, variância, desvio padrão, em tempo real.

### Assinatura

```js
PrevInt.calcEstat({
  values: [92, 98, 102, 105, 108, 112, 118, 125]
})
```

> **Atenção:** A função aceita **apenas** `values`. Parâmetros como `title` são ignorados — use `sectionTitle()` antes para introduzir.

### O que o aluno vê

Textarea editável (vírgula ou espaço) + 8 KPIs (N, Σx, média, mediana, moda, amplitude, variância, DP) + dot-strip visual + narrativa de cenário.

### Onde usar

M4 inteiro. Padrão de uso em `m4-06`: **duas calc-estat lado a lado** dentro de `.split-grid` para comparar Felipe (0,2,8,10) × Rafael (4,5,5,6).

---

## 5. `PrevInt.rocCurva(opts)`

**Curva ROC interativa** com distribuições normais para sãos × doentes.

### Assinatura

```js
PrevInt.rocCurva({
  mu0: 4.8, sd0: 0.55,  // sãos: média e DP
  mu1: 7.5, sd1: 1.05,  // doentes: média e DP
  cut: 6.5,             // ponto de corte inicial
  label: 'HbA1c (%)',
  range: [3, 12]        // domínio do eixo
})
```

### O que o aluno vê

À esquerda: duas curvas normais (sãos azul / doentes vermelho) + slider de ponto de corte + visualização das áreas VP/FP/FN/VN.

À direita: a Curva ROC propriamente dita, com o ponto correspondente ao corte atual marcado, AUC calculada, Sens/Esp/Youden em KPIs.

### Onde usar

Módulo 3 inteiro. Em `m3-06`, dois `rocCurva` lado a lado para comparar AUC entre marcadores A e B.

---

## 6. `PrevInt.casoClinico(opts)` *(novo na Fase 6.5)*

**Caso clínico de múltipla escolha** com feedback explicativo.

### Assinatura

```js
PrevInt.casoClinico({
  tag: 'Caso clínico',
  title: 'Mulher de 22 anos com dor torácica atípica',
  scenario: '<p>HTML descritivo do caso…</p>',
  question: 'Qual a melhor conduta diagnóstica?',
  options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
  correctIndex: 2,
  explain: 'HTML com a explicação da resposta correta',
  tip: 'Dica didática (opcional)'
})
```

### O que o aluno vê

Card com cenário formatado + pergunta + botões de opção. Ao clicar, todos travam: a opção correta vira verde, a errada (se foi escolhida outra) vira vermelha, e aparece o bloco de feedback colorido com `explain` + `tip`.

### Onde usar

Em páginas de abertura conceitual onde a melhor consolidação é uma **decisão clínica**. Usado em `m1-03` (jovem 22a, dor torácica, prob. pré-teste ~2%).

---

## 7. `PrevInt.flashdeck(cards)`

**Flashcards** com flip 3D ao clicar/Enter/Space.

### Assinatura

```js
PrevInt.flashdeck([
  { q: 'Pergunta visível na frente', a: 'Resposta no verso' },
  { q: '…', a: '…' }
])
```

### O que o aluno vê

Grid de cards (mobile: 1 coluna, desktop: 2-3). Cada card vira em 3D ao clique, mostrando a resposta. Acessível via teclado.

### Onde usar

- `m1-02` — 4 cards consolidando pilares da MBE.
- `m3-01` — 5 cards separando RV (matemático) de ROC (visual).
- E qualquer página que ganhe com fixação tipo "ver de novo, lembrar, virar".

---

## 8. `PrevInt.quizBanca(questions, title?)`

**Quiz estilo banca de prova** — múltipla escolha com feedback explicativo.

### Assinatura

```js
PrevInt.quizBanca([
  {
    stem: 'Enunciado da questão (HTML)',
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correct: 2,
    explanation: 'Explicação da resposta correta',
    tip: 'Dica (opcional)'
  },
  // ...
], 'Como a banca cobra'  // título opcional
)
```

### O que o aluno vê

Bloco com cabeçalho ("Como a banca cobra · USP-RP · ENARE · Revalida") + N questões cada uma com:
- Numeração ("Questão 1")
- Enunciado
- 4-5 opções clicáveis
- Ao clicar: correta vira verde, errada vira vermelha, feedback aparece

### Onde usar

**Sempre nas páginas de fechamento de módulo:** `m1-13`, `m2-10`, `m3-07`, `m4-09`. Também na `revisao-final`.

---

## API de baixo nível (não usar diretamente)

Funções utilitárias internas em `js/components/interactive.js`:

- `uid(prefix)` — gera ID único
- `esc(s)` — escape de HTML
- `pct(x, d)` — formata como percentual
- `round(x, d)` — arredondamento
- `erf(x)`, `normCdf(x, mu, sd)`, `normPdf(x, mu, sd)` — matemática gaussiana (usadas em `rocCurva`)

Funções de wiring privadas:

- `PrevInt._wireT2(id)` — listeners da tabela2x2
- `PrevInt._wireSP(id, sens, esp)` — listeners do simPrevalencia
- `PrevInt._wireBy(id)` — listeners do bayes
- `PrevInt._wireCe(id)` — listeners do calcEstat
- `PrevInt._wireRoc(id, params)` — listeners do rocCurva

## Checklist ao adicionar um novo interativo

1. Adicionar a função em `js/components/interactive.js` seguindo o padrão (return string HTML + `setTimeout(...)` para wiring).
2. Adicionar CSS em `css/components.css` ou `css/preventiva.css`.
3. **Atualizar o detector de QA** em `scripts/qa-fase6.js`:
   ```js
   const interativoSelectors = [
     '.tbl2x2-wrap', '.dist-wrap', '.roc-wrap',
     '.flashdeck', '.quiz-section',
     '.case-card .case-options',
     '.SUA-NOVA-CLASSE'    // <— acrescentar
   ].join(',');
   ```
4. Rodar `npm run qa` e confirmar OK.
5. Documentar a nova função neste arquivo.
