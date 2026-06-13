/* ============================================================
   CyberX — INDUSTRIES page
   data · interactive sector explorer · CSS-animated motifs
   ============================================================ */
(function () {

  /* ---- sector data (KA text is verbatim from source) ---- */
  const S = [
    {
      id: 'healthcare', ka: 'ჯანდაცვა', en: 'Healthcare', motif: 'pulse',
      ac: '#36D2E6', rgb: '54,210,230',
      ic: '<rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 8.5v7M8.5 12h7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>',
      p1: 'ჯანდაცვის ორგანიზაციები ყოველდღიურად ამუშავებენ პაციენტების სენსიტიურ მონაცემებს, სამედიცინო ჩანაწერებსა და კრიტიკულ კლინიკურ სისტემებს. მონაცემთა დაკარგვამ ან სისტემების გათიშვამ შეიძლება პირდაპირ იმოქმედოს სამედიცინო მომსახურების ხარისხსა და ხელმისაწვდომობაზე.',
      p2: 'CyberX-ის გადაწყვეტილებები ეხმარება კლინიკებს, საავადმყოფოებსა და სამედიცინო ქსელებს დაიცვან პაციენტების მონაცემები, თავიდან აიცილონ ransomware შეტევები, უზრუნველყონ სამედიცინო სისტემების უწყვეტი მუშაობა და შეასრულონ მონაცემთა დაცვის მოთხოვნები.',
      tags: ['პაციენტის მონაცემები', 'Ransomware დაცვა', 'სისტემების უწყვეტობა', 'Compliance'],
    },
    {
      id: 'smb', ka: 'SMB ბიზნეს გადაწყვეტილებები', en: 'Small & Medium Business', motif: 'bars',
      ac: '#FF7A3C', rgb: '255,122,60',
      ic: '<path d="M4 20h16M6 20V9l6-4 6 4v11M9.5 20v-5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
      p1: 'მცირე და საშუალო ბიზნესები ხშირად ფიქრობენ, რომ კიბერდანაშაულის მთავარი სამიზნე მსხვილი კომპანიებია, თუმცა პრაქტიკაში სწორედ SMB სექტორი ზარალდება ყველაზე ხშირად შეზღუდული რესურსებისა და სუსტი დაცვის გამო.',
      p2: 'CyberX ეხმარება SMB კომპანიებს დაიცვან თანამშრომლების მოწყობილობები, ელფოსტა, ბიზნეს მონაცემები და Cloud სერვისები, ხელმისაწვდომი და ეფექტური უსაფრთხოების გადაწყვეტილებების გამოყენებით.',
      tags: ['Endpoint დაცვა', 'Email Security', 'Cloud', 'ბიზნეს მონაცემები'],
    },
    {
      id: 'finance', ka: 'ბანკები და ფინანსური სექტორი', en: 'Banking & Finance', motif: 'candles',
      ac: '#25E08A', rgb: '37,224,138',
      ic: '<rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M3 10h18M7 14.2h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      p1: 'ფინანსური ორგანიზაციები ყოველდღიურად ამუშავებენ მილიონობით ტრანზაქციას და ინახავენ მომხმარებელთა კრიტიკულ ფინანსურ ინფორმაციას. მათთვის ნებისმიერი კიბერინციდენტი ნიშნავს როგორც ფინანსურ, ასევე რეპუტაციულ ზიანს.',
      p2: 'CyberX უზრუნველყოფს ბანკების, მიკროსაფინანსო ორგანიზაციებისა და ფინანსური ინსტიტუტების დაცვას phishing-ის, ანგარიშების გატაცების, მონაცემთა გაჟონვისა და მიზანმიმართული კიბერშეტევებისგან.',
      tags: ['Anti-Phishing', 'ანგარიშების დაცვა', 'Fraud Prevention', 'მონაცემთა გაჟონვა'],
    },
    {
      id: 'government', ka: 'სახელმწიფო სექტორი', en: 'Government', motif: 'grid',
      ac: '#2D7FF9', rgb: '45,127,249',
      ic: '<path d="M4 9 12 4l8 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>',
      p1: 'სახელმწიფო უწყებები ფლობენ ქვეყნისთვის მნიშვნელოვან მონაცემებსა და კრიტიკულ ელექტრონულ სერვისებს, რის გამოც ისინი ხშირად წარმოადგენენ კიბერშეტევების ძირითად სამიზნეს.',
      p2: 'CyberX ეხმარება საჯარო სექტორს დაიცვას მოქალაქეთა მონაცემები, სახელმწიფო სერვისები და კრიტიკული ინფრასტრუქტურა თანამედროვე უსაფრთხოების ტექნოლოგიების გამოყენებით.',
      tags: ['მოქალაქეთა მონაცემები', 'e-Services', 'კრიტიკული ინფრასტრუქტურა'],
    },
    {
      id: 'telecom', ka: 'ტელეკომი', en: 'Telecom', motif: 'waves',
      ac: '#5B6EF5', rgb: '91,110,245',
      ic: '<path d="M12 20v-6M8.5 13a5 5 0 0 1 7 0M5.5 10a9 9 0 0 1 13 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="18.2" r="1.5" fill="currentColor"/>',
      p1: 'ტელეკომუნიკაციური კომპანიები მართავენ ფართომასშტაბიან ქსელებს, კომუნიკაციის სისტემებსა და მილიონობით მომხმარებლის მონაცემებს. ნებისმიერი შეფერხება პირდაპირ აისახება მომსახურების ხარისხსა და მომხმარებელთა გამოცდილებაზე.',
      p2: 'CyberX-ის გადაწყვეტილებები უზრუნველყოფს ქსელური ინფრასტრუქტურის დაცვას, ქსელში შეღწევის მცდელობების აღმოჩენასა და მომსახურების უწყვეტობას.',
      tags: ['ქსელის დაცვა', 'Intrusion Detection', 'მომსახურების უწყვეტობა'],
    },
    {
      id: 'energy', ka: 'ენერგეტიკა', en: 'Energy', motif: 'flow',
      ac: '#F5A524', rgb: '245,165,36',
      ic: '<path d="M13 3 5 13h5l-1 8 8-11h-5l1-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
      p1: 'ენერგეტიკული კომპანიები მართავენ კრიტიკულ ინფრასტრუქტურას, რომლის შეფერხებამ შეიძლება გავლენა მოახდინოს როგორც ბიზნესზე, ისე საზოგადოების ყოველდღიურ ცხოვრებაზე.',
      p2: 'CyberX იცავს ენერგეტიკული სექტორის IT და OT/ICS სისტემებს კიბერშეტევებისგან და ხელს უწყობს ენერგომომარაგების უწყვეტობასა და ოპერაციულ უსაფრთხოებას.',
      tags: ['OT / ICS დაცვა', 'კრიტიკული ინფრასტრუქტურა', 'ოპერაციული უსაფრთხოება'],
    },
    {
      id: 'manufacturing', ka: 'წარმოება', en: 'Manufacturing', motif: 'rotors',
      ac: '#8B9BF5', rgb: '139,155,245',
      ic: '<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.3 5.3 7.1 7.1M16.9 16.9l1.8 1.8M18.7 5.3 16.9 7.1M7.1 16.9l-1.8 1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
      p1: 'წარმოების სექტორი სულ უფრო მეტად იყენებს ავტომატიზებულ სისტემებსა და ინდუსტრიულ ქსელებს. კიბერშეტევამ შეიძლება გამოიწვიოს საწარმოო ხაზების გაჩერება და მნიშვნელოვანი ფინანსური დანაკარგები.',
      p2: 'CyberX ეხმარება საწარმოებს დაიცვან OT/ICS ინფრასტრუქტურა, საწარმოო პროცესები და ბიზნესის უწყვეტობა.',
      tags: ['OT / ICS', 'საწარმოო პროცესები', 'ბიზნეს უწყვეტობა'],
    },
    {
      id: 'retail', ka: 'Retail', en: 'Retail & E-commerce', motif: 'bars',
      ac: '#F0444C', rgb: '240,68,76',
      ic: '<path d="M6 8h12l1.2 12H4.8L6 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" stroke-width="1.6"/>',
      p1: 'Retail სექტორი ყოველდღიურად ამუშავებს მომხმარებელთა პერსონალურ მონაცემებს, ონლაინ გადახდებსა და გაყიდვების სისტემებს.',
      p2: 'CyberX-ის უსაფრთხოების გადაწყვეტილებები იცავს მომხმარებელთა მონაცემებს, გადახდის სისტემებს, ელექტრონულ კომერციასა და სავაჭრო ინფრასტრუქტურას კიბერშეტევებისა და თაღლითობისგან.',
      tags: ['გადახდის სისტემები', 'მომხმარებლის მონაცემები', 'E-commerce', 'Anti-Fraud'],
    },
    {
      id: 'education', ka: 'განათლება', en: 'Education', motif: 'grid',
      ac: '#19A6BC', rgb: '25,166,188',
      ic: '<path d="M12 5 3 9l9 4 9-4-9-4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 11.5V16c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4.5" stroke="currentColor" stroke-width="1.6"/>',
      p1: 'საგანმანათლებლო დაწესებულებები ინახავენ სტუდენტების, აკადემიური პერსონალისა და კვლევითი პროექტების მონაცემებს. უნივერსიტეტები და სკოლები ხშირად წარმოადგენენ phishing და ransomware შეტევების სამიზნეს.',
      p2: 'CyberX უზრუნველყოფს სასწავლო პლატფორმების, კვლევითი მონაცემებისა და საგანმანათლებლო ინფრასტრუქტურის დაცვას.',
      tags: ['კვლევითი მონაცემები', 'Anti-Phishing', 'სასწავლო პლატფორმები'],
    },
    {
      id: 'transport', ka: 'ტრანსპორტი და ლოგისტიკა', en: 'Transport & Logistics', motif: 'flow',
      ac: '#2DBE9F', rgb: '45,190,159',
      ic: '<path d="M3 17V7h11v10M14 10h3.5L21 13v4h-7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7" cy="17.6" r="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="17.6" r="1.8" stroke="currentColor" stroke-width="1.6"/>',
      p1: 'ტრანსპორტისა და ლოგისტიკის სექტორი დამოკიდებულია რეალურ დროში მონაცემებზე, ავტომატიზებულ სისტემებსა და ციფრულ ოპერაციებზე.',
      p2: 'CyberX ეხმარება ორგანიზაციებს დაიცვან სატრანსპორტო ქსელები, ლოგისტიკური პლატფორმები და ოპერაციული პროცესები კიბერრისკებისგან.',
      tags: ['სატრანსპორტო ქსელები', 'ლოგისტიკა', 'რეალურ დროში მონაცემები'],
    },
    {
      id: 'gaming', ka: 'Gaming & Casinos', en: 'Gaming & Casinos', motif: 'waves',
      ac: '#A06BFF', rgb: '160,107,255',
      ic: '<rect x="3" y="8" width="18" height="9" rx="4.5" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 11.3v3.4M5.8 13h3.4M15 12h.02M17.4 14h.02" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
      p1: 'Gaming და Casino ინდუსტრიები მუშაობენ მაღალი მოცულობის ფინანსურ ტრანზაქციებთან, მომხმარებელთა ანგარიშებთან და ონლაინ პლატფორმებთან.',
      p2: 'CyberX-ის გადაწყვეტილებები იცავს მოთამაშეთა მონაცემებს, გადახდის სისტემებს, ონლაინ პლატფორმებსა და ბიზნეს ოპერაციებს თაღლითობის, ანგარიშების გატაცებისა და კიბერშეტევებისგან.',
      tags: ['მოთამაშის მონაცემები', 'გადახდები', 'ონლაინ პლატფორმები', 'Anti-Fraud'],
    },
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = n => String(n).padStart(2, '0');

  /* ============================================================
     CSS-animated motif generators (use currentColor → stage --ac)
     ============================================================ */
  const motifs = {
    pulse() {
      // scrolling ECG line (two tiled copies)
      const seg = 'M0 100 H70 L82 100 92 64 102 138 112 100 H150 L160 100 168 82 176 118 184 100 H260';
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">
        <g class="mf-ecg">
          <path d="${seg}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="${seg}" transform="translate(260,0)" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>`;
    },
    bars() {
      const n = 16, w = 520 / n;
      let r = '';
      for (let i = 0; i < n; i++) {
        const h = 40 + (i * 37 % 110);
        r += `<rect class="mf-bar" x="${(i * w + 4).toFixed(1)}" y="${(200 - h).toFixed(1)}" width="${(w - 8).toFixed(1)}" height="${h}" rx="3" fill="currentColor" style="animation-delay:${(i * 0.13).toFixed(2)}s"/>`;
      }
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">${r}</svg>`;
    },
    candles() {
      const n = 11, w = 520 / n;
      let r = '';
      for (let i = 0; i < n; i++) {
        const bh = 26 + (i * 53 % 70), cy = 40 + (i * 41 % 90), x = i * w + w / 2;
        r += `<line class="mf-candle" x1="${x}" y1="${cy - bh / 2 - 16}" x2="${x}" y2="${cy + bh / 2 + 16}" stroke="currentColor" stroke-width="1.4" style="animation-delay:${(i * 0.18).toFixed(2)}s"/>`;
        r += `<rect class="mf-candle" x="${x - w / 4}" y="${cy - bh / 2}" width="${w / 2}" height="${bh}" rx="2" fill="currentColor" style="animation-delay:${(i * 0.18).toFixed(2)}s"/>`;
      }
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">${r}</svg>`;
    },
    waves() {
      let r = '';
      for (let i = 0; i < 5; i++) {
        r += `<circle class="mf-ripple" cx="260" cy="100" r="30" fill="none" stroke="currentColor" stroke-width="1.6" style="animation-delay:${(i * 0.9).toFixed(2)}s"/>`;
      }
      r += '<circle cx="260" cy="100" r="6" fill="currentColor"/>';
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">${r}</svg>`;
    },
    grid() {
      const cols = 13, rows = 5, gx = 520 / cols, gy = 200 / rows;
      let r = '';
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const d = ((x + y) % 6) * 0.32;
        r += `<circle class="mf-dot" cx="${(x * gx + gx / 2).toFixed(1)}" cy="${(y * gy + gy / 2).toFixed(1)}" r="3.4" fill="currentColor" style="animation-delay:${d.toFixed(2)}s"/>`;
      }
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">${r}</svg>`;
    },
    flow() {
      let r = '';
      for (let i = 0; i < 5; i++) {
        const y = 24 + i * 38;
        r += `<line class="mf-flow" x1="-20" y1="${y}" x2="540" y2="${y}" stroke="currentColor" stroke-width="2" stroke-dasharray="6 16" style="animation-delay:${(i * 0.4).toFixed(2)}s"/>`;
      }
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">${r}</svg>`;
    },
    rotors() {
      return `<svg class="mf" viewBox="0 0 520 200" preserveAspectRatio="xMidYMid slice">
        <g transform="translate(260,100)">
          <circle class="mf-rot a" r="90" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 9"/>
          <circle class="mf-rot b" r="62" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="10 14"/>
          <circle class="mf-rot a" r="34" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 7"/>
          <circle r="5" fill="currentColor"/>
        </g>
      </svg>`;
    },
  };

  /* ============================================================
     RENDER
     ============================================================ */
  const arr = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // tab rail
  const rail = document.getElementById('ixRail');
  rail.innerHTML = S.map((s, i) =>
    `<button class="ix-tab" data-i="${i}" type="button" style="--ac:${s.ac};--rgb:${s.rgb}">
       <span class="ix-num">${pad(i + 1)}</span>
       <span class="ix-ic"><svg viewBox="0 0 24 24" fill="none">${s.ic}</svg></span>
       <span class="ix-nm">${s.ka}</span>
       <span class="ix-bar"></span>
     </button>`).join('');
  const tabs = [...rail.querySelectorAll('.ix-tab')];

  const stage = document.getElementById('ixStage');
  const motifLayer = document.getElementById('ixMotif');
  let enterT = null;

  function render(i) {
    const s = S[i];
    stage.style.setProperty('--ac', s.ac);
    stage.style.setProperty('--rgb', s.rgb);
    motifLayer.style.color = s.ac;
    motifLayer.innerHTML = (motifs[s.motif] || motifs.grid)();

    const tagsHtml = s.tags.map(t => `<span class="ix-tag">${t}</span>`).join('');
    stage.querySelector('.ix-detail').innerHTML = `
      <span class="ix-ghost">${pad(i + 1)}</span>
      <div class="ix-head">
        <span class="ix-bigic"><svg viewBox="0 0 24 24" fill="none">${s.ic}</svg></span>
        <div>
          <div class="ix-en">${s.en} · სექტორი ${pad(i + 1)} / ${pad(S.length)}</div>
          <h2 class="ix-title">${s.ka}</h2>
        </div>
      </div>
      <p class="ix-p1">${s.p1}</p>
      <div class="ix-help">
        <span class="ix-chk"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <p>${s.p2}</p>
      </div>
      <div class="ix-tags">${tagsHtml}</div>
      <a class="ix-cta" href="index.html#final">Talk to CyberX Expert ${arr}</a>`;

    // retrigger enter animation, then drop it so the steady state is the
    // fully-visible base (robust even if CSS animations are throttled/paused)
    const d = stage.querySelector('.ix-detail');
    d.classList.remove('enter'); void d.offsetWidth; d.classList.add('enter');
    clearTimeout(enterT); enterT = setTimeout(() => d.classList.remove('enter'), 900);

    tabs.forEach((t, k) => t.classList.toggle('active', k === i));
    // progress bar reset → fill
    const bar = tabs[i].querySelector('.ix-bar');
    tabs.forEach(t => { const b = t.querySelector('.ix-bar'); b.style.transition = 'none'; b.style.transform = 'scaleX(0)'; });
    if (!reduce && playing) {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        bar.style.transition = `transform ${AUTOPLAY}ms linear`;
        bar.style.transform = 'scaleX(1)';
      }));
      // CSS-rAF fallback
      setTimeout(() => { bar.style.transition = `transform ${AUTOPLAY}ms linear`; bar.style.transform = 'scaleX(1)'; }, 40);
    }
  }

  /* ---- autoplay + interaction (single timer, never stacks) ---- */
  const AUTOPLAY = 7000;
  let cur = 0, playing = !reduce, timer = null;

  function clearTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function schedule() { clearTimer(); if (reduce || !playing) return; timer = setInterval(() => go(cur + 1), AUTOPLAY); }

  function go(i, user) {
    cur = (i + S.length) % S.length;
    render(cur);
    if (user) { playing = true; schedule(); }
  }

  tabs.forEach(t => t.addEventListener('click', () => go(+t.dataset.i, true)));

  // pause while pointer is over the console
  const consoleEl = document.getElementById('ixConsole');
  consoleEl.addEventListener('pointerenter', () => { clearTimer(); freezeBars(); });
  consoleEl.addEventListener('pointerleave', () => { if (!reduce && playing) schedule(); });
  function freezeBars() {
    const b = tabs[cur].querySelector('.ix-bar');
    if (!b) return;
    const cs = getComputedStyle(b).transform;
    b.style.transition = 'none'; b.style.transform = cs;
  }

  // keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, true); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, true); }
  });

  // start when the explorer scrolls into view; pause when out
  const sec = document.getElementById('ixSection');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { playing = !reduce; schedule(); }
    else { playing = false; clearTimer(); }
  }), { threshold: 0.2 });
  io.observe(sec);

  // immediate first paint + autoplay kick (covers throttled IO)
  render(0);
  setTimeout(() => { playing = !reduce; schedule(); }, 500);

  /* ---- generic reveal + count-up (hero) ---- */
  const revIO = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revIO.observe(el));
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 1600);

  const nums = [...document.querySelectorAll('[data-count]')];
  function countUp(el) {
    const target = parseInt(el.dataset.count, 10), suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suf; return; }
    const dur = 1400, t0 = performance.now();
    const tick = t => { const k = Math.min((t - t0) / dur, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
    setTimeout(() => { el.textContent = target + suf; }, dur + 200); // fallback
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
