/* =========================================================
   Khondokar Jamal E Mustafa — Data Analyst Portfolio
   Vanilla JS. No build step. No phone number anywhere.
   ========================================================= */

// ═════════════════════════════════════════════════════════════
// PROJECT DATA — sourced from resume + project folder PDFs/images.
// Nothing here is invented; every figure traces to an uploaded file.
// ═════════════════════════════════════════════════════════════
const PROJECTS = [
  // ---------------- DEMO DASHBOARDS ----------------
  {
    slug: 'company-dashboard',
    category: 'dashboard',
    categoryLabel: 'Demo Dashboard',
    title: 'Company Dashboard — Finance & HR',
    description:
      'A multi-department Power BI demo built to showcase end-to-end dashboarding — dynamic Finance and HR views with drill-through metrics designed for cross-departmental decision-making.',
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Power Query'],
    insight:
      'Tracks 180 employees, $9M in salary cost, and an 85% training-completion rate — alongside monthly revenue, expense, and net-income trends across three fiscal years.',
    thumb: 'assets/img/dashboard/finance-thumb.jpg',
    gallery: [
      { src: 'assets/img/dashboard/finance.jpg', caption: 'Finance Dashboard — revenue, cash position, and per-student financial ratios' },
      { src: 'assets/img/dashboard/hr.jpg', caption: 'HR Dashboard — headcount, salary cost, training progress, and hiring trends' },
    ],
    fileUrl: 'assets/projects/demo-dashboard.pdf',
    fileLabel: 'Open Full PDF',
  },

  // ---------------- ANALYTICAL PROJECTS ----------------
  {
    slug: 'brics-vs-g7',
    category: 'analytical',
    categoryLabel: 'Analytical Project',
    title: 'BRICS vs. G7: A Comparative Overview',
    description:
      "In January 2024, BRICS expanded by adding five new nations, sparking discussion about a shift in global power dynamics. This project compares BRICS and G7 using GDP, purchasing power parity, and population data to assess global influence and the changing relationship between the two blocs.",
    tools: ['Data Research', 'Figma', 'Comparative Analysis'],
    insight:
      "BRICS nations hold 36.18% of global purchasing power parity versus the G7's 29.92% — despite the G7's higher combined GDP.",
    thumb: 'assets/img/analytical/brics-vs-g7-thumb.jpg',
    gallery: [{ src: 'assets/img/analytical/brics-vs-g7.jpg', caption: 'BRICS vs. G7 — GDP, PPP, population, and export-market comparison' }],
    fileUrl: 'assets/projects/brics-vs-g7.pdf',
    fileLabel: 'Open Full PDF',
  },
  {
    slug: 'antibiotic-misuse-bangladesh',
    category: 'analytical',
    categoryLabel: 'Analytical Project',
    title: 'The Significant Risks of Antibiotic Misuse and Overuse',
    description:
      'Explores antibiotic misuse and overuse in Bangladesh and its contribution to antimicrobial resistance (AMR), analyzing consumption patterns, driving factors, and proposed interventions to address the public health risk.',
    tools: ['Public Health Research', 'Data Visualization', 'Figma'],
    insight:
      'Bangladesh ranked as the 3rd largest consumer of antibiotics globally in 2022, with 97% of usage administered orally.',
    thumb: 'assets/img/analytical/antibiotics-thumb.jpg',
    gallery: [{ src: 'assets/img/analytical/antibiotics.jpg', caption: 'Antibiotic usage patterns, AWaRe classification, and drivers of misuse in Bangladesh' }],
    fileUrl: 'assets/projects/antibiotic-misuse-bangladesh.pdf',
    fileLabel: 'Open Full PDF',
  },
  {
    slug: 'grameenphone-vs-robi',
    category: 'analytical',
    categoryLabel: 'Analytical Project',
    title: 'Financial Analysis of Grameenphone vs Robi',
    description:
      'A comparative financial analysis of Grameenphone and Robi Axiata, the two leading telecom providers in Bangladesh, based on their 2022 financial statements — covering market share, profitability, liquidity, and valuation ratios.',
    tools: ['Financial Analysis', 'Ratio Analysis', 'Figma'],
    insight:
      "Grameenphone leads with a 43% market share and 81.1M subscribers, versus Robi's 31% share and 56.4M subscribers.",
    thumb: 'assets/img/analytical/grameen-vs-robi-thumb.jpg',
    gallery: [{ src: 'assets/img/analytical/grameen-vs-robi.jpg', caption: "Grameenphone vs. Robi — market share, profitability, and valuation ratios (FY2022)" }],
    fileUrl: 'assets/projects/grameenphone-vs-robi.pdf',
    fileLabel: 'Open Full PDF',
  },
  {
    slug: 'bangladesh-economy-2023',
    category: 'analytical',
    categoryLabel: 'Analytical Project',
    title: 'An Overview of the Bangladesh Economy 2023',
    description:
      "A diagnostic look at Bangladesh's 2023 currency and inflation pressures — tracing the relationship between the trade deficit, remittance inflows, and declining foreign direct investment.",
    tools: ['Economic Analysis', 'Data Visualization', 'Figma'],
    insight:
      'The net export deficit nearly doubled year-over-year, from $21.3B to $36.9B, as FDI fell from $2.65B to $2.43B.',
    thumb: 'assets/img/analytical/bangladesh-economy-thumb.jpg',
    gallery: [{ src: 'assets/img/analytical/bangladesh-economy.jpg', caption: "Bangladesh 2023 — inflation, trade balance, remittance flow, and FDI" }],
    fileUrl: 'assets/projects/bangladesh-economy-2023.pdf',
    fileLabel: 'Open Full PDF',
  },
  {
    slug: 'qatalyst-top-deals',
    category: 'analytical',
    categoryLabel: 'Analytical Project',
    title: "Qatalyst Partners' Top Deals of Each Year Over the Past Decade",
    description:
      'A decade of M&A activity (2014–2023) advised by Qatalyst Partners, the boutique investment bank focused on technology M&A — consolidated to the top 5 deals per year to map consolidation trends and the most active acquirers.',
    tools: ['Data Extraction', 'Figma', 'Data Visualization'],
    insight:
      "Salesforce's $29.2B acquisition of Slack was the decade's largest deal; Cisco was the most active acquirer with 6 acquisitions.",
    thumb: 'assets/img/analytical/qatalyst-deals-thumb.jpg',
    gallery: [{ src: 'assets/img/analytical/qatalyst-deals.jpg', caption: 'A decade of Qatalyst Partners-advised M&A deals, top 5 per year (2014–2023)' }],
    fileUrl: 'assets/projects/qatalyst-top-deals.pdf',
    fileLabel: 'Open Full PDF',
  },

  // ---------------- CREATIVE PROJECTS ----------------
  {
    slug: 'top-data-analytic-tools',
    category: 'creative',
    categoryLabel: 'Creative Project',
    title: 'Trend Comparison Between Top Data Analytic Tools',
    description:
      'A visual comparison of search-trend interest across ten leading data tools, grouped into programming languages, visualization tools, spreadsheets, and BI platforms.',
    tools: ['Figma', 'Trend Research', 'Infographic Design'],
    insight:
      'Power BI, Tableau, and Excel each show the strongest trend interest across their respective categories, per Google Trends.',
    thumb: 'assets/img/creative/top-data-tools-thumb.jpg',
    gallery: [{ src: 'assets/img/creative/top-data-tools.jpg', caption: 'Trend comparison across programming, visualization, spreadsheet, and BI tools' }],
    fileUrl: 'assets/projects/top-data-analytic-tools.jpg',
    fileLabel: 'Open Full Image',
  },
  {
    slug: 'top-python-libraries',
    category: 'creative',
    categoryLabel: 'Creative Project',
    title: 'Top Python Libraries for Data Science',
    description:
      "A chronological timeline of ten essential Python libraries from Python's 1991 release through 2023, grouped by function, with side-by-side comparisons of the most commonly confused pairs.",
    tools: ['Figma', 'Information Design'],
    insight:
      'Over 137,000 Python libraries exist today — this timeline maps the ten that matter most for data science.',
    thumb: 'assets/img/creative/top-python-libraries-thumb.jpg',
    gallery: [{ src: 'assets/img/creative/top-python-libraries.jpg', caption: '1991–2023 timeline of essential Python data-science libraries' }],
    fileUrl: 'assets/projects/top-python-libraries.png',
    fileLabel: 'Open Full Image',
  },
  {
    slug: 'icc-cricket-world-cup',
    category: 'creative',
    categoryLabel: 'Creative Project',
    title: 'ICC Cricket World Cup 2023',
    description:
      'An infographic breakdown of the 2023 Cricket World Cup — host venues, team ratings, prize distribution, and top individual performers across the tournament.',
    tools: ['Figma', 'Illustration', 'Infographic Design'],
    insight:
      '10 teams competed across 48 matches for a total prize pool of $10,000,000.',
    thumb: 'assets/img/creative/icc-cricket-world-cup-thumb.jpg',
    gallery: [{ src: 'assets/img/creative/icc-cricket-world-cup.jpg', caption: 'ICC Cricket World Cup 2023 — venues, teams, ratings, and prize money' }],
    fileUrl: 'assets/projects/icc-cricket-world-cup.png',
    fileLabel: 'Open Full Image',
  },
  {
    slug: 'celestial-bodies',
    category: 'creative',
    categoryLabel: 'Creative Project',
    title: 'Celestial Bodies of Our Solar System',
    description:
      'An educational infographic covering comets, asteroids, and meteorites — including the anatomy of a comet, the largest asteroids in the solar system, and the top meteorites found on Earth by mass.',
    tools: ['Figma', 'Information Design'],
    insight:
      "Ceres, discovered in 1801, is the largest asteroid in the belt and represents roughly a third of its total mass.",
    thumb: 'assets/img/creative/celestial-bodies-thumb.jpg',
    gallery: [{ src: 'assets/img/creative/celestial-bodies.jpg', caption: 'Comets, asteroids, and Earth\u2019s top 10 meteorites by mass' }],
    fileUrl: 'assets/projects/celestial-bodies.jpg',
    fileLabel: 'Open Full Image',
  },
];

