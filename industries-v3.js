/* ============================================================
   CyberX — INDUSTRIES · Version 3 ("Scroll Storyboard")
   immersive stacked sector panels + fixed progress rail
   ============================================================ */
(function () {
  const S = window.IX_S, M = window.IX_MOTIFS;
  if (!S) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = n => String(n).padStart(2, '0');
  const arr = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const chk = '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---- render panels ---- */
  const stack = document.getElementById('v3stack');
  stack.innerHTML = S.map((s, i) => `
    <article class="v3-panel" id="p-${s.id}" data-i="${i}" data-screen-label="Sector ${pad(i + 1)} · ${s.ka}" style="--ac:${s.ac};--rgb:${s.rgb}">
      <span class="v3-ghost">${pad(i + 1)}</span>
      <div class="v3-inner">
        <div class="v3-content">
          <div class="v3-en v3-reveal">${s.en} · ${pad(i + 1)} / ${pad(S.length)}</div>
          <h2 class="v3-title v3-reveal" data-d="1">${s.ka}</h2>
          <p class="v3-p1 v3-reveal" data-d="2">${s.p1}</p>
          <div class="v3-help v3-reveal" data-d="3"><span class="v3-chk">${chk}</span><p>${s.p2}</p></div>
          <div class="v3-tags v3-reveal" data-d="3">${s.tags.map(t => `<span class="v3-tag">${t}</span>`).join('')}</div>
          <a class="v3-cta v3-reveal" data-d="4" href="index.html#final">Talk to CyberX Expert ${arr}</a>
        </div>
        <div class="v3-visual v3-reveal" data-d="2">
          <span class="v3-motif" style="color:${s.ac}">${(M[s.motif] || M.grid)()}</span>
          <span class="v3-bigic"><svg viewBox="0 0 24 24" fill="none">${s.ic}</svg></span>
          <span class="v3-vlabel">${s.en}</span>
        </div>
      </div>
    </article>`).join('');

  /* ---- progress rail ---- */
  const rail = document.getElementById('v3rail');
  rail.innerHTML = S.map((s, i) =>
    `<a class="v3-dot" href="#p-${s.id}" data-i="${i}" style="--ac:${s.ac};--rgb:${s.rgb}" aria-label="${s.ka}">
       <span class="v3-dot-i">${pad(i + 1)}</span><span class="v3-dot-nm">${s.ka}</span></a>`).join('') +
    '<span class="v3-rail-line"><span class="v3-rail-fill" id="v3fill"></span></span>';
  const dots = [...rail.querySelectorAll('.v3-dot')];
  const fill = document.getElementById('v3fill');

  /* ---- reveal (base visible; class removed after play so never stuck) ---- */
  const panels = [...document.querySelectorAll('.v3-panel')];
  const revIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const p = e.target;
      p.classList.add('in');
      clearTimeout(p._t); p._t = setTimeout(() => p.classList.remove('in'), 1100);
      revIO.unobserve(p);
    }
  }), { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
  panels.forEach(p => revIO.observe(p));
  setTimeout(() => panels.forEach(p => { if (!p.classList.contains('in')) { p.classList.add('in'); setTimeout(() => p.classList.remove('in'), 1100); } }), 1500);

  /* ---- scroll-spy for rail ---- */
  let active = -1;
  function setActive(i) {
    if (i === active) return;
    active = i;
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    if (fill) fill.style.height = (((i + 1) / S.length) * 100) + '%';
  }
  const spyIO = new IntersectionObserver(() => {
    let chosen = -1, min = Infinity;
    panels.forEach((p, k) => {
      const r = p.getBoundingClientRect();
      const c = Math.abs((r.top + r.height / 2) - window.innerHeight / 2);
      if (r.bottom > 80 && r.top < window.innerHeight - 80 && c < min) { min = c; chosen = k; }
    });
    if (chosen >= 0) setActive(chosen);
  }, { threshold: [0, .3, .6, 1], rootMargin: '-5% 0px -5% 0px' });
  panels.forEach(p => spyIO.observe(p));
  setActive(0);

  /* ---- hero count-up ---- */
  const nums = [...document.querySelectorAll('[data-count]')];
  function countUp(el) {
    const target = parseInt(el.dataset.count, 10), suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suf; return; }
    const dur = 1400, t0 = performance.now();
    const tick = t => { const k = Math.min((t - t0) / dur, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    setTimeout(() => { el.textContent = target + suf; }, dur + 250);
  }
  const numIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { countUp(e.target); numIO.unobserve(e.target); } }), { threshold: 0.5 });
  nums.forEach(n => numIO.observe(n));

  /* ---- smooth anchor scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', ev => {
      const id = a.getAttribute('href').slice(1); if (!id) return;
      const el = document.getElementById(id); if (!el) return;
      ev.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });
})();
