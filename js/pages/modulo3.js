/* =========================================
   MÓDULO 3 — CURVA ROC, PONTOS DE CORTE E AUC
   7 páginas (m3-01 a m3-07).
   ========================================= */

['m3-01','m3-02','m3-03','m3-04','m3-05','m3-06','m3-07'].forEach(id => {
  GO_RENDER[id] = function(c, p) {
    c.innerHTML = pageHero({module:'m3', moduleLabel:'Módulo 3 — Curva ROC', title: p.label, lead:'Conteúdo integral em construção.', grad:'var(--grad-m3)'}) +
      '<div style="padding: 40px; text-align:center; color:var(--text-muted)">Página em costura — conteúdo do roteiro será integrado em iteração subsequente.</div>' +
      navFooter(p.id);
  };
});