const CATEGORY_ORDER = ['dashboard', 'analytical', 'creative'];
const CATEGORY_NAMES = {
  dashboard: 'Demo Dashboards',
  analytical: 'Analytical Projects',
  creative: 'Creative Projects',
};

// ═════════════════════════════════════════════════════════════
// ICONS (inline SVG)
// ═════════════════════════════════════════════════════════════
const ICONS = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  gradCap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

// ═════════════════════════════════════════════════════════════
// SAFE RUNNER — one failure never blocks the rest of the page
// ═════════════════════════════════════════════════════════════
function safe(label, fn) {
  try { fn(); } catch (e) { console.error('[portfolio] ' + label + ' failed:', e); }
}

// ═════════════════════════════════════════════════════════════
// ICON INJECTION
// ═════════════════════════════════════════════════════════════
function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon) el.innerHTML = icon;
  });
}

// ═════════════════════════════════════════════════════════════
// MOBILE DRAWER
// ═════════════════════════════════════════════════════════════
function initMobileMenu() {
  const drawer = document.querySelector('.mobile-drawer');
  if (!drawer) return;
  const openBtn = document.querySelector('.mobile-menu-toggle');
  const closeBtn = drawer.querySelector('[data-close-drawer]');
  const backdrop = drawer.querySelector('.mobile-drawer__backdrop');
  const links = drawer.querySelectorAll('.mobile-drawer__link');
  const open = () => { drawer.classList.add('is-open'); document.body.style.overflow = 'hidden'; };
  const close = () => { drawer.classList.remove('is-open'); document.body.style.overflow = ''; };
  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  links.forEach((l) => l.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// ═════════════════════════════════════════════════════════════
// NAVBAR
// ═════════════════════════════════════════════════════════════
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
function initScrollSpy() {
  const links = document.querySelectorAll('.navbar__link[data-section]');
  if (!links.length) return;
  const sections = Array.from(links).map((l) => document.getElementById(l.dataset.section)).filter(Boolean);
  if (!sections.length) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) {
      const id = visible[0].target.id;
      links.forEach((l) => l.classList.toggle('is-active', l.dataset.section === id));
    }
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  sections.forEach((s) => observer.observe(s));
}

// ═════════════════════════════════════════════════════════════
// BACK TO TOP
// ═════════════════════════════════════════════════════════════
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('is-visible', window.scrollY > 800);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ═════════════════════════════════════════════════════════════
// SCROLL REVEAL — robust: instant reveal for in-view content,
// observer for the rest, and a failsafe timeout so nothing can
// ever be permanently stuck invisible.
// ═════════════════════════════════════════════════════════════
function initReveal() {
  const els = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'));
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });

  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => el.classList.add('is-visible'));
  }, 1200);
}

