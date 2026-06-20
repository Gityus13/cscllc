/* ============================================================
   Caspian Smart Construction MMC — main.js
   Production JavaScript  ·  2025
   ============================================================ */
'use strict';

/* ============================================================
   SVG ICON LIBRARY
   ============================================================ */
const I = {
  waterproofing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  flooring:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
  construction:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M9 21V7l3-4 3 4v14"/><path d="M3 21V11l6-4"/><path d="M21 21V11l-6-4"/></svg>`,
  tile:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`,
  concrete:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  consulting:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  shield:        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  clock:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  tool:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  star:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  trending:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  phone:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  pin:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  hrs:           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  arrow:         `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  up:            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  send:          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  linkedin:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  instagram:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  whatsapp:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

/* ============================================================
   TRANSLATION HELPERS
   ============================================================ */
function T(path) {
  return path.split('.').reduce((o,k) => (o && o[k] !== undefined ? o[k] : ''), TRANSLATIONS[currentLang] || {});
}

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
function initLang() {
  applyLang(currentLang, false);
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang, true));
  });
}

function applyLang(lang, save) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  if (save) localStorage.setItem('csc_lang', lang);
  document.documentElement.lang = lang;

  // Sync all lang buttons
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // Update static i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T(el.dataset.i18n);
    if (v) el.textContent = v;
  });

  // Update placeholders
  document.querySelectorAll('[data-ph]').forEach(el => {
    const v = T(el.dataset.ph);
    if (v) el.placeholder = v;
  });

  // Update meta
  const mt = T('meta.title'); if (mt) document.title = mt;
  const md = document.querySelector('meta[name="description"]');
  const mv = T('meta.description'); if (md && mv) md.content = mv;
  const og = document.querySelector('meta[property="og:description"]');
  const ov = T('meta.og_description'); if (og && ov) og.content = ov;

  // Render dynamic sections
  renderServices();
  renderProjects();
  renderWhyUs();
  renderProcess();
  renderFAQ();
  renderContactOpts();
  renderStats();
  renderFooter();

  // Re-init interactive pieces after render
  setTimeout(() => { initFAQ(); initProjectFilter(); reObserve(); }, 10);
}

/* ============================================================
   RENDER: SERVICES
   ============================================================ */
