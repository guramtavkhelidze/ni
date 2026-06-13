/* ============================================================
   CyberX — BLOG / Insights · shared data + generative cover art
   (single source of truth for all Blog page versions)
   KA section text is verbatim from source. Article excerpts are
   example copy generated for the mockups.
   ============================================================ */
(function () {

  /* ---- category palette ---- */
  const CATS = [
    { name: 'ტენდენციები',          ac: '#FF7A3C', rgb: '255,122,60' },
    { name: 'საფრთხეების ანალიზი',   ac: '#F0444C', rgb: '240,68,76' },
    { name: 'საუკეთესო პრაქტიკები',  ac: '#25E08A', rgb: '37,224,138' },
    { name: 'ინდუსტრიული ხედვები',   ac: '#36D2E6', rgb: '54,210,230' },
    { name: 'ტექნოლოგიური ანალიზი',  ac: '#2D7FF9', rgb: '45,127,249' },
  ];
  const catOf = n => CATS.find(c => c.name === n) || CATS[0];

  /* ---- posts (titles verbatim; excerpts are example copy) ---- */
  const POSTS = [
    { id: 'georgia', title: 'კიბერუსაფრთხოების მდგომარეობა საქართველოში', cat: 'ინდუსტრიული ხედვები', date: '12 მაისი, 2026', read: '7 წთ', seed: 7,
      excerpt: 'მიმოხილვა იმისა, თუ სად დგას ქართული ბიზნესი კიბერმდგრადობის თვალსაზრისით და რა გამოწვევები აქვს ადგილობრივ ორგანიზაციებს.' },
    { id: 'why-business', title: 'რატომ სჭირდება დღეს ყველა ბიზნესს კიბერუსაფრთხოება', cat: 'საუკეთესო პრაქტიკები', date: '5 მაისი, 2026', read: '5 წთ', seed: 13,
      excerpt: 'მცირე ბიზნესიც კი დღეს სამიზნეა — რატომ აღარ არის უსაფრთხოება მხოლოდ მსხვილი კომპანიების საზრუნავი.' },
    { id: 'ai-attacks', title: 'AI-ზე დაფუძნებული კიბერშეტევების ზრდა', cat: 'საფრთხეების ანალიზი', date: '28 აპრილი, 2026', read: '8 წთ', seed: 21,
      excerpt: 'ხელოვნური ინტელექტი თავდამსხმელების ხელშიც ხვდება — როგორ იცვლება შეტევების მასშტაბი და სიზუსტე.' },
    { id: 'zero-trust', title: 'Zero Trust უსაფრთხოების მოდელის მნიშვნელობა', cat: 'ტექნოლოგიური ანალიზი', date: '21 აპრილი, 2026', read: '6 წთ', seed: 34,
      excerpt: '„არასოდეს ენდო, ყოველთვის გადაამოწმე" — Zero Trust-ის პრინციპები და მათი დანერგვის პრაქტიკული ნაბიჯები.' },
    { id: 'common-mistakes', title: 'კიბერუსაფრთხოების ყველაზე გავრცელებული შეცდომები ორგანიზაციებში', cat: 'საუკეთესო პრაქტიკები', date: '14 აპრილი, 2026', read: '6 წთ', seed: 42,
      excerpt: 'სუსტი პაროლებიდან გაუმართავ კონფიგურაციამდე — ტიპური ხარვეზები, რომლებიც ძვირი უჯდება ორგანიზაციებს.' },
    { id: 'ransomware', title: 'როგორ დავიცვათ ბიზნესი Ransomware შეტევებისგან', cat: 'საფრთხეების ანალიზი', date: '7 აპრილი, 2026', read: '9 წთ', seed: 55,
      excerpt: 'პრევენცია, სარეზერვო ასლები და რეაგირების გეგმა — ნაბიჯ-ნაბიჯ გზამკვლევი ransomware-ის წინააღმდეგ.' },
    { id: 'trends-2026', title: 'კიბერუსაფრთხოების მთავარი ტენდენციები 2026 წელს', cat: 'ტენდენციები', date: '31 მარტი, 2026', read: '7 წთ', seed: 63,
      excerpt: 'რა განსაზღვრავს ციფრული უსაფრთხოების მომავალს — მთავარი მიმართულებები, რომლებსაც წელს თვალი უნდა ვადევნოთ.' },
    { id: 'resilience', title: 'კიბერმდგრადობის შექმნა თანამედროვე ციფრულ სამყაროში', cat: 'ტენდენციები', date: '24 მარტი, 2026', read: '6 წთ', seed: 71,
      excerpt: 'მდგრადობა ერთჯერადი პროექტი არ არის — როგორ ავაშენოთ უსაფრთხოების კულტურა, რომელიც დროს უძლებს.' },
  ].map(p => ({ ...p, ...catOf(p.cat) }));

  /* ---- verbatim section copy ---- */
  const COPY = {
    tagline: 'კიბერუსაფრთხოების სიახლეები, ანალიტიკა და პრაქტიკული რეკომენდაციები',
    introLead: 'CyberX Insights აერთიანებს ექსპერტულ მოსაზრებებს, ინდუსტრიულ ტენდენციებსა და პრაქტიკულ რეკომენდაციებს, რომლებიც ორგანიზაციებს ეხმარება უკეთ გაიგონ თანამედროვე კიბერსაფრთხეები, გააძლიერონ უსაფრთხოების სტრატეგია და იყვნენ ერთი ნაბიჯით წინ მუდმივად ცვალებად ციფრულ გარემოში.',
    eyebrow: 'ბლოგი / Insights',
    h1: 'იყავით ერთი ნაბიჯით წინ კიბერსაფრთხეებზე',
    intro: [
      'კიბერუსაფრთხოების სფერო მუდმივად ვითარდება. ახალი ტექნოლოგიები, კიბერსაფრთხეები, რეგულაციები და თავდასხმის მეთოდები ორგანიზაციებს მუდმივ მზადყოფნასა და ინფორმირებულობას მოითხოვს.',
      'CyberX-ში ჩვენ ვაზიარებთ ანალიტიკურ სტატიებს, ინდუსტრიულ ტენდენციებს, ექსპერტულ მოსაზრებებსა და პრაქტიკულ რეკომენდაციებს, რათა დავეხმაროთ ორგანიზაციებს უკეთ გაიგონ თანამედროვე კიბერუსაფრთხოების გარემო და მიიღონ სწორი გადაწყვეტილებები.',
      'ჩვენი მიზანია შევქმნათ ღირებული, გასაგები და პრაქტიკული კონტენტი, რომელიც ხელს შეუწყობს ორგანიზაციების კიბერმდგრადობის გაძლიერებასა და ციფრულ გამოწვევებთან ეფექტურად გამკლავებას.',
    ],
    findHead: 'რას ნახავთ აქ?',
    find: [
      { t: 'კიბერუსაფრთხოების ტენდენციები', d: 'გაეცანით კიბერუსაფრთხოების სფეროში მიმდინარე უახლეს ცვლილებებს, თავდასხმის ახალ მეთოდებს, საუკეთესო პრაქტიკებსა და გლობალურ ტენდენციებს, რომლებიც ციფრული უსაფრთხოების მომავალს განსაზღვრავს.', i: 'trend' },
      { t: 'საფრთხეების ანალიზი და რისკების მართვა', d: 'შეიტყვეთ, როგორ ვითარდება თანამედროვე კიბერსაფრთხეები და რა ნაბიჯების გადადგმა შეუძლიათ ორგანიზაციებს რისკების შესამცირებლად, ხილვადობის გასაუმჯობესებლად და უსაფრთხოების დონის გასაძლიერებლად.', i: 'risk' },
      { t: 'უსაფრთხოების საუკეთესო პრაქტიკები', d: 'მიიღეთ პრაქტიკული რეკომენდაციები Endpoint-ების, ქსელების, Cloud გარემოების, მომხმარებელთა იდენტობებისა და კრიტიკული სისტემების უსაფრთხოდ მართვისთვის.', i: 'shield' },
      { t: 'ინდუსტრიული ხედვები', d: 'გაეცანით კიბერუსაფრთხოების გამოწვევებსა და შესაძლებლობებს სხვადასხვა სექტორში, მათ შორის ფინანსებში, ჯანდაცვაში, სახელმწიფო უწყებებში, ტელეკომუნიკაციებში, ენერგეტიკაში, წარმოებაში, Retail-სა და განათლებაში.', i: 'industry' },
      { t: 'ტექნოლოგიური ანალიზი', d: 'გაიღრმავეთ ცოდნა თანამედროვე კიბერუსაფრთხოების ტექნოლოგიებზე, როგორიცაა XDR, SIEM, Zero Trust, Cloud Security, Vulnerability Management, OT Security და Identity Protection.', i: 'tech' },
    ],
    whyHead: 'რატომ არის კიბერუსაფრთხოების ცნობიერება მნიშვნელოვანი?',
    whyLead: 'ტექნოლოგია მხოლოდ ერთი ნაწილია უსაფრთხოების სისტემის.',
    why: [
      'ეფექტური კიბერუსაფრთხოება ეფუძნება ადამიანების, პროცესებისა და ტექნოლოგიების სწორ კომბინაციას. ორგანიზაციები, რომლებიც ინვესტიციას დებენ ცნობიერების ამაღლებაში, თანამშრომლების განათლებასა და პროაქტიულ უსაფრთხოების სტრატეგიებში, გაცილებით უკეთ არიან მომზადებულნი თანამედროვე კიბერსაფრთხეების წინააღმდეგ.',
      'CyberX Insights-ის მეშვეობით ჩვენი მიზანია წვლილი შევიტანოთ საქართველოში და რეგიონში კიბერუსაფრთხოების კულტურისა და ცნობიერების განვითარებაში.',
    ],
    latestHead: 'უახლესი სტატიები',
    latestNote: '(ეს განყოფილება ავტომატურად განახლდება ახალი მასალების დამატებასთან ერთად.)',
    subHead: 'გამოიწერეთ სიახლეები',
    sub: [
      'მიიღეთ უახლესი ინფორმაცია კიბერუსაფრთხოების ტენდენციებზე, ახალ საფრთხეებზე და თანამედროვე ტექნოლოგიურ გადაწყვეტილებებზე.',
      'შემოუერთდით CyberX-ის საზოგადოებას და მიიღეთ ექსპერტული ანალიტიკა პირდაპირ ჩვენი გუნდისგან.',
    ],
    subBtn: 'გამოწერა  🚀',
  };

  /* ---- category icons ---- */
  const ICONS = {
    trend: '<path d="M3 17l5-5 4 4 8-8M16 8h5v5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
    risk: '<path d="M12 3 4 6.5V12c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6.5L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 8v4.5M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    industry: '<path d="M4 20h16M6 20V9l6-4 6 4v11M9.5 20v-5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    tech: '<rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M9 21h6M12 17v4M7 11l2.4 2L12 9l2 3 2-2.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  };

  /* ---- seeded generative cover art ---- */
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function art(canvas, rgbStr, seed) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.clientWidth || 400, H = canvas.clientHeight || 240;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const [r, g, b] = rgbStr.split(',').map(Number);
    const rng = mulberry32(seed * 2654435761 >>> 0);

    // base
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#0b0d12'); bg.addColorStop(1, '#14171e');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // accent glow
    const gx = W * (0.62 + rng() * 0.3), gy = H * (0.1 + rng() * 0.3);
    const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.8);
    glow.addColorStop(0, `rgba(${r},${g},${b},.4)`); glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
    const glow2 = ctx.createRadialGradient(W * 0.1, H * 0.95, 0, W * 0.1, H * 0.95, W * 0.6);
    glow2.addColorStop(0, `rgba(${r},${g},${b},.16)`); glow2.addColorStop(1, 'transparent');
    ctx.fillStyle = glow2; ctx.fillRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = 'rgba(255,255,255,.05)'; ctx.lineWidth = 1;
    const gs = 30;
    for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // large translucent concentric arcs (motif)
    const cx = W * (0.2 + rng() * 0.6), cy = H * (0.3 + rng() * 0.5);
    ctx.lineWidth = 1.4;
    for (let i = 1; i <= 4; i++) {
      ctx.strokeStyle = `rgba(${r},${g},${b},${0.22 - i * 0.03})`;
      ctx.beginPath(); ctx.arc(cx, cy, 26 * i + rng() * 10, 0, Math.PI * 2); ctx.stroke();
    }

    // network
    const N = 13, pts = Array.from({ length: N }, () => ({ x: rng() * W, y: rng() * H }));
    ctx.strokeStyle = `rgba(${r},${g},${b},.4)`; ctx.lineWidth = 1;
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 92) { ctx.globalAlpha = 1 - d / 92; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    pts.forEach((p, i) => {
      ctx.fillStyle = i % 4 === 0 ? `rgb(${r},${g},${b})` : 'rgba(255,255,255,.7)';
      ctx.beginPath(); ctx.arc(p.x, p.y, i % 4 === 0 ? 3.2 : 1.8, 0, Math.PI * 2); ctx.fill();
    });

    // vignette bottom for text legibility
    const vg = ctx.createLinearGradient(0, H * 0.4, 0, H);
    vg.addColorStop(0, 'transparent'); vg.addColorStop(1, 'rgba(7,8,10,.55)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
  }

  function paintAll(root) {
    (root || document).querySelectorAll('canvas[data-art]').forEach(cv => {
      art(cv, cv.dataset.rgb || '255,122,60', +cv.dataset.seed || 1);
    });
  }
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => paintAll(), 200); });

  window.BLOG = { CATS, POSTS, COPY, ICONS, catOf, art, paintAll };
})();
