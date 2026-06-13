/* ============================================================
   CyberX — VENDORS page
   data · orbit ecosystem · directory render · interactions
   ============================================================ */
(function () {

  /* ---- accent palette (rotates across vendors) ---- */
  const PAL = [
    { ac: '#FF7A3C', rgb: '255,75,38' },   // brand
    { ac: '#5B9BFF', rgb: '45,127,249' },  // blue
    { ac: '#36D2E6', rgb: '54,210,230' },  // teal
    { ac: '#25E08A', rgb: '37,224,138' },  // green
    { ac: '#8B9BF5', rgb: '91,110,245' },  // indigo
  ];

  /* ---- vendor data (order follows the source content) ---- */
  const V = [
    {
      id: 'tenable', name: 'Tenable', cat: 'Exposure Management & Vulnerability Management',
      plate: { kind: 'text', bg: '#0A1A24', label: 'tenable', color: '#23C4C4', weight: 600 },
      lead: 'Tenable მსოფლიოში ერთ-ერთი ლიდერია Vulnerability Management და Exposure Management მიმართულებით. კომპანია ორგანიზაციებს ეხმარება სრული ხილვადობის მიღებაში IT, Cloud, OT და Hybrid გარემოებზე, რათა დროულად აღმოაჩინონ და მართონ უსაფრთხოების რისკები.',
      desc: 'Tenable-ის გადაწყვეტილებები ავტომატურად ავლენენ მოწყვლადობებს, არასწორ კონფიგურაციებსა და პოტენციურ საფრთხეებს, რაც უსაფრთხოების გუნდებს საშუალებას აძლევს პრიორიტეტულად იმოქმედონ ყველაზე კრიტიკულ რისკებზე.',
      solutions: ['Vulnerability Management', 'Exposure Management', 'Cloud Security', 'OT / IT Visibility'],
      industries: 'ფინანსური სექტორისთვის, სახელმწიფო ორგანიზაციებისთვის, კრიტიკული ინფრასტრუქტურისთვის, ჯანდაცვისა და მსხვილი საწარმოებისთვის.',
      industryTags: ['ფინანსური სექტორი', 'სახელმწიფო ორგანიზაციები', 'კრიტიკული ინფრასტრუქტურა', 'ჯანდაცვა', 'მსხვილი საწარმოები'],
    },
    {
      id: 'fortra', name: 'Fortra', cat: 'Data Protection & Cybersecurity Solutions',
      plate: { kind: 'img', src: 'fortra.png', bg: '#006a56' },
      lead: 'Fortra წარმოადგენს კიბერუსაფრთხოების ფართო ეკოსისტემას, რომელიც მოიცავს მონაცემთა დაცვას, Managed File Transfer-ს, Email Security-ს, Threat Intelligence-სა და უსაფრთხოების ავტომატიზაციას.',
      desc: 'Fortra ეხმარება ორგანიზაციებს დაიცვან კრიტიკული ინფორმაცია, გააუმჯობესონ შესაბამისობა (Compliance) და შეამცირონ მონაცემთა გაჟონვისა და კიბერინციდენტების რისკები.',
      solutions: ['Data Protection', 'Managed File Transfer', 'Email Security', 'Threat Intelligence'],
      industries: 'ფინანსური სექტორისთვის, ჯანდაცვისთვის, სახელმწიფო ორგანიზაციებისთვის და კომპანიებისთვის, რომლებიც დიდი მოცულობის სენსიტიურ მონაცემებს ამუშავებენ.',
      industryTags: ['ფინანსური სექტორი', 'ჯანდაცვა', 'სახელმწიფო ორგანიზაციები', 'სენსიტიური მონაცემების მქონე კომპანიები'],
    },
    {
      id: 'nozomi', name: 'Nozomi Networks', cat: 'OT & ICS Security',
      plate: { kind: 'img', src: 'nozomi.png', bg: '#ffffff' },
      lead: 'Nozomi Networks სპეციალიზდება სამრეწველო და კრიტიკული ინფრასტრუქტურის კიბერუსაფრთხოებაში. პლატფორმა უზრუნველყოფს OT, ICS და IoT გარემოების სრულ ხილვადობას, მონიტორინგსა და საფრთხეების აღმოჩენას.',
      desc: 'Nozomi განსაკუთრებით მნიშვნელოვანია ენერგეტიკის, წარმოების, წყლის, ტრანსპორტისა და სხვა კრიტიკული სექტორებისთვის, სადაც ოპერაციული ტექნოლოგიების უსაფრთხოება პირდაპირ უკავშირდება ბიზნესის უწყვეტობას.',
      solutions: ['OT Security', 'ICS Monitoring', 'IoT Visibility', 'Threat Detection'],
      industries: 'ენერგეტიკა, წარმოება, ნავთობი და გაზი, ტრანსპორტი, წყლის ინფრასტრუქტურა.',
      industryTags: ['ენერგეტიკა', 'წარმოება', 'ნავთობი და გაზი', 'ტრანსპორტი', 'წყლის ინფრასტრუქტურა'],
    },
    {
      id: 'opswat', name: 'OPSWAT', cat: 'Critical Infrastructure Protection',
      plate: { kind: 'img', src: 'opswat.png', bg: '#050f22' },
      lead: 'OPSWAT უზრუნველყოფს ორგანიზაციების დაცვას ფაილებზე დაფუძნებული საფრთხეების, მოწყობილობების რისკებისა და მონაცემთა გადაცემასთან დაკავშირებული კიბერსაფრთხეებისგან.',
      desc: 'კომპანიის ტექნოლოგიები ფართოდ გამოიყენება კრიტიკულ ინფრასტრუქტურაში, სადაც აუცილებელია მავნე ფაილების აღმოჩენა, მონაცემთა უსაფრთხო გაცვლა და ქსელში შემავალი მოწყობილობების კონტროლი.',
      solutions: ['File Threat Prevention', 'Secure Data Transfer', 'Device Control', 'CIP'],
      industries: 'სახელმწიფო სექტორი, ენერგეტიკა, ჯანდაცვა, წარმოება და კრიტიკული ინფრასტრუქტურა.',
      industryTags: ['სახელმწიფო სექტორი', 'ენერგეტიკა', 'ჯანდაცვა', 'წარმოება', 'კრიტიკული ინფრასტრუქტურა'],
    },
    {
      id: 'scw', name: 'Secure Code Warrior', cat: 'Application Security & Secure Development',
      plate: { kind: 'img', src: 'secure-code-warrior.png', bg: '#1d46b2' },
      lead: 'Secure Code Warrior ეხმარება ორგანიზაციებს შექმნან უსაფრთხო პროგრამული უზრუნველყოფა დეველოპერების კიბერუსაფრთხოების უნარების გაუმჯობესების გზით.',
      desc: 'პლატფორმა უზრუნველყოფს ინტერაქტიულ ტრენინგებს, პრაქტიკულ სავარჯიშოებსა და უსაფრთხო კოდის განვითარების საუკეთესო პრაქტიკების დანერგვას.',
      solutions: ['Secure Code Training', 'Developer Upskilling', 'Hands-on Labs', 'AppSec'],
      industries: 'საფინანსო ორგანიზაციები, Software Development კომპანიები, FinTech და ტექნოლოგიური ორგანიზაციები.',
      industryTags: ['საფინანსო ორგანიზაციები', 'Software Development', 'FinTech', 'ტექნოლოგიური ორგანიზაციები'],
    },
    {
      id: '42gears', name: '42Gears', cat: 'Unified Endpoint Management (UEM)',
      plate: { kind: 'text', bg: '#12203A', label: '42Gears', color: '#FFFFFF', accent: '#3CC9C4', weight: 700 },
      lead: '42Gears წარმოადგენს Endpoint და Mobile Device Management (MDM) გადაწყვეტილებების წამყვან მომწოდებელს. პლატფორმა ორგანიზაციებს საშუალებას აძლევს ცენტრალიზებულად მართონ მობილური მოწყობილობები, ტაბლეტები, Rugged Devices, კიოსკები და დისტანციური სამუშაო გარემოები.',
      desc: '42Gears ამარტივებს მოწყობილობების მართვას, ზრდის უსაფრთხოებას და უზრუნველყოფს კორპორატიული მონაცემების დაცვას.',
      solutions: ['UEM', 'Mobile Device Mgmt', 'Kiosk Lockdown', 'Rugged Devices'],
      industries: 'Retail, Logistics, Healthcare, Manufacturing და Field Service ორგანიზაციებისთვის.',
      industryTags: ['Retail', 'Logistics', 'Healthcare', 'Manufacturing', 'Field Service'],
    },
    {
      id: 'paloalto', name: 'Palo Alto', cat: 'AI-Powered Cybersecurity Platform',
      plate: { kind: 'img', src: 'palo-alto.png', bg: '#030507' },
      lead: 'Palo Alto Networks მსოფლიო ლიდერია თანამედროვე კიბერუსაფრთხოების სფეროში. კომპანიის გადაწყვეტილებები მოიცავს Network Security, Cloud Security, Security Operations, Zero Trust და AI-driven Threat Prevention ტექნოლოგიებს.',
      desc: 'Palo Alto Networks ეხმარება ორგანიზაციებს დაიცვან მთელი ციფრული ეკოსისტემა ერთიანი უსაფრთხოების პლატფორმის მეშვეობით.',
      solutions: ['Network Security', 'Cloud Security', 'Zero Trust', 'AI Threat Prevention'],
      industries: 'საშუალო და მსხვილი ბიზნესები, სახელმწიფო სექტორი, ფინანსური ორგანიზაციები, ენერგეტიკა და კრიტიკული ინფრასტრუქტურა.',
      industryTags: ['საშუალო და მსხვილი ბიზნესები', 'სახელმწიფო სექტორი', 'ფინანსური ორგანიზაციები', 'ენერგეტიკა', 'კრიტიკული ინფრასტრუქტურა'],
    },
    {
      id: 'sentinelone', name: 'SentinelOne', cat: 'Autonomous Endpoint Security',
      plate: { kind: 'img', src: 'sentinelone.png', bg: '#ffffff' },
      lead: 'SentinelOne წარმოადგენს AI-ზე დაფუძნებულ XDR და Endpoint Security პლატფორმას, რომელიც ავტომატურად აღმოაჩენს, აანალიზებს და ბლოკავს თანამედროვე კიბერსაფრთხეებს.',
      desc: 'პლატფორმა განსაკუთრებით ეფექტურია ransomware შეტევების, malware-ისა და advanced persistent threat (APT) აქტივობების წინააღმდეგ.',
      solutions: ['XDR', 'Endpoint Protection', 'AI Detection', 'Ransomware Defense'],
      industries: 'ორგანიზაციებისთვის, რომლებიც ეძებენ თანამედროვე Endpoint Protection და XDR შესაძლებლობებს.',
      industryTags: ['Endpoint Protection', 'XDR', 'Ransomware დაცვა'],
    },
    {
      id: 'cyberark', name: 'CyberArk', cat: 'Identity Security & Privileged Access Management',
      plate: { kind: 'img', src: 'cyberark.png', bg: '#ffffff' },
      lead: 'CyberArk არის Privileged Access Management (PAM) და Identity Security მიმართულების გლობალური ლიდერი.',
      desc: 'კომპანიის გადაწყვეტილებები იცავს ადმინისტრატორულ ანგარიშებს, კრიტიკულ წვდომებსა და ორგანიზაციის ყველაზე მნიშვნელოვან ციფრულ აქტივებს. დღეს, როდესაც თავდამსხმელთა უმეტესობა სწორედ მომხმარებლის იდენტობებისა და წვდომების გატაცებას ცდილობს, CyberArk ერთ-ერთ ყველაზე მნიშვნელოვან უსაფრთხოების ფენას წარმოადგენს.',
      solutions: ['PAM', 'Identity Security', 'Privileged Access', 'Secrets Management'],
      industries: 'ფინანსური სექტორი, სახელმწიფო უწყებები, მსხვილი საწარმოები და კრიტიკული ინფრასტრუქტურა.',
      industryTags: ['ფინანსური სექტორი', 'სახელმწიფო უწყებები', 'მსხვილი საწარმოები', 'კრიტიკული ინფრასტრუქტურა'],
    },
    {
      id: 'energy', name: 'Energy Log Server', cat: 'Log Management & Security Monitoring',
      plate: { kind: 'img', src: 'energy-logserver.png', bg: '#000000' },
      lead: 'EventLog Analyzer წარმოადგენს ლოგების მართვისა და უსაფრთხოების მონიტორინგის პლატფორმას, რომელიც ორგანიზაციებს საშუალებას აძლევს ცენტრალიზებულად შეაგროვონ, გააანალიზონ და შეინახონ სისტემური მოვლენები.',
      desc: 'გადაწყვეტილება ეხმარება უსაფრთხოების გუნდებს სწრაფად აღმოაჩინონ საეჭვო აქტივობები, შეასრულონ შესაბამისობის მოთხოვნები (Compliance) და გააუმჯობესონ ინციდენტებზე რეაგირება.',
      solutions: ['Log Management', 'SIEM', 'Compliance', 'Incident Response'],
      industries: 'SMB-დან Enterprise ორგანიზაციებამდე, რომლებიც საჭიროებენ ლოგების ცენტრალიზებულ მართვასა და უსაფრთხოების მონიტორინგს.',
      industryTags: ['SMB', 'Enterprise', 'ლოგების მართვა', 'უსაფრთხოების მონიტორინგი'],
    },
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pad = n => String(n).padStart(2, '0');

  /* plate inner markup (shared by orbit + directory) */
  function plateInner(p) {
    if (p.kind === 'img') return `<img src="${p.src}" alt="">`;
    if (p.label === '42Gears') {
      return `<span class="vp-word" style="color:${p.color};font-weight:${p.weight}"><b style="color:${p.accent}">42</b>Gears</span>`;
    }
    return `<span class="vp-word" style="color:${p.color};font-weight:${p.weight};letter-spacing:.02em">${p.label}</span>`;
  }
  function plateStyle(p) {
    return p.bg ? `background:${p.bg}` : '';
  }

  /* ============================================================
     1 · ORBIT ECOSYSTEM (hero)
     ============================================================ */
  (function orbit() {
    const stage = document.getElementById('orbitStage');
    if (!stage) return;
    const svg = document.getElementById('orbitLines');

    // ring layout: [radius fraction of S, vendor indices, angular speed]
    const rings = [
      { rf: 0.235, idx: [0, 7, 8],        spd: 0.00007 },
      { rf: 0.345, idx: [1, 2, 3, 9],     spd: -0.000048 },
      { rf: 0.435, idx: [4, 5, 6],        spd: 0.00004 },
    ];

    // build plates + connector lines
    const plates = [];
    rings.forEach((ring, ri) => {
      const n = ring.idx.length;
      ring.idx.forEach((vi, k) => {
        const v = V[vi];
        const el = document.createElement('a');
        el.className = 'vplate orbit' + (v.plate.kind === 'text' ? ' is-text' : '');
        el.href = '#' + v.id;
        el.setAttribute('aria-label', v.name);
        el.style.cssText = plateStyle(v.plate);
        el.innerHTML = plateInner(v.plate);
        el.dataset.vi = vi;
        stage.appendChild(el);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('class', 'orbit-line');
        svg.appendChild(line);

        plates.push({
          el, line, ring,
          base: (k / n) * Math.PI * 2 + ri * 0.7,
          ri,
        });
      });
    });

    let S = 0, cx = 0, cy = 0, paused = false, hoverVI = null;

    function measure() {
      S = stage.clientWidth;
      stage.style.height = S + 'px';
      cx = S / 2; cy = S / 2;
      svg.setAttribute('viewBox', `0 0 ${S} ${S}`);
    }

    function place(t) {
      plates.forEach(p => {
        const r = p.ring.rf * S;
        const a = p.base + (paused ? 0 : t) * p.ring.spd;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        p.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        p.x = x; p.y = y;
        p.line.setAttribute('x1', cx); p.line.setAttribute('y1', cy);
        p.line.setAttribute('x2', x);  p.line.setAttribute('y2', y);
      });
    }

    // hover: pause drift + spotlight
    stage.addEventListener('pointerover', e => {
      const pl = e.target.closest('.vplate');
      if (!pl) return;
      paused = true; hoverVI = pl.dataset.vi;
      stage.classList.add('spot');
      plates.forEach(p => p.el.classList.toggle('dim', p.el.dataset.vi !== hoverVI));
    });
    stage.addEventListener('pointerout', e => {
      if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.vplate')) return;
      paused = false; hoverVI = null;
      stage.classList.remove('spot');
      plates.forEach(p => p.el.classList.remove('dim'));
    });

    measure();
    place(0); // guaranteed static placement (covers reduced-motion + throttled rAF)
    let t0 = performance.now(), raf;
    function loop(t) {
      place((t - t0));
      raf = requestAnimationFrame(loop);
    }
    if (!reduce) { raf = requestAnimationFrame(loop); }

    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { measure(); place(0); }, 150);
    });
  })();

  /* ============================================================
     2 · DIRECTORY  (index rail + stacked vendor blocks)
     ============================================================ */
  const chk = '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const arr = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // index rail
  const idxList = document.getElementById('vdIdxList');
  if (idxList) {
    idxList.insertAdjacentHTML('beforeend', V.map((v, i) =>
      `<a class="vd-idx-row" data-i="${i}" href="#${v.id}"><span class="ix">${pad(i + 1)}</span><span class="nm">${v.name}</span></a>`
    ).join(''));
  }

  // mini constellation viz for each block
  const viz = (rgb) => `
    <div class="vd-viz">
      <div class="vd-scan"></div>
      <svg class="vd-radar" viewBox="0 0 200 200" fill="none">
        <g class="rot"><circle class="ring dash" cx="100" cy="100" r="88"/></g>
        <circle class="ring" cx="100" cy="100" r="60"/>
        <circle class="ring" cx="100" cy="100" r="32"/>
        <g class="sweep">
          <path d="M100 100 L100 16 A84 84 0 0 1 156 40 Z" fill="rgba(${rgb},.14)"/>
          <line x1="100" y1="100" x2="100" y2="16" stroke="var(--ac)" stroke-width="1.4" opacity=".7"/>
        </g>
        <circle class="core" cx="100" cy="100" r="4.5"/>
        <circle class="blip" cx="150" cy="66" r="3.4"/>
        <circle class="blip b2" cx="56" cy="128" r="3.4"/>
        <circle class="blip b3" cx="134" cy="150" r="3.4"/>
      </svg>
    </div>`;

  const blocks = document.getElementById('vdBlocks');
  if (blocks) {
    blocks.innerHTML = V.map((v, i) => {
      const p = PAL[i % PAL.length];
      const sols = v.solutions.map(s => `<li><span class="sc">${chk}</span>${s}</li>`).join('');
      return `
      <article class="vd-block" id="${v.id}" data-i="${i}" data-screen-label="Vendor ${pad(i + 1)} · ${v.name}" style="--ac:${p.ac};--rgb:${p.rgb}">
        <span class="vd-wm">${pad(i + 1)}</span>
        <div class="vd-grid">
          <div class="vd-content">
            <div class="vd-tagline vd-r"><span class="num">${pad(i + 1)} / ${pad(V.length)}</span> · ${v.cat}</div>
            <h2 class="vd-r" data-d="1">${v.name}</h2>
            <p class="vd-lead vd-r" data-d="1">${v.lead}</p>
            <p class="vd-desc vd-r" data-d="2">${v.desc}</p>

            <div class="vd-block-cols">
              <div class="vd-sol vd-r" data-d="2">
                <h4>Key Solutions</h4>
                <ul>${sols}</ul>
              </div>
              <div class="vd-ind vd-r" data-d="3">
                <h4>იდეალურია</h4>
                <div class="vd-tags vd-ind-tags">${(v.industryTags || []).map(s => `<span class="vd-tag">${s}</span>`).join('')}</div>
              </div>
            </div>

            <a class="vd-cta vd-r" data-d="3" href="index.html#final">Talk to CyberX Expert ${arr}</a>
          </div>

          <aside class="vd-side">
            <div class="vd-plate vd-r ${v.plate.kind === 'text' ? 'is-text' : ''}" style="${plateStyle(v.plate)}">
              ${plateInner(v.plate)}
            </div>
            <div class="vd-r" data-d="2">${viz(p.rgb)}</div>
          </aside>
        </div>
      </article>`;
    }).join('');
  }

  /* reveal + scroll-spy */
  const bEls = [...document.querySelectorAll('.vd-block')];
  const rows = [...document.querySelectorAll('.vd-idx-row')];
  const prog = document.getElementById('vdIdxProg');

  const revIO = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target); } });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  bEls.forEach(b => revIO.observe(b));
  setTimeout(() => bEls.forEach(b => b.classList.add('in')), 1500);

  /* safety fallback: ensure any standard .reveal element (e.g. the rationale
     cards) is shown even if the IntersectionObserver never fires */
  setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 1800);

  let active = -1;
  function setActive(i) {
    if (i === active) return;
    active = i;
    rows.forEach((r, k) => r.classList.toggle('active', k === i));
    if (rows.length && prog) prog.style.height = (((i + 1) / rows.length) * 100) + '%';
  }
  const spyIO = new IntersectionObserver(() => {
    let chosen = -1, min = Infinity;
    bEls.forEach((b, k) => {
      const r = b.getBoundingClientRect();
      const c = Math.abs((r.top + r.height / 2) - window.innerHeight / 2);
      if (r.bottom > 120 && r.top < window.innerHeight - 120 && c < min) { min = c; chosen = k; }
    });
    if (chosen >= 0) setActive(chosen);
  }, { threshold: [0, .25, .5, .75, 1], rootMargin: '-10% 0px -40% 0px' });
  bEls.forEach(b => spyIO.observe(b));

  /* watermark parallax */
  const wms = [...document.querySelectorAll('.vd-wm')];
  let ticking = false;
  function parallax() {
    ticking = false;
    const vh = window.innerHeight;
    wms.forEach(wm => {
      const b = wm.closest('.vd-block');
      const r = b.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      wm.style.transform = `translateY(${(-p * 34).toFixed(1)}px)`;
    });
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(parallax); } }, { passive: true });
  parallax();

  /* count-up (hero metrics) */
  const nums = [...document.querySelectorAll('[data-count]')];
  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    const suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suf; return; }
    const dur = 1400, t0 = performance.now();
    const tick = t => {
      const k = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suf;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const numIO = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { countUp(e.target); numIO.unobserve(e.target); } });
  }, { threshold: 0.5 });
  nums.forEach(n => numIO.observe(n));

  /* smooth anchor scroll with nav offset */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', ev => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      ev.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 92;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

})();