function renderServices() {
  const g = document.getElementById('svcs-grid');
  if (!g) return;
  const items = T('services.items');
  const lm = T('services.learn_more');
  if (!Array.isArray(items)) return;
  g.innerHTML = items.map((s,i) => `
    <div class="svc-card rv d${Math.min(i+1,5)}">
      <div class="svc-img" style="background-image:url('/images/service-${i+1}.jpg')">
        <div class="svc-ic">${I[s.key] || I.construction}</div>
      </div>
      <div class="svc-body">
        <h3 class="svc-ttl">${s.title}</h3>
        <p class="svc-dsc">${s.description}</p>
        <ul class="svc-lst">
          ${(s.sub||[]).slice(0,4).map(x=>`<li>${x}</li>`).join('')}
        </ul>
      </div>
      <div class="svc-ft">
        <a href="#contact" class="btn-text">${lm} ${I.arrow}</a>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER: PROJECTS
   ============================================================ */
function renderProjects() {
  const g = document.getElementById('proj-grid');
  const fb = document.getElementById('proj-filters');
  if (!g || !fb) return;
  const items = T('projects.items');
  const vb = T('projects.view_project');
  if (!Array.isArray(items)) return;

  const cats = [
    { k:'all',            l: T('projects.filter_all') },
    { k:'waterproofing',  l: T('projects.filter_waterproofing') },
    { k:'flooring',       l: T('projects.filter_flooring') },
    { k:'construction',   l: T('projects.filter_construction') },
  ];

  fb.innerHTML = cats.map((c,i)=>
    `<button class="fbtn${i===0?' on':''}" data-f="${c.k}">${c.l}</button>`
  ).join('');

  g.innerHTML = items.map((p,i) => `
    <div class="pcard rv d${Math.min(i+1,5)}" data-cat="${p.category}">
      <div class="p-bg" style="background-image:url('/images/project-${i+1}.jpg')"></div>
      <div class="p-ov"></div>
      <div class="p-ov2"><span class="p-view">${vb}</span></div>
      <div class="p-info">
        <span class="p-cat">${p.cat_label}</span>
        <h4 class="p-ttl">${p.title}</h4>
        <p class="p-yr">${p.year}</p>
      </div>
    </div>
  `).join('');
}

function initProjectFilter() {
  const fb = document.getElementById('proj-filters');
  if (!fb) return;
  fb.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', function() {
      fb.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('on'));
      this.classList.add('on');
      const f = this.dataset.f;
      document.querySelectorAll('#proj-grid .pcard').forEach(c => {
        c.classList.toggle('hide', f !== 'all' && c.dataset.cat !== f);
      });
    });
  });
}

/* ============================================================
   RENDER: STATISTICS
   ============================================================ */
function renderStats() {
  const g = document.getElementById('stats-row');
  if (!g) return;
  const keys = ['s1','s2','s3','s4'];
  g.innerHTML = keys.map(k => {
    const val = T(`stats.${k}_val`);
    const lbl = T(`stats.${k}_label`);
    const sfx = T(`stats.${k}_suffix`);
    return `
      <div class="st-block rv">
        <div>
          <span class="st-n" data-count="${val}">0</span><span class="st-sfx">${sfx}</span>
        </div>
        <div class="st-lbl">${lbl}</div>
      </div>
    `;
  }).join('');
  // Re-init counters for freshly rendered elements
  initCounters();
  reObserve();
}

/* ============================================================
   RENDER: WHY US
   ============================================================ */
function renderWhyUs() {
  const g = document.getElementById('feats-grid');
  if (!g) return;
  const items = T('whyus.items');
  if (!Array.isArray(items)) return;
  g.innerHTML = items.map((f,i) => `
    <div class="fcard rv d${Math.min(i+1,5)}">
      <div class="fic">${I[f.icon] || I.shield}</div>
      <h3 class="fttl">${f.title}</h3>
      <p class="fdsc">${f.desc}</p>
    </div>
  `).join('');
}

/* ============================================================
   RENDER: PROCESS
   ============================================================ */
function renderProcess() {
  const g = document.getElementById('proc-grid');
  if (!g) return;
  const steps = T('process.steps');
  if (!Array.isArray(steps)) return;
  g.innerHTML = steps.map((s,i) => `
    <div class="pstep rv d${i+1}">
      <div class="p-num-wrap"><span class="p-num">${s.num}</span></div>
      <h3 class="p-stl">${s.title}</h3>
      <p class="p-sdsc">${s.desc}</p>
    </div>
  `).join('');
}

/* ============================================================
   RENDER: FAQ
   ============================================================ */
function renderFAQ() {
  const g = document.getElementById('faq-acc');
  if (!g) return;
  const items = T('faq.items');
  if (!Array.isArray(items)) return;
  g.innerHTML = items.map((x,i) => `
    <div class="fitem">
      <button class="fq"><span>${x.q}</span><span class="fqic">+</span></button>
      <div class="faw"><div class="fa">${x.a}</div></div>
    </div>
  `).join('');
}

function initFAQ() {
  document.querySelectorAll('.fq').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.fitem');
      const isOn = item.classList.contains('on');
      document.querySelectorAll('.fitem.on').forEach(i => {
        i.classList.remove('on');
        i.querySelector('.faw').classList.remove('on');
      });
      if (!isOn) { item.classList.add('on'); item.querySelector('.faw').classList.add('on'); }
    });
  });
}

/* ============================================================
   RENDER: CONTACT OPTIONS
   ============================================================ */
function renderContactOpts() {
  const sel = document.getElementById('svc-sel');
  if (!sel) return;
  const opts = T('contact.service_options');
  const ph = T('contact.form_service_ph');
  sel.innerHTML = `<option value="" disabled selected>${ph}</option>` +
    (Array.isArray(opts) ? opts.map(o=>`<option value="${o}">${o}</option>`).join('') : '');
}

/* ============================================================
   RENDER: FOOTER DYNAMIC PARTS
   ============================================================ */
function renderFooter() {
  const fl = document.getElementById('ft-links');
  if (fl) fl.innerHTML = [
    ['#home', T('footer.link_home')],
    ['#about', T('footer.link_about')],
    ['#services', T('footer.link_services')],
    ['#projects', T('footer.link_projects')],
    ['#contact', T('footer.link_contact')],
  ].map(([h,l])=>`<li><a href="${h}">${l}</a></li>`).join('');

  const fs = document.getElementById('ft-svcs');
  if (fs) fs.innerHTML = [
    T('footer.svc_water'), T('footer.svc_floor'), T('footer.svc_const'),
    T('footer.svc_tile'),  T('footer.svc_concrete'), T('footer.svc_consult')
  ].map(s=>`<li><a href="#services">${s}</a></li>`).join('');

  const fd = document.getElementById('ft-desc');
  if (fd) fd.textContent = T('footer.desc');

  const fc = document.getElementById('ft-copy');
  if (fc) fc.textContent = T('footer.copyright');

  const fht = document.getElementById('ft-htl-links');
  if (fht) fht.textContent = T('footer.links_title');
  const fhs = document.getElementById('ft-htl-svcs');
  if (fhs) fhs.textContent = T('footer.services_title');
  const fhc = document.getElementById('ft-htl-contact');
  if (fhc) fhc.textContent = T('footer.contact_title');
}

/* ============================================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
let rvObserver;

function initReveal() {
  rvObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('vis'); rvObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reObserve();
}

function reObserve() {
  if (!rvObserver) return;
  document.querySelectorAll('.rv:not(.vis)').forEach(el => rvObserver.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
let cntObserver;

function initCounters() {
  if (cntObserver) cntObserver.disconnect();
  cntObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target); cntObserver.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => cntObserver.observe(el));
}

function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1800;
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(performance.now());
}

/* ============================================================
   LOADER
   ============================================================ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const hide = () => {
    loader.classList.add('out');
    // Trigger hero reveals after loader fades
    setTimeout(() => {
      document.querySelectorAll('#home .rv').forEach((el,i) => {
        setTimeout(() => el.classList.add('vis'), i * 110);
      });
      reObserve();
    }, 200);
  };
  if (document.readyState === 'complete') { setTimeout(hide, 350); }
  else { window.addEventListener('load', () => setTimeout(hide, 350)); }
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  const tick = () => nb.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', tick, { passive: true });
  tick();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const ham = document.getElementById('ham');
  const menu = document.getElementById('mob-menu');
  if (!ham || !menu) return;

  ham.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const off = (document.getElementById('navbar')?.offsetHeight || 72);
      window.scrollTo({ top: target.offsetTop - off, behavior: 'smooth' });
      // Close mobile menu if open
      document.getElementById('mob-menu')?.classList.remove('open');
      document.getElementById('ham')?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBTT() {
  const btn = document.getElementById('btt');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('on', window.scrollY > 500), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   CONTACT FORM  (FormSubmit AJAX)
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('cform');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.fsubmit');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> ${T('contact.form_sending') || '...'}`;

    const body = {
      name:     form.querySelector('[name="name"]').value,
      company:  form.querySelector('[name="company"]').value,
      email:    form.querySelector('[name="email"]').value,
      phone:    form.querySelector('[name="phone"]').value,
      service:  form.querySelector('[name="service"]').value,
      message:  form.querySelector('[name="message"]').value,
      _subject: `Yeni Sorğu — Caspian Smart Construction MMC (${new Date().toLocaleDateString()})`,
      _captcha: 'false',
      _template: 'table',
      _replyto:  form.querySelector('[name="email"]').value
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/yusif.kurba@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body)
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        form.style.display = 'none';
        const ok = document.getElementById('form-ok');
        if (ok) {
          ok.querySelector('.f-ok-t').textContent = T('contact.form_success_title');
          ok.querySelector('.f-ok-m').textContent = T('contact.form_success_msg');
          ok.classList.add('show');
        }
      } else throw new Error('fail');
    } catch {
      btn.disabled = false;
      btn.innerHTML = orig;
      const errMsg = currentLang === 'ru' ? 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.'
                   : currentLang === 'en' ? 'An error occurred. Please try again.'
                   : 'Xəta baş verdi. Yenidən cəhd edin.';
      alert(errMsg);
    }
  });
}

/* ============================================================
   SPIN KEYFRAME  (for loading spinner in submit btn)
   ============================================================ */
(function addSpinStyle() {
  const s = document.createElement('style');
  s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(s);
})();

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLang();      // sets language, renders all dynamic sections
  initLoader();
  initNavbar();
  initMobileMenu();
  initReveal();
  initCounters();
  initSmoothScroll();
  initContactForm();
  initBTT();
});
