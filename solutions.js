/* ============================================================
   CyberX — Solutions Console
   Builds the interactive explorer + themed canvas motifs.
   (app.js handles nav / dropdowns / mobile menu / hero mesh / reveal)
   ============================================================ */
(function () {
  'use strict';

  /* ---- icon library (matches the nav dropdown set) ---- */
  const IC = {
    xdr:   '<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    net:   '<circle cx="5" cy="6" r="2" stroke="currentColor" stroke-width="1.6"/><circle cx="19" cy="6" r="2" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="18" r="2" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 7.5 11 16M17.5 7.5 13 16M7 6h10" stroke="currentColor" stroke-width="1.6"/>',
    cloud: '<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17 18H7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    dlp:   '<rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.6"/>',
    vuln:  '<path d="M12 3v3M12 18v3M5 7l2 1M17 16l2 1M5 17l2-1M17 8l2-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6"/>',
    siem:  '<rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 21h6M12 17v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    mfa:   '<path d="M8 11a4 4 0 0 1 8 0M6 14c0-1 .3-2 .6-2.7M18 14c0-1-.3-2-.6-2.7M9 20c-1-1.5-1.5-3.5-1.5-6M15 20c1-1.5 1.5-3.5 1.5-6M12 13v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    ot:    '<rect x="4" y="9" width="16" height="11" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M8 9V6h8v3M9 14h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    pen:   '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    intel: '<path d="M12 21a9 9 0 1 0-9-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 12 4 8M12 12v9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    train: '<path d="M12 4 3 8l9 4 9-4-9-4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7 11v4c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5v-4" stroke="currentColor" stroke-width="1.6"/>',
    mdm:   '<rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M11 18h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
  };

  /* accent presets: [hex, "r,g,b"] */
  const AC = {
    orange: ['#FF7A3C', '255,122,60'],
    blue:   ['#2D7FF9', '45,127,249'],
    teal:   ['#36D2E6', '54,210,230'],
    indigo: ['#5B6EF5', '91,110,245'],
    green:  ['#25E08A', '37,224,138'],
    red:    ['#F0444C', '240,68,76']
  };

  /* ---- the 13 solutions ---- */
  const SOL = [
    { ic:'xdr', cat:'Endpoint', ac:'orange', motif:'pulse',
      name:'XDR / EDR Endpoint Protection',
      lead:'თანამედროვე კიბერშეტევების დიდი ნაწილი იწყება მომხმარებლის კომპიუტერიდან, ლეპტოპიდან ან სერვერიდან.',
      text:'AI-ზე დაფუძნებული XDR/EDR პლატფორმები რეალურ დროში ავლენენ საეჭვო აქტივობებს, ransomware შეტევებსა და მავნე პროგრამებს — უზრუნველყოფენ მოწყობილობების მუდმივ მონიტორინგს, საფრთხეების ადრეულ აღმოჩენასა და ავტომატურ რეაგირებას.',
      hl:'CyberX ეხმარება ორგანიზაციებს დაიცვან სამუშაო გარემო ransomware-ის, malware-ის, phishing-ისა და სხვა თანამედროვე საფრთხეებისგან.',
      tags:['Endpoint','AI Detection','Auto-Response'] },

    { ic:'net', cat:'Network', ac:'blue', motif:'mesh',
      name:'Network Security',
      lead:'ორგანიზაციის ქსელი წარმოადგენს ბიზნესის ციფრულ ხერხემალს.',
      text:'თანამედროვე Firewall, NDR და ქსელური მონიტორინგის სისტემები უზრუნველყოფს ქსელის ხილვადობას, საფრთხეების დროულ აღმოჩენასა და არაავტორიზებული წვდომის პრევენციას.',
      hl:'CyberX ეხმარება კომპანიებს დაიცვან შიდა და გარე ქსელები, შეამცირონ კიბერრისკები და უზრუნველყონ უსაფრთხო კომუნიკაცია.',
      tags:['Firewall','NDR','Monitoring'] },

    { ic:'cloud', cat:'Cloud', ac:'teal', motif:'scan',
      name:'Cloud Security Solutions',
      lead:'ბიზნესების მზარდი ნაწილი იყენებს Cloud ინფრასტრუქტურასა და SaaS პლატფორმებს.',
      text:'Cloud უსაფრთხოების სისტემები იცავს ღრუბლოვან ინფრასტრუქტურას, მონაცემებსა და აპლიკაციებს სპეციალიზებული მიდგომებით, ამცირებს მონაცემთა დაკარგვისა და არაავტორიზებული წვდომის რისკებს.',
      hl:'CyberX ეხმარება ორგანიზაციებს უსაფრთხოდ განახორციელონ ციფრული ტრანსფორმაცია და დაიცვან Cloud გარემოები.',
      tags:['Cloud','SaaS','Data Protection'] },

    { ic:'dlp', cat:'Data', ac:'indigo', motif:'bars',
      name:'Data Loss Prevention (DLP)',
      lead:'მონაცემები ნებისმიერი ორგანიზაციის ერთ-ერთი ყველაზე ღირებული აქტივია.',
      text:'DLP ტექნოლოგიები ავტომატურად აღმოაჩენენ მონაცემთა გაჟონვის, არასწორი გაზიარებისა და უნებართვო გადაცემის მცდელობებს, რაც ამცირებს ფინანსურ და რეპუტაციულ რისკებს.',
      hl:'CyberX-ის გადაწყვეტილებები ამცირებს მონაცემთა გაჟონვის, უნებლიე გაზიარებისა და შიდა რისკების ალბათობას.',
      tags:['Data Control','Leak Prevention','Compliance'] },

    { ic:'vuln', cat:'Risk', ac:'green', motif:'radar',
      name:'Vulnerability Management',
      lead:'კიბერდამნაშავეები ხშირად იყენებენ სისტემებში არსებულ დაუცველობებს.',
      text:'პლატფორმები უზრუნველყოფს IT ინფრასტრუქტურის სისუსტეების ავტომატურ აღმოჩენას, ანალიზსა და პრიორიტეტიზაციას — პროაქტიულ მიდგომას უსაფრთხოების ხარვეზების დროულ აღმოსაფხვრელად.',
      hl:'CyberX უზრუნველყოფს ინფრასტრუქტურის მუდმივ შეფასებას და უსაფრთხოების რისკების პროაქტიულ მართვას.',
      tags:['Scanning','Prioritization','Proactive'] },

    { ic:'siem', cat:'Operations', ac:'orange', motif:'bars',
      name:'SIEM / SOC Monitoring',
      lead:'თანამედროვე ორგანიზაციებისთვის მნიშვნელოვანია იცოდნენ, რა ხდება მათ IT გარემოში რეალურ დროში.',
      text:'SIEM და SOC გადაწყვეტილებები აგროვებენ და აანალიზებენ უსაფრთხოების მოვლენებს მთელი ინფრასტრუქტურიდან — უზრუნველყოფენ ცენტრალიზებულ მონიტორინგს, ლოგების ანალიზსა და ინციდენტებზე სწრაფ რეაგირებას.',
      hl:'CyberX ეხმარება ორგანიზაციებს სწრაფად აღმოაჩინონ საეჭვო აქტივობები, შეამცირონ რეაგირების დრო და გაზარდონ ხილვადობა.',
      tags:['SIEM','24/7 SOC','Log Analysis'] },

    { ic:'mfa', cat:'Identity', ac:'blue', motif:'pulse',
      name:'MFA & Identity Security',
      lead:'მომხმარებლის იდენტობა დღეს კიბერუსაფრთხოების ერთ-ერთი მთავარი სამიზნეა.',
      text:'მრავალფაქტორიანი ავთენტიფიკაცია (MFA) და Identity Security გადაწყვეტილებები იცავს ანგარიშებსა და კრიტიკულ სისტემებზე წვდომას, მნიშვნელოვნად ამცირებს ანგარიშების გატაცების რისკს.',
      hl:'CyberX ეხმარება ორგანიზაციებს დაიცვან მომხმარებლები, ადმინისტრატორები და კრიტიკული სისტემები არაავტორიზებული წვდომისგან.',
      tags:['MFA','Identity','Access Control'] },

    { ic:'ot', cat:'Industrial', ac:'teal', motif:'scan',
      name:'OT / ICS Infrastructure Protection',
      lead:'სამრეწველო და კრიტიკული ინფრასტრუქტურა სულ უფრო ხშირად ხდება კიბერშეტევების სამიზნე.',
      text:'OT/ICS უსაფრთხოების გადაწყვეტილებები შექმნილია საწარმოო პროცესების, ინდუსტრიული ქსელებისა და ოპერაციული ტექნოლოგიების დასაცავად სპეციალიზებული მიდგომებით.',
      hl:'CyberX უზრუნველყოფს საწარმოო პროცესების, ინდუსტრიული ქსელებისა და ოპერაციული ტექნოლოგიების დაცვას თანამედროვე საფრთხეებისგან.',
      tags:['OT','ICS','Industrial'] },

    { ic:'email', cat:'Communication', ac:'indigo', motif:'mesh',
      name:'Email Security',
      lead:'ელექტრონული ფოსტა კვლავ რჩება კიბერშეტევების ყველაზე გავრცელებულ შესასვლელ წერტილად.',
      text:'Email Security სისტემები იცავს ორგანიზაციის ელფოსტას phishing-ის, malware-ის, spam-ისა და ბიზნეს ელფოსტის კომპრომეტაციისგან (BEC).',
      hl:'CyberX ეხმარება კომპანიებს უზრუნველყონ უსაფრთხო და დაცული კომუნიკაცია.',
      tags:['Anti-Phishing','Anti-Malware','BEC'] },

    { ic:'pen', cat:'Offensive', ac:'red', motif:'radar',
      name:'Penetration Testing & Red Teaming',
      lead:'უსაფრთხოების რეალური მდგომარეობის შესაფასებლად აუცილებელია პრაქტიკული ტესტირება.',
      text:'Penetration Testing და Red Teaming მომსახურებები რეალური კიბერშეტევების სიმულაციით ავლენს სისუსტეებს მანამ, სანამ მათ რეალური თავდამსხმელები გამოიყენებენ.',
      hl:'CyberX ეხმარება ორგანიზაციებს შეაფასონ უსაფრთხოების დონე და გააძლიერონ თავდაცვის მექანიზმები.',
      tags:['Pentest','Red Team','Simulation'] },

    { ic:'intel', cat:'Intelligence', ac:'orange', motif:'mesh',
      name:'Threat Intelligence',
      lead:'საფრთხეების შესახებ ინფორმაციის დროული მიღება თანამედროვე კიბერუსაფრთხოების მნიშვნელოვანი ნაწილია.',
      text:'Threat Intelligence უზრუნველყოფს კიბერსაფრთხეების, მავნე აქტივობებისა და თავდასხმის ტენდენციების შესახებ რეალურ დროში ინფორმაციას, რაც აძლიერებს უსაფრთხოების სტრატეგიას.',
      hl:'CyberX ეხმარება კომპანიებს პროაქტიულად მოემზადონ და ეფექტურად უპასუხონ ახალ კიბერსაფრთხეებს.',
      tags:['Intel Feeds','Trends','Proactive'] },

    { ic:'train', cat:'People', ac:'green', motif:'pulse',
      name:'Security Awareness Training',
      lead:'ადამიანური ფაქტორი კვლავ რჩება კიბერინციდენტების ერთ-ერთ მთავარ მიზეზად.',
      text:'Security Awareness Training პროგრამები თანამშრომლებს ეხმარება phishing-ის, social engineering-ისა და სხვა საფრთხეების ამოცნობასა და სწორ რეაგირებაში პრაქტიკული სიმულაციებით.',
      hl:'CyberX უზრუნველყოფს პრაქტიკულ ტრენინგებს, სიმულაციებსა და ცნობიერების ამაღლების პროგრამებს ორგანიზაციებისთვის.',
      tags:['Training','Simulation','Awareness'] },

    { ic:'mdm', cat:'Mobility', ac:'teal', motif:'scan',
      name:'Sure MDM',
      lead:'თანამშრომლები იყენებენ მობილურ მოწყობილობებს, ტაბლეტებსა და ლეპტოპებს სხვადასხვა ადგილიდან.',
      text:'Sure MDM არის მოწყობილობების ცენტრალიზებული მართვის (Mobile Device Management) პლატფორმა, რომელიც აკონტროლებს და იცავს მობილურ მოწყობილობებს, ტაბლეტებს, rugged მოწყობილობებსა და დისტანციურ გარემოებს.',
      hl:'CyberX ეხმარება ორგანიზაციებს უსაფრთხოდ მართონ კორპორატიული და დისტანციური მოწყობილობები და გაამარტივონ ადმინისტრირება.',
      tags:['MDM','Devices','Remote'] }
  ];

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /* ---- build kinetic marquee ---- */
  (function marquee() {
    const wrap = document.getElementById('solMarquee');
    if (!wrap) return;
    const chip = (s) => {
      const a = AC[s.ac][0];
      return `<span class="mq-chip" style="--ac:${a}"><span class="mqdot"></span>${esc(s.name)}</span>`;
    };
    const half = SOL.map(chip).join('');
    const rowA = document.createElement('div'); rowA.className = 'mq-row'; rowA.innerHTML = half + half;
    const rowB = document.createElement('div'); rowB.className = 'mq-row rev';
    // reversed order for the second lane
    const halfB = SOL.slice().reverse().map(chip).join('');
    rowB.innerHTML = halfB + halfB;
    wrap.appendChild(rowA); wrap.appendChild(rowB);
  })();

  /* ---- build explorer ---- */
  const listEl = document.getElementById('solList');
  const bodyEl = document.getElementById('detailBody');
  const dvCat = document.getElementById('dvCat');
  const dvCount = document.getElementById('dvCount');
  const dvIcon = document.getElementById('dvIcon');
  const detail = document.getElementById('solDetail');
  if (!listEl || !bodyEl || !detail) return;

  let cur = 0;
  const items = [];

  SOL.forEach((s, i) => {
    const a = AC[s.ac][0];
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'sol-item';
    b.style.setProperty('--ac', a);
    b.innerHTML =
      `<span class="si-num">${String(i + 1).padStart(2, '0')}</span>` +
      `<span class="si-ic"><svg viewBox="0 0 24 24" fill="none">${IC[s.ic]}</svg></span>` +
      `<span class="si-name">${esc(s.name)}</span>` +
      `<svg class="si-arr" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    b.addEventListener('click', () => select(i));
    b.addEventListener('mouseenter', () => { if (window.matchMedia('(hover:hover)').matches) select(i); });
    listEl.appendChild(b);
    items.push(b);
  });

  function select(i) {
    if (i < 0) i = SOL.length - 1;
    if (i >= SOL.length) i = 0;
    cur = i;
    const s = SOL[i];
    const a = AC[s.ac][0];
    items.forEach((el, k) => el.classList.toggle('on', k === i));
    detail.style.setProperty('--ac', a);

    dvCat.textContent = s.cat;
    dvCount.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(SOL.length).padStart(2, '0');
    dvIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none">${IC[s.ic]}</svg>`;

    bodyEl.innerHTML =
      `<h3>${esc(s.name)}</h3>` +
      `<p class="detail-lead">${esc(s.lead)}</p>` +
      `<p class="detail-text">${esc(s.text)}</p>` +
      `<div class="detail-tags">${s.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>` +
      `<div class="detail-highlight"><svg class="hl-mark" viewBox="0 0 24 24" fill="none"><path d="M12 3 5 5.6V11c0 4.4 3 7.6 7 8.8 4-1.2 7-4.4 7-8.8V5.6L12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m9 11.5 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><p>${esc(s.hl)}</p></div>` +
      `<div class="detail-actions"><a class="btn btn-primary" href="index.html#final">მოითხოვეთ კონსულტაცია<svg class="arr" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>`;

    // replay stagger
    if (!reduce) {
      bodyEl.classList.remove('anim');
      void bodyEl.offsetWidth;
      bodyEl.classList.add('anim');
    }

    motif.set(s.motif, AC[s.ac][1]);
  }

  /* ---- prev / next + keyboard ---- */
  document.getElementById('prevBtn')?.addEventListener('click', () => select(cur - 1));
  document.getElementById('nextBtn')?.addEventListener('click', () => select(cur + 1));

  let inView = false;
  new IntersectionObserver((es) => es.forEach(e => { inView = e.isIntersecting; }), { threshold: 0.15 })
    .observe(document.getElementById('explorer') || detail);
  window.addEventListener('keydown', (e) => {
    if (!inView) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); select(cur + 1); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); select(cur - 1); }
  });

  /* ============================================================
     CANVAS MOTIF ENGINE — themed animation in the detail header
     ============================================================ */
  const motif = (function () {
    const cv = document.getElementById('detailCanvas');
    if (!cv) return { set() {} };
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = 1;
    let kind = 'pulse', rgb = '255,122,60';
    let nodes = [], bars = [], t0 = performance.now();

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      nodes = Array.from({ length: 16 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3
      }));
      bars = Array.from({ length: 22 }, (_, i) => ({ ph: i * 0.5, sp: 0.8 + Math.random() * 1.4 }));
    }

    function gridDots(alpha) {
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      for (let x = 16; x < w; x += 26) for (let y = 14; y < h; y += 26) {
        ctx.beginPath(); ctx.arc(x, y, .9, 0, Math.PI * 2); ctx.fill();
      }
    }

    function draw(now) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const R = rgb;

      if (kind === 'pulse') {
        const cx = w * .5, cy = h * .54;
        gridDots(.04);
        for (let k = 0; k < 4; k++) {
          const p = ((t * .5 + k / 4) % 1);
          const r = p * Math.min(w, h) * .9;
          ctx.strokeStyle = `rgba(${R},${(1 - p) * .5})`;
          ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${R},.95)`;
        ctx.beginPath(); ctx.arc(cx, cy, 4.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(${R},.18)`;
        ctx.beginPath(); ctx.arc(cx, cy, 11, 0, Math.PI * 2); ctx.fill();

      } else if (kind === 'radar') {
        const cx = w * .5, cy = h * .56, rad = Math.min(w, h) * .62;
        for (let k = 1; k <= 3; k++) {
          ctx.strokeStyle = `rgba(${R},${.12 + k * .04})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(cx, cy, rad * k / 3, 0, Math.PI * 2); ctx.stroke();
        }
        const ang = t * 1.6;
        const g = ctx.createConicGradient ? null : null;
        ctx.save();
        ctx.translate(cx, cy);
        const grad = ctx.createLinearGradient(0, 0, Math.cos(ang) * rad, Math.sin(ang) * rad);
        grad.addColorStop(0, `rgba(${R},.5)`); grad.addColorStop(1, `rgba(${R},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.moveTo(0, 0);
        ctx.arc(0, 0, rad, ang - .5, ang); ctx.closePath(); ctx.fill();
        ctx.restore();
        // blips
        for (let k = 0; k < 5; k++) {
          const ba = k * 1.3 + 0.4, br = rad * (.3 + (k % 3) * .22);
          const bx = cx + Math.cos(ba) * br, by = cy + Math.sin(ba) * br;
          const pop = Math.max(0, Math.sin(t * 1.6 - ba + Math.PI / 2));
          ctx.fillStyle = `rgba(${R},${.25 + pop * .7})`;
          ctx.beginPath(); ctx.arc(bx, by, 2 + pop * 2, 0, Math.PI * 2); ctx.fill();
        }

      } else if (kind === 'mesh') {
        for (const n of nodes) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 92) {
            ctx.strokeStyle = `rgba(${R},${(1 - d / 92) * .4})`;
            ctx.lineWidth = .8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        for (const n of nodes) {
          ctx.fillStyle = `rgba(${R},.85)`;
          ctx.beginPath(); ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2); ctx.fill();
        }

      } else if (kind === 'bars') {
        const n = bars.length, gap = 3, bw = (w - gap * (n + 1)) / n;
        for (let i = 0; i < n; i++) {
          const bh = (0.25 + 0.6 * (0.5 + 0.5 * Math.sin(t * bars[i].sp + bars[i].ph))) * h * .8;
          const x = gap + i * (bw + gap), y = h - bh;
          const grad = ctx.createLinearGradient(0, y, 0, h);
          grad.addColorStop(0, `rgba(${R},.85)`); grad.addColorStop(1, `rgba(${R},.12)`);
          ctx.fillStyle = grad;
          ctx.fillRect(x, y, bw, bh);
        }

      } else if (kind === 'scan') {
        gridDots(.05);
        const sx = (Math.sin(t * .9) * .5 + .5) * w;
        const grad = ctx.createLinearGradient(sx - 40, 0, sx + 40, 0);
        grad.addColorStop(0, `rgba(${R},0)`); grad.addColorStop(.5, `rgba(${R},.35)`); grad.addColorStop(1, `rgba(${R},0)`);
        ctx.fillStyle = grad; ctx.fillRect(sx - 40, 0, 80, h);
        ctx.strokeStyle = `rgba(${R},.9)`; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, h); ctx.stroke();
        // lit dots near the line
        for (let x = 16; x < w; x += 26) for (let y = 14; y < h; y += 26) {
          const d = Math.abs(x - sx);
          if (d < 46) {
            ctx.fillStyle = `rgba(${R},${(1 - d / 46) * .9})`;
            ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    let raf = 0;
    function start() { if (reduce) { draw(performance.now()); cancelAnimationFrame(raf); return; } cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }

    resize();
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    // pause when offscreen
    const vio = new IntersectionObserver((es) => es.forEach(e => {
      if (e.isIntersecting) start(); else cancelAnimationFrame(raf);
    }), { threshold: 0.02 });
    vio.observe(cv);
    start();

    return { set(k, color) { kind = k; rgb = color; } };
  })();

  /* ---- init ---- */
  select(0);
})();
