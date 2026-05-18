/* =========================================
   MÓDULO 4 — TENDÊNCIA CENTRAL E DISPERSÃO
   9 páginas (m4-01 a m4-09).
   ========================================= */

['m4-01','m4-02','m4-03','m4-04','m4-05','m4-06','m4-07','m4-08','m4-09'].forEach(id => {
  GO_RENDER[id] = function(c, p) {
    c.innerHTML = pageHero({module:'m4', moduleLabel:'Módulo 4 — Tendência e Dispersão', title: p.label, lead:'Conteúdo integral em construção.', grad:'var(--grad-m4)'}) +
      '<div style="padding: 40px; text-align:center; color:var(--text-muted)">Página em costura — conteúdo do roteiro será integrado em iteração subsequente.</div>' +
      navFooter(p.id);
  };
});
