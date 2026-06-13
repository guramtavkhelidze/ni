/* ============================================================
   CyberX — interactions + generated visuals
   ============================================================ */

/* ---------- nav scroll state ---------- */
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- dropdown menus ---------- */
const menuItems = document.querySelectorAll('.menu-item.has-dropdown');
let openTimer;
menuItems.forEach(item => {
  const id = item.dataset.menu;
  const dd = document.getElementById('dd-' + id);
  if (!dd) return;
  const open = () => {
    clearTimeout(openTimer);
    document.querySelectorAll('.dropdown.show').forEach(d => { if (d !== dd) d.classList.remove('show'); });
    document.querySelectorAll('.menu-item.open').forEach(m => { if (m !== item) m.classList.remove('open'); });
    dd.classList.add('show'); item.classList.add('open');
  };
  const close = () => {
    openTimer = setTimeout(() => { dd.classList.remove('show'); item.classList.remove('open'); }, 160);
  };
  item.addEventListener('mouseenter', open);
  item.addEventListener('mouseleave', close);
  dd.addEventListener('mouseenter', () => clearTimeout(openTimer));
  dd.addEventListener('mouseleave', close);
  const tgl = item.querySelector('button');
  if (tgl) tgl.addEventListener('click', () => {
    dd.classList.contains('show') ? (dd.classList.remove('show'), item.classList.remove('open')) : open();
  });
});
// close dropdowns when a link is clicked
document.querySelectorAll('.dd-link').forEach(l => l.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.show').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.menu-item.open').forEach(m => m.classList.remove('open'));
}));

/* ---------- mobile menu ---------- */
const mm = document.getElementById('mobile-menu');
document.getElementById('hamburger')?.addEventListener('click', () => mm.classList.add('open'));
document.getElementById('mm-close')?.addEventListener('click', () => mm.classList.remove('open'));
mm?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

/* ---------- scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============================================================
   HERO — animated network mesh
   ============================================================ */