// ═════════════════════════════════════════════════════════════
// PROJECTS — render grouped by category into tab panels
// ═════════════════════════════════════════════════════════════
function projectCardHTML(p) {
  return `
    <article class="project-card reveal" data-cat="${p.category}">
      <div class="project-card__media">
        <span class="project-card__cat">${p.categoryLabel}</span>
        <img src="${p.thumb}" alt="${p.title} preview" loading="lazy" />
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        ${p.insight ? `<div class="project-card__insight">${p.insight}</div>` : ''}
        <div class="project-card__tools">
          ${p.tools.map((t) => `<span class="tool-pill">${t}</span>`).join('')}
        </div>
        <div class="project-card__footer">
          <button type="button" class="btn btn--primary btn--sm" data-open-lightbox="${p.slug}">
            <span>View Project</span>
            ${ICONS.arrowUpRight}
          </button>
          <a href="${p.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">
            ${ICONS.fileText}
            <span>${p.fileLabel}</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  const tabsHost = document.querySelector('[data-project-tabs]');
  const panelsHost = document.querySelector('[data-project-panels]');
  if (!tabsHost || !panelsHost) return;

  // Build tab buttons
  tabsHost.innerHTML = CATEGORY_ORDER.map((cat, i) => {
    const count = PROJECTS.filter((p) => p.category === cat).length;
    return `
      <button type="button" class="tab${i === 0 ? ' is-active' : ''}" data-tab="${cat}">
        <span>${CATEGORY_NAMES[cat]}</span>
        <span class="tab__count">${count}</span>
      </button>
    `;
  }).join('');

  // Build panels
  panelsHost.innerHTML = CATEGORY_ORDER.map((cat, i) => `
    <div class="tab-panel${i === 0 ? ' is-active' : ''}" data-panel="${cat}">
      <div class="project-grid">
        ${PROJECTS.filter((p) => p.category === cat).map(projectCardHTML).join('')}
      </div>
    </div>
  `).join('');

  // Tab switching
  const tabs = tabsHost.querySelectorAll('.tab');
  const panels = panelsHost.querySelectorAll('.tab-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) => p.classList.toggle('is-active', p.dataset.panel === cat));
      // Reveal newly-shown cards immediately (they may not have been observed yet)
      safe('revealOnTabSwitch', initReveal);
    });
  });
}

// ═════════════════════════════════════════════════════════════
// LIGHTBOX
// ═════════════════════════════════════════════════════════════
function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  const titleEl = lightbox.querySelector('.lightbox__title');
  const bodyEl = lightbox.querySelector('.lightbox__body');
  const footEl = lightbox.querySelector('.lightbox__foot');
  const closeBtn = lightbox.querySelector('[data-close-lightbox]');
  const backdrop = lightbox.querySelector('.lightbox__backdrop');

  function open(slug) {
    const p = PROJECTS.find((proj) => proj.slug === slug);
    if (!p) return;
    titleEl.textContent = p.title;
    bodyEl.innerHTML = p.gallery.map((g) => `
      <figure>
        <img src="${g.src}" alt="${g.caption || p.title}" loading="lazy" />
      </figure>
    `).join('');
    footEl.innerHTML = `
      <a href="${p.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
        ${ICONS.fileText}
        <span>${p.fileLabel}</span>
      </a>
      <button type="button" class="btn btn--outline btn--sm" data-close-lightbox>
        <span>Close</span>
      </button>
    `;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Delegate open triggers (cards are injected dynamically)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-lightbox]');
    if (trigger) { open(trigger.dataset.openLightbox); return; }
    if (e.target.closest('[data-close-lightbox]')) close();
  });
  backdrop && backdrop.addEventListener('click', close);
  closeBtn && closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// ═════════════════════════════════════════════════════════════
// CV LINK WIRING
// ═════════════════════════════════════════════════════════════
function wireCvLinks() {
  const path = 'assets/cv/Khondokar_Jamal_E_Mustafa_CV.pdf';
  document.querySelectorAll('[data-cv-link]').forEach((a) => a.setAttribute('href', path));
}

// ═════════════════════════════════════════════════════════════
// BOOTSTRAP
// ═════════════════════════════════════════════════════════════
function bootstrap() {
  safe('injectIcons', injectIcons);
  safe('wireCvLinks', wireCvLinks);
  safe('initMobileMenu', initMobileMenu);
  safe('initNavbar', initNavbar);
  safe('initScrollSpy', initScrollSpy);
  safe('initBackToTop', initBackToTop);

  // Render projects FIRST, then reveal, so injected cards are never
  // permanently stuck invisible.
  safe('renderProjects', renderProjects);
  safe('initLightbox', initLightbox);
  safe('initReveal', initReveal);

  safe('footerYear', () => {
    const el = document.querySelector('[data-current-year]');
    if (el) el.textContent = new Date().getFullYear();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
