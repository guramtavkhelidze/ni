/* ============================================================
   CyberX — INDUSTRIES · Version 2 ("Sector Wall")
   animated bento mosaic + focus overlay
   ============================================================ */
(function () {
  const S = window.IX_S, M = window.IX_MOTIFS;
  if (!S) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = n => String(n).padStart(2, '0');
  const arr = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const chk = '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // bento span pattern (4-col grid, dense flow)
  const spans = ['big', 's', 's', 'wide', 's', 's', 'wide', 's', 's', 's', 'wide'];

  /* ---- render mosaic ---- */
  const grid = document.getElementById('v2grid');
  grid.innerHTML = S.map((s, i) => {
    const teaser = s.p1.split('. ')[0] + '.';
    return `<button class="v2-tile ${spans[i] || 's'}" data-i="${i}" type="button" style="--ac:${s.ac};--rgb:${s.rgb}" aria-label="${s.ka}">
      <span class="v2-motif" style="color:${s.ac}">${(M[s.motif] || M.grid)()}</span>
      <span class="v2-gh">${pad(i + 1)}</span>
      <span class="v2-ic"><svg viewBox="0 0 24 24" fill="none">${s.ic}</svg></span>
      <span class="v2-meta">
        <span class="v2-en">${s.en}</span>
        <span class="v2-nm">${s.ka}</span>
        <span class="v2-teaser">${teaser}</span>
      </span>
      <span class="v2-go">${arr}</span>
    </button>`;
  }).join('');

  /* ---- focus overlay ---- */
  const ov = document.getElementById('v2ov');
  const ovCard = document.getElementById('v2ovCard');
  const ovBody = document.getElementById('v2ovBody');
  const ovMotif = document.getElementById('v2ovMotif');
  let curr = 0;

  function fill(i) {
    curr = (i + S.length) % S.length;
    const s = S[curr];
    ovCard.style.setProperty('--ac', s.ac);
    ovCard.style.setProperty('--rgb', s.rgb);
    ovMotif.style.color = s.ac;
    ovMotif.innerHTML = (M[s.motif] || M.grid)();
    ovBody.innerHTML = `
      <span class="v2-ov-gh">${pad(curr + 1)}</span>
      <div class="v2-ov-head">
        <span class="v2-ov-ic"><svg viewBox="0 0 24 24" fill="none">${s.ic}</svg></span>
        <div>
          <div class="v2-ov-en">${s.en} · ${pad(curr + 1)} / ${pad(S.length)}</div>
          <h2 class="v2-ov-title">${s.ka}</h2>
        </div>
      </div>
      <p class="v2-ov-p1">${s.p1}</p>
      <div class="v2-ov-help"><span class="v2-ov-chk">${chk}</span><p>${s.p2}</p></div>
      <div class="v2-ov-tags">${s.tags.map(t => `<span class="v2-ov-tag">${t}</span>`).join('')}</div>
      <a class="v2-ov-cta" href="index.html#final">Talk to CyberX Expert ${arr}</a>`;
    ovBody.classList.remove('enter'); void ovBody.offsetWidth; ovBody.classList.add('enter');
    clearTimeout(fill._t); fill._t = setTimeout(() => ovBody.classList.remove('enter'), 900);
  }

  function open(i) {
    fill(i);
    ov.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    ov.classList.remove('show');
    document.body.style.overflow = '';
  }

  grid.querySelectorAll('.v2-tile').forEach(t => t.addEventListener('click', () => open(+t.dataset.i)));
  document.getElementById('v2ovClose').addEventListener('click', close);
  document.getElementById('v2ovPrev').addEventListener('click', () => fill(curr - 1));
  document.getElementById('v2ovNext').addEventListener('click', () => fill(curr + 1));
  ov.addEventListener('click', e => { if (e.target === ov) close(); });
  document.addEventListener('keydown', e => {
    if (!ov.classList.contains('show')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') fill(curr + 1);
    else if (e.key === 'ArrowLeft') fill(curr - 1);
  });

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

  /* smooth anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', ev => {
      const id = a.getAttribute('href').slice(1); if (!id) return;
      const el = document.getElementById(id); if (!el) return;
      ev.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 92, behavior: 'smooth' });
    });
  });
})();