(function heroNet() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const T = window.CYBERX_THEME || {};
  const LINE = T.netLineRGB || '255,90,50';
  const NODE = T.netNodeRGB || '255,140,90';
  const ctx = canvas.getContext('2d');
  let w, h, nodes = [], raf;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COUNT = window.innerWidth < 760 ? 36 : 78;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function init() {
    resize();
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.6 + .6
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const o = (1 - dist / 130) * .5;
          ctx.strokeStyle = `rgba(${LINE},${o})`;
          ctx.lineWidth = .7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // nodes
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${NODE},.9)`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }
  init();
  if (!reduce) draw(); else { /* static frame */ draw(); cancelAnimationFrame(raf); }
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 200); });
})();

/* ---------- hero orbit dots ---------- */
(function orbits() {
  const stage = document.querySelector('.shield-stage');
  if (!stage) return;
  const rings = [
    { sel: '.r1', r: 170, speed: 0.00045, off: 0 },
    { sel: '.r2', r: 125, speed: -0.0007, off: Math.PI },
    { sel: '.r3', r: 80, speed: 0.0011, off: Math.PI / 2 },
  ];
  const dots = rings.map(rg => {
    const d = document.createElement('div'); d.className = 'orbit-dot';
    stage.appendChild(d); return { ...rg, el: d };
  });
  function tick(t) {
    dots.forEach(d => {
      const a = t * d.speed + d.off;
      d.el.style.transform = `translate(${Math.cos(a) * d.r}px, ${Math.sin(a) * d.r}px)`;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ============================================================
   STATS — count-up, bar fill, donut draw-in
   ============================================================ */
(function statsAnim() {
  const sec = document.getElementById('stats');
  if (!sec) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function run() {
    sec.classList.add('in-view');

    // count-up numbers
    sec.querySelectorAll('.stat-num[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const pre = el.dataset.prefix || '';
      const suf = el.dataset.suffix || '';
      if (reduce) { el.textContent = pre + target + suf; return; }
      const dur = 1500, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + Math.round(target * e) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    // bar fills (donut handled by CSS .in-view class)
    sec.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(); io.disconnect(); } });
  }, { threshold: 0.3 });
  io.observe(sec);
})();

/* ============================================================
   BLOG thumbnails — generated abstract cyber art
   ============================================================ */
(function blogArt() {
  const palettes = (window.CYBERX_THEME && window.CYBERX_THEME.blogPalettes) || [
    ['#FF4B26', '#FF7A3C', '#7a1a0a'],
    ['#25E08A', '#16B26A', '#0a3a26'],
    ['#36D2E6', '#19A6BC', '#0a3640'],
  ];
  document.querySelectorAll('.blog-thumb canvas').forEach((cv, idx) => {
    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = cv.clientWidth, H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);
    const pal = palettes[idx % palettes.length];
    // bg
    const g = ctx.createLinearGradient(0, 0, W, H);
    const bg = (window.CYBERX_THEME && window.CYBERX_THEME.artBg) || ['#0c0e12', '#15171d'];
    g.addColorStop(0, bg[0]); g.addColorStop(1, bg[1]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // glow
    const rg = ctx.createRadialGradient(W * .8, H * .2, 0, W * .8, H * .2, W * .7);
    rg.addColorStop(0, pal[0] + '55'); rg.addColorStop(1, 'transparent');
    ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    // grid
    ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    // network nodes
    const pts = Array.from({ length: 14 }, () => ({ x: Math.random() * W, y: Math.random() * H }));
    ctx.strokeStyle = pal[0] + '66';
    pts.forEach((p, i) => {
      pts.slice(i + 1).forEach(q => {
        if (Math.hypot(p.x - q.x, p.y - q.y) < 80) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      });
    });
    pts.forEach(p => {
      ctx.fillStyle = pal[1];
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2); ctx.fill();
    });
  });
})();

/* ============================================================
   INSIGHTS — animated mesh + drifting color glows behind cards
   (echoes the blog-thumbnail node art; matches the section bg)
   ============================================================ */
(function insightsBg() {
  const sec = document.getElementById('insights');
  const canvas = document.getElementById('insights-canvas');
  if (!sec || !canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // brand · green · teal — same trio used by the blog thumbnails
  const COLORS = [[255, 75, 38], [37, 224, 138], [54, 210, 230]];
  let w, h, nodes = [], blobs = [], raf = 0, running = false;
  const COUNT = window.innerWidth < 760 ? 22 : 46;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = sec.clientWidth; h = sec.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function init() {
    resize();
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.6 + .6, c: COLORS[(Math.random() * COLORS.length) | 0]
    }));
    blobs = COLORS.map(c => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .12,
      r: Math.max(w, h) * .34, c
    }));
  }
  function step() {
    ctx.clearRect(0, 0, w, h);
    // slow color glows
    blobs.forEach(b => {
      b.x += b.vx; b.y += b.vy;
      if (b.x < 0 || b.x > w) b.vx *= -1;
      if (b.y < 0 || b.y > h) b.vy *= -1;
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},.07)`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    });
    // drift nodes
    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          ctx.strokeStyle = `rgba(${a.c[0]},${a.c[1]},${a.c[2]},${(1 - d / 140) * .22})`;
          ctx.lineWidth = .7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // nodes
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${n.c[0]},${n.c[1]},${n.c[2]},.7)`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function loop() { step(); raf = requestAnimationFrame(loop); }
  function start() { if (running || reduce) return; running = true; loop(); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  init(); step(); // paint a settled first frame
  const vio = new IntersectionObserver((es) => es.forEach(e => {
    e.isIntersecting ? start() : stop();
  }), { threshold: 0.02 });
  vio.observe(sec);

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { const was = running; stop(); init(); step(); if (was) start(); }, 200);
  });
})();

/* ---------- BLOG — mobile carousel pagination dots ---------- */
(function blogCarousel() {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;
  const cards = [...grid.children];
  if (cards.length < 2) return;

  const dots = document.createElement('div');
  dots.className = 'blog-dots';
  cards.forEach((c, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'სლაიდი ' + (i + 1));
    b.addEventListener('click', () => {
      grid.scrollTo({ left: c.offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
    });
    dots.appendChild(b);
  });
  grid.after(dots);
  const dotEls = [...dots.children];

  let ticking = false;
  function update() {
    ticking = false;
    const base = cards[0].offsetLeft;
    const center = grid.scrollLeft + grid.clientWidth / 2;
    let best = 0, bd = Infinity;
    cards.forEach((c, i) => {
      const cc = c.offsetLeft - base + c.clientWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bd) { bd = d; best = i; }
    });
    dotEls.forEach((d, i) => d.classList.toggle('on', i === best));
  }
  grid.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
