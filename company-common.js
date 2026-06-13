/* ============================================================
   CyberX — Company variants: shared behaviors
   (reveals + safety fallback, future marquee, section-rail spy)
   ============================================================ */
(function () {
  /* ---------- reveals (self-contained; robust to throttled iframes) ---------- */
  const items = document.querySelectorAll('.reveal, .r-stagger');
  if (items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(el => io.observe(el));
    setTimeout(() => items.forEach(el => el.classList.add('in')), 1400);
  }

  /* ---------- future directions marquee ---------- */
  const wrap = document.getElementById('future-marquee');
  if (wrap) {
    const list = [
      'AI-Driven Security & Threat Intelligence', 'Zero Trust Architecture', 'Cloud-Native Security',
      'Autonomous Threat Detection & Response', 'Identity-Centric Security', 'OT/ICS Infrastructure Protection',
      'Quantum-Safe Encryption', 'AI Attack Detection & Prevention', 'Deepfake & Digital Fraud Protection',
      'Cyber Resilience & Business Continuity', 'Extended Detection and Response (XDR)',
      'Secure Access Service Edge (SASE)', 'Cybersecurity Automation & Orchestration'
    ];
    const split = Math.ceil(list.length / 2);
    const rows = { a: list.slice(0, split), b: list.slice(split) };
    const chip = (t, alt) => '<span class="fchip' + (alt ? ' alt' : '') + '"><span class="fdot"></span>' + t + '</span>';
    Object.entries(rows).forEach(([key, arr]) => {
      const row = wrap.querySelector('[data-row="' + key + '"]');
      if (!row) return;
      const html = arr.map(t => chip(t, key === 'b')).join('');
      row.innerHTML = html + html;
    });
  }

  /* ---------- section-rail scroll-spy ---------- */
  const secs = [...document.querySelectorAll('.co-sec')];
  const dots = [...document.querySelectorAll('.sec-rail a')];
  if (secs.length && dots.length) {
    const map = { about: 0, mission: 1, relevance: 2, future: 3 };
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = map[e.target.id];
          dots.forEach((d, k) => d.classList.toggle('on', k === i));
        }
      });
    }, { rootMargin: '-46% 0px -46% 0px' });
    secs.forEach(s => io2.observe(s));
  }
})();
