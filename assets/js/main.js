/* =========================================================
   Khondokar Mustafa — Portfolio
   Vanilla JS + PDF.js for previews. No build step.
   ========================================================= */

// ═════════════════════════════════════════════════════════════
// PROJECT DATA — single source of truth for all pages
// Content extracted from actual uploaded PDFs. No invented facts.
// ═════════════════════════════════════════════════════════════
const FEATURED_PROJECTS = [
  {
    slug: 'covid-herd-immunity',
    title: "The Tale of COVID-19's Herd Immunity",
    tagline:
      "A 16-page research analysis of the U.S. pandemic — vaccinations, deaths, variants, and the seasonal patterns connecting them.",
    domain: 'Public Health',
    year: 2023,
    tools: ['Power BI', 'Excel', 'Data Analysis', 'Storytelling'],
    pdfFile: 'covid-herd-immunity.pdf',
    coverPage: 1,
    coverRatio: 'letter',
    insight: '80.71% of the U.S. population received vaccines. Deaths fell from 85,754 in January 2021 to 1,920 in May 2023 — a clear inverse correlation with vaccination rollout.',
    hasCaseStudy: true,

    // Full case study content
    summary:
      "Co-authored a 16-page research analysis examining the U.S. pandemic trajectory from 2020 to May 2023. Synthesized multiple CDC and public datasets covering the country's 335 million population to test the herd-immunity hypothesis, evaluate vaccine impact, map state-level outcomes, and trace variant evolution from Alpha through Omicron XBB.1.5.",
    problem:
      "Three years into the pandemic, the U.S. response had generated overwhelming volumes of public data — but no consolidated narrative tying vaccination effort to health outcomes. The brief was to build a single defensible story arc explaining what worked, what didn't, and where seasonality and variants shaped the curve.",
    approach: [
      'Sourced data from CDC (vaccinations, distribution, deaths, cases, variants), U.S. Census, USDA, Our World in Data, and NCBI covering December 2020 to May 2023.',
      'Cleaned and joined the data into a unified analytical model, segmenting by year, state, vaccine manufacturer, and variant lineage.',
      'Built dashboards for annual virus-related deaths (COVID-19 vs. pneumonia vs. influenza), vaccine distribution vs. administered gaps, and state-level population/vaccination/infection/death density maps.',
      'Ran correlation analysis on deaths vs. vaccinations and deaths vs. infections to quantitatively test the herd-immunity hypothesis.',
      'Traced variant prevalence (Alpha, Beta, Delta, Gamma, Omicron BA.1/BA.5/XBB.1.5) against seasonal cycles to identify winter-spike patterns.',
    ],
    insights: [
      'Inverse correlation between vaccinations and mortality — monthly deaths fell from 85,754 in January 2021 to 1,920 in May 2023 as vaccine administration scaled.',
      'Positive correlation between infections and deaths — confirming transmission control as the critical lever even after vaccine rollout.',
      'Distribution-vs-administered gap of approximately 96 million doses in 2021 alone, signaling significant logistical inefficiency worth investigating.',
      'Omicron BA.1 peaked at 538,301 cases in January 2022 before nearly disappearing (32 cases by May 2023) — a textbook variant displacement curve.',
      'State-level analysis: California absorbed the largest absolute impact — 39M population, 17.5M vaccinated, 11M infections, ~83K deaths — followed by Texas and Florida.',
      'Clear seasonal mortality spikes every winter, validating the case for proactive cold-season vaccination campaigns.',
    ],
    impact:
      'A comprehensive research artifact combining multi-source data synthesis, statistical analysis, and policy-relevant storytelling. Demonstrates end-to-end analytical rigor — from raw federal data to defensible public-health insight.',
    metrics: [
      { value: '335M', label: 'U.S. population analyzed' },
      { value: '80.71%', label: 'Vaccination coverage tracked' },
      { value: '96M', label: 'Distribution gap surfaced (2021)' },
      { value: '16 pp', label: 'Final research report' },
    ],
    sources: [
      { label: 'CDC', detail: 'Vaccinations, distribution allocations, and death counts' },
      { label: 'CDC Case Surveillance', detail: 'Weekly U.S. COVID-19 cases and deaths by state' },
      { label: 'U.S. Census Bureau', detail: 'State-level population data' },
      { label: 'Our World in Data', detail: 'Variant prevalence over time' },
      { label: 'NCBI', detail: 'Supporting research literature' },
    ],
    // Which pages of the PDF to render inline on the case study page
    galleryPages: [
      { page: 4, caption: 'Annual virus-related death rates — COVID-19 vs. pneumonia vs. influenza (2020–2023)' },
      { page: 5, caption: 'Vaccine distribution and administered doses by manufacturer — Pfizer led at 60%+ across all years' },
      { page: 7, caption: 'Correlation between monthly deaths and administered vaccinations — a clear inverse relationship' },
      { page: 10, caption: 'State-level density maps for population and vaccination — California leads at 17.5M doses administered' },
      { page: 13, caption: 'Variant displacement curves — Alpha → Delta → Omicron BA.1 → BA.5 → XBB.1.5' },
    ],
  },
  {
    slug: 'qatalyst-acquisition-deals',
    title: 'Qatalyst Partners — A Decade of Tech M&A',
    tagline:
      "Visualizing 10 years of Qatalyst Partners' advisory work to map tech-sector consolidation patterns from 2014 to 2023.",
    domain: 'Finance & M&A',
    year: 2024,
    tools: ['Data Extraction', 'Figma', 'Data Visualization', 'Research'],
    pdfFile: 'qatalyst-acquisition-deals.pdf',
    coverPage: 1,
    coverRatio: 'landscape',
    insight: "Salesforce's $29.2B acquisition of Slack was the decade's largest deal. Cisco was the most active acquirer with 6 acquisitions.",
    hasCaseStudy: true,

    summary:
      'Compiled and visualized a decade of M&A deals advised by Qatalyst Partners — the boutique investment bank specializing in technology M&A. Surfaced the most active acquirers, the largest deals, and the peak years of tech consolidation in a single-page bubble visualization spanning 2014 to 2023.',
    problem:
      "Tech M&A activity is fragmented across years and acquirers, making it difficult to spot consolidation patterns or strategic buyers. The brief: take Qatalyst Partners' publicly listed advisory work — a well-respected proxy for tech M&A flow — and turn ten years of it into one readable narrative.",
    approach: [
      "Extracted a decade of acquisition records (2014–2023) directly from Qatalyst Partners' public website.",
      'Cleaned and consolidated the dataset, retaining the top 5 deals by value per year for visual clarity.',
      'Encoded each deal as a sized bubble (deal value), grouped by year, color-coded by cohort — producing a single-page chronological flow.',
      'Identified the most active acquirers across the decade and ranked them by deal frequency.',
      'Annotated the visualization with standout moments: peak years, largest individual deals, and cyclical patterns.',
    ],
    insights: [
      "Salesforce's acquisition of Slack ($29.2B) was the single largest deal in the decade.",
      '2021 and 2022 represented the peak of average deal value, aligning with the tech-funding boom.',
      'Cisco was the most active acquirer (6 deals) across the decade.',
      'Oracle and Vista Equity Partners tied for second-most active (5 deals each).',
      'SAP and Thoma Bravo rounded out the top five most active acquirers (4 deals each).',
      'Deal value distribution skewed heavily toward the top 5 per year — a long-tail pattern typical of consolidation cycles.',
    ],
    impact:
      'A visually distinctive single-page artifact that compresses ten years of public M&A activity into one image. Demonstrates web-based data extraction, large-scale visual encoding, and the discipline of editing down (top 5 per year) to keep the chart legible without losing the story.',
    metrics: [
      { value: '10 yrs', label: 'Of M&A activity mapped' },
      { value: '$29.2B', label: 'Largest deal: Slack → Salesforce' },
      { value: '6', label: 'Cisco acquisitions — most active' },
      { value: 'Top 5', label: 'Deals per year retained' },
    ],
    sources: [
      { label: 'Qatalyst Partners public website', detail: 'Historical advisory transactions 2014–2023' },
    ],
    galleryPages: [], // single-page PDF — the cover IS the deliverable
  },
  {
    slug: 'restaurant-meal-deal-analysis',
    title: 'Restaurant Meal Deal Analysis',
    tagline:
      'A category-performance dashboard quantifying meal-deal attach rate and ranking the highest-performing menu categories.',
    domain: 'Operations',
    year: 2024,
    tools: ['Power BI', 'Figma', 'Sales Analytics'],
    pdfFile: 'restaurant-meal-deal-analysis.pdf',
    coverPage: 1,
    coverRatio: 'landscape',
    insight: '70.75% of 15,497 orders included a meal deal — a strong signal the program is working. Pizza led category volume at 50,005 items.',
    hasCaseStudy: true,

    summary:
      'Built an operations dashboard analyzing 15,497 restaurant orders across six menu categories. Surfaced a 70.75% meal-deal attach rate, ranked categories by volume, and identified pizza and drinks as the dominant pairings — turning raw transaction data into a clear merchandising signal on one screen.',
    problem:
      'A multi-category restaurant wanted to know whether their meal-deal program was actually moving the needle. The dashboard had to quantify the attach rate, rank category performance, and present it in a format ready for an operations stand-up.',
    approach: [
      'Aggregated transaction data covering 15,497 orders across six menu categories.',
      'Computed the meal-deal attach rate as a share of total orders (10,964 meal deals of 15,497 total = 70.75%).',
      'Ranked categories by item volume and visualized them as a horizontal bar chart with iconography for fast scanning.',
      "Designed the layout in Figma with a warm, food-friendly palette to suit the client's brand context.",
    ],
    insights: [
      '70.75% of all orders included a meal deal — 10,964 of 15,497 total orders.',
      'Pizza dominated category volume with 50,005 items, followed by drinks at 33,469.',
      'Side (20,733) and salad (17,197) held the middle tier of category performance.',
      'Soup (7,432) and burger (6,489) trailed as the lowest-volume categories.',
      'The pizza-drink pairing is the obvious anchor for any future bundling promotion.',
    ],
    impact:
      "Compressed an operations question into a single visual a manager can read in ten seconds — with enough detail to drive merchandising decisions on the spot.",
    metrics: [
      { value: '15,497', label: 'Total orders analyzed' },
      { value: '70.75%', label: 'Meal-deal attach rate' },
      { value: '10,964', label: 'Meal deals sold' },
      { value: '6', label: 'Menu categories ranked' },
    ],
    sources: [
      { label: 'Client transaction data', detail: 'Aggregated order-level records' },
    ],
    galleryPages: [], // single-page PDF
  },
];

const INFOGRAPHICS = [
  {
    slug: 'top-data-analytic-tools',
    title: 'Top Data Analytics Tools',
    domain: 'Market Research',
    year: 2024,
    description:
      'A comparative trend visualization ranking leading tools across four categories — programming languages, visualization tools, spreadsheets, and BI platforms.',
    pdfFile: 'top-data-analytic-tools.pdf',
    coverRatio: 'landscape',
    tools: ['Figma', 'Research'],
  },
  {
    slug: 'top-python-libraries',
    title: 'Top Python Libraries for Data Science',
    domain: 'Education',
    year: 2023,
    description:
      "A chronological timeline of ten essential Python libraries from 1991 to 2023, grouped by function, with side-by-side comparisons of the most commonly confused pairs.",
    pdfFile: 'top-python-libraries.pdf',
    coverRatio: 'landscape',
    tools: ['Figma', 'Information Design'],
  },
  {
    slug: 'life-science-ai',
    title: 'Life Science × AI',
    domain: 'Healthcare',
    year: 2023,
    description:
      'A newsletter exploring the transformative intersection of AI and healthcare — RPA-enabled treatment, personalized care via data analytics, smart pills, and image-based cancer detection.',
    pdfFile: 'life-science-ai.pdf',
    coverRatio: 'letter',
    tools: ['Figma', 'Editorial Design'],
  },
  {
    slug: 'celestial-bodies',
    title: 'Celestial Bodies of Our Solar System',
    domain: 'Science',
    year: 2023,
    description:
      'An educational infographic covering asteroids, comets, and meteorites — including the top 10 meteorites by mass and the five largest asteroids in the solar system.',
    pdfFile: 'celestial-bodies.pdf',
    coverRatio: 'landscape',
    tools: ['Figma', 'Information Design'],
  },
];

// Combined index for case study prev/next navigation (only featured have cases)
const ALL_CASE_STUDIES = FEATURED_PROJECTS.filter((p) => p.hasCaseStudy);

// ═════════════════════════════════════════════════════════════
// PATH RESOLUTION
// ═════════════════════════════════════════════════════════════
function getBasePath() {
  // Case study pages live in /projects/, so they need to climb up one level
  return window.location.pathname.includes('/projects/') ? '../' : './';
}
function projectUrl(slug) {
  return getBasePath() + 'projects/' + slug + '.html';
}
function assetUrl(path) {
  return getBasePath() + path;
}
function pdfUrl(filename) {
  return getBasePath() + 'assets/projects/' + filename;
}
function cvUrl() {
  return getBasePath() + 'assets/cv/Khondokar_Mustafa_CV.pdf';
}

// ═════════════════════════════════════════════════════════════
// ICONS (inline SVG, no icon library dependency)
// ═════════════════════════════════════════════════════════════
const ICONS = {
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M18 6l-2 2M6 18l2-2M18 18l-2-2M6 6l2 2"/></svg>',
  quote: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>',
  gradCap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  bookOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
};

// ═════════════════════════════════════════════════════════════
// PDF.js SETUP
// pdfjsLib is loaded via CDN <script> tag in the HTML.
// ═════════════════════════════════════════════════════════════
const PDFJS_WORKER_SRC =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

function initPdfJs() {
  if (typeof pdfjsLib === 'undefined') {
    console.warn('[portfolio] pdf.js not loaded — PDF previews will show fallback.');
    return false;
  }
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;
  return true;
}

// Cache PDF documents so multiple preview cards for the same file don't refetch
const _pdfCache = new Map();
function loadPdf(url) {
  if (_pdfCache.has(url)) return _pdfCache.get(url);
  const p = pdfjsLib
    .getDocument({ url, disableAutoFetch: true, disableStream: true })
    .promise;
  _pdfCache.set(url, p);
  return p;
}

/**
 * Render a specific page of a PDF into a canvas inside the given host element.
 * Uses IntersectionObserver so rendering is deferred until the card is near
 * the viewport — good for pages with many previews.
 */
function renderPdfPreview(host) {
  const pdfPath = host.dataset.pdfPreview;
  const pageNum = parseInt(host.dataset.pdfPage || '1', 10);
  if (!pdfPath) return;

  const spinner = host.querySelector('.pdf-preview__spinner');
  const canvas = host.querySelector('canvas');
  const fallback = host.querySelector('.pdf-preview__fallback');
  if (!canvas) return;

  // No pdf.js? Show fallback.
  if (typeof pdfjsLib === 'undefined') {
    host.classList.add('has-error');
    return;
  }

  const doRender = async () => {
    try {
      const url = pdfUrl(pdfPath);
      const pdf = await loadPdf(url);
      const page = await pdf.getPage(pageNum);

      // Compute render scale based on the host's rendered width and DPR
      // for a crisp result at any zoom level.
      const dpr = window.devicePixelRatio || 1;
      const hostWidth = host.getBoundingClientRect().width || 400;
      const viewportBase = page.getViewport({ scale: 1 });
      const scale = (hostWidth / viewportBase.width) * dpr;
      const viewport = page.getViewport({ scale });

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';

      // Ensure the host reflects the true page aspect ratio so the layout
      // doesn't jump when the page finishes rendering.
      const naturalRatio = viewportBase.width / viewportBase.height;
      host.style.aspectRatio = String(naturalRatio);

      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;
      host.classList.add('is-loaded');
    } catch (err) {
      console.warn('[pdf-preview] failed to render', pdfPath, 'page', pageNum, err);
      host.classList.add('has-error');
    }
  };

  // Use IntersectionObserver for lazy rendering; fall back to immediate render
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          obs.unobserve(host);
          doRender();
        }
      });
    }, { rootMargin: '400px 0px' });
    io.observe(host);
  } else {
    doRender();
  }
}

function initAllPdfPreviews() {
  document.querySelectorAll('.pdf-preview[data-pdf-preview]').forEach((host) => {
    renderPdfPreview(host);
  });
}

// Rerender previews on window resize (debounced) so DPR-based scaling stays crisp
let _resizeTimer;
function bindPreviewResize() {
  window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
      document.querySelectorAll('.pdf-preview.is-loaded').forEach((host) => {
        host.classList.remove('is-loaded');
        renderPdfPreview(host);
      });
    }, 250);
  });
}

// ═════════════════════════════════════════════════════════════
// PDF preview HTML fragment (used everywhere previews appear)
// ═════════════════════════════════════════════════════════════
function pdfPreviewHTML(pdfFile, page = 1, ratio = 'landscape') {
  return `
    <div class="pdf-preview" data-pdf-preview="${pdfFile}" data-pdf-page="${page}" data-ratio="${ratio}">
      <canvas aria-hidden="true"></canvas>
      <div class="pdf-preview__spinner">Loading</div>
      <div class="pdf-preview__fallback">
        ${ICONS.fileText}
        <span>PDF preview unavailable</span>
      </div>
    </div>
  `;
}

// ═════════════════════════════════════════════════════════════
// THEME
// ═════════════════════════════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcons();
}
function updateThemeIcons() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const icon = current === 'dark' ? ICONS.moon : ICONS.sun;
  document.querySelectorAll('[data-theme-icon]').forEach((el) => {
    el.innerHTML = icon;
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
// NAVBAR — scroll shrink + active-link tracking
// ═════════════════════════════════════════════════════════════
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => { navbar.classList.toggle('is-scrolled', window.scrollY > 16); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
function initScrollSpy() {
  const links = document.querySelectorAll('.navbar__link[data-section]');
  if (!links.length) return;
  const sections = Array.from(links).map((l) => document.getElementById(l.dataset.section)).filter(Boolean);
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
// SCROLL PROGRESS
// ═════════════════════════════════════════════════════════════
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  const update = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? scroll / height : 0;
    bar.style.transform = `scaleX(${progress})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
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
// SCROLL REVEAL
// ═════════════════════════════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
  els.forEach((el) => observer.observe(el));
}

// ═════════════════════════════════════════════════════════════
// COPY EMAIL
// ═════════════════════════════════════════════════════════════
function initCopyEmail() {
  const btn = document.querySelector('[data-copy-email]');
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copyEmail);
      btn.classList.add('is-copied');
      btn.innerHTML = ICONS.check + '<span>Copied</span>';
      setTimeout(() => { btn.classList.remove('is-copied'); btn.innerHTML = originalHTML; }, 2000);
    } catch (e) { /* clipboard blocked */ }
  });
}

// ═════════════════════════════════════════════════════════════
// HOMEPAGE — Featured project cards
// ═════════════════════════════════════════════════════════════
function renderFeaturedProjects() {
  const host = document.querySelector('[data-projects-flagship]');
  if (!host) return;

  host.innerHTML = FEATURED_PROJECTS.map((p, i) => `
    <article class="project-card reveal reveal-delay-${Math.min(i, 3)}">
      <div class="project-card__cover">
        <span class="project-card__domain">${p.domain}</span>
        <span class="project-card__year">${p.year}</span>
        ${pdfPreviewHTML(p.pdfFile, p.coverPage || 1, p.coverRatio || 'landscape')}
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__tagline">${p.tagline}</p>
        ${p.insight ? `
          <div class="project-card__insight">
            <div class="project-card__insight-label">${ICONS.sparkles}<span>Key insight</span></div>
            ${p.insight}
          </div>
        ` : ''}
        <div class="project-card__tools">
          ${p.tools.slice(0, 4).map((t) => `<span class="tool-pill">${t}</span>`).join('')}
        </div>
        <div class="project-card__footer">
          <a href="${projectUrl(p.slug)}" class="btn btn--primary btn--sm">
            <span>Case study</span>
            ${ICONS.arrowUpRight}
          </a>
          <a href="${pdfUrl(p.pdfFile)}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">
            ${ICONS.fileText}
            <span>Open PDF</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// ═════════════════════════════════════════════════════════════
// HOMEPAGE — Infographics grid
// ═════════════════════════════════════════════════════════════
function renderInfographics() {
  const host = document.querySelector('[data-projects-infographics]');
  if (!host) return;

  host.innerHTML = INFOGRAPHICS.map((p, i) => `
    <a
      href="${pdfUrl(p.pdfFile)}"
      target="_blank"
      rel="noopener noreferrer"
      class="info-card reveal reveal-delay-${Math.min(i, 3)}"
      aria-label="Open ${p.title} PDF"
    >
      <div class="info-card__preview">
        ${pdfPreviewHTML(p.pdfFile, 1, p.coverRatio || 'landscape')}
      </div>
      <div class="info-card__body">
        <p class="info-card__domain">${p.domain} · ${p.year}</p>
        <h3 class="info-card__title">${p.title}</h3>
        <p class="info-card__desc">${p.description}</p>
        <span class="info-card__action">
          <span>Open PDF</span>
          ${ICONS.arrowUpRight}
        </span>
      </div>
    </a>
  `).join('');

  const count = document.querySelector('[data-infographics-count]');
  if (count) count.textContent = INFOGRAPHICS.length + ' pieces';
}

// ═════════════════════════════════════════════════════════════
// CASE STUDY RENDERING
// ═════════════════════════════════════════════════════════════
function renderCaseStudy() {
  const host = document.querySelector('[data-case-study]');
  if (!host) return;

  const slug = host.dataset.caseStudy;
  const project = ALL_CASE_STUDIES.find((p) => p.slug === slug);
  if (!project) {
    host.innerHTML = `<div class="container" style="padding: 8rem 0; text-align: center;">
      <h1 class="font-display" style="font-size: var(--fs-display-lg);">Case study not found</h1>
      <p style="margin-top: 1rem; color: var(--text-secondary);">Slug: ${slug}</p>
      <a href="../index.html#projects" class="btn btn--primary" style="margin-top: 2rem;">${ICONS.arrowLeft}<span>Back to projects</span></a>
    </div>`;
    return;
  }

  // Update page metadata
  document.title = project.title + ' · Khondokar Mustafa';
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', project.tagline);

  const idx = ALL_CASE_STUDIES.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? ALL_CASE_STUDIES[idx - 1] : null;
  const next = idx < ALL_CASE_STUDIES.length - 1 ? ALL_CASE_STUDIES[idx + 1] : null;

  host.innerHTML = `
    <header class="case-hero">
      <div class="bg-grid"></div>
      <div class="bg-radial"></div>
      <div class="container">
        <a href="../index.html#projects" class="case-back">${ICONS.arrowLeft}<span>All projects</span></a>
        <div class="case-meta">
          <span class="case-meta__pill">${project.domain}</span>
          <span class="case-meta__year">· ${project.year}</span>
          <span class="case-meta__pill is-flagship">Featured Case Study</span>
        </div>
        <h1 class="case-title text-gradient">${project.title}</h1>
        <p class="case-tagline">${project.tagline}</p>
        <div class="case-tools">
          ${project.tools.map((t) => `<span class="tool-pill">${t}</span>`).join('')}
        </div>
        <div class="case-actions">
          <a href="${pdfUrl(project.pdfFile)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
            ${ICONS.fileText}
            <span>Open Full PDF</span>
          </a>
          <a href="${pdfUrl(project.pdfFile)}" download class="btn btn--secondary">
            ${ICONS.download}
            <span>Download</span>
          </a>
        </div>
        <div class="case-cover">
          ${pdfPreviewHTML(project.pdfFile, project.coverPage || 1, project.coverRatio || 'landscape')}
        </div>
        ${project.metrics && project.metrics.length ? `
          <div class="case-metrics">
            ${project.metrics.map((m) => `
              <div class="metric-block">
                <p class="metric-block__value">${m.value}</p>
                <p class="metric-block__label">${m.label}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </header>

    <section class="case-section">
      <div class="container">
        <div class="case-section__grid">
          <header class="case-section__head">
            <p class="case-section__eyebrow">Overview</p>
            <h2 class="case-section__title">At a glance.</h2>
          </header>
          <div class="case-section__body"><p>${project.summary}</p></div>
        </div>
      </div>
    </section>

    <section class="case-section">
      <div class="container">
        <div class="case-section__grid">
          <header class="case-section__head">
            <p class="case-section__eyebrow">The Question</p>
            <h2 class="case-section__title">What we set out to solve.</h2>
          </header>
          <div class="case-section__body"><p>${project.problem}</p></div>
        </div>
      </div>
    </section>

    ${project.sources && project.sources.length ? `
      <section class="case-section">
        <div class="container">
          <div class="case-section__grid">
            <header class="case-section__head">
              <p class="case-section__eyebrow">Data Sources</p>
              <h2 class="case-section__title">Where the numbers came from.</h2>
            </header>
            <div class="case-section__body">
              <ul class="case-list--bullet case-list--sources">
                ${project.sources.map((s) => `
                  <li><strong>${s.label}</strong><span>${s.detail}</span></li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ` : ''}

    <section class="case-section">
      <div class="container">
        <div class="case-section__grid">
          <header class="case-section__head">
            <p class="case-section__eyebrow">Approach</p>
            <h2 class="case-section__title">How the work came together.</h2>
          </header>
          <div class="case-section__body">
            <ol class="case-list--numbered">
              ${project.approach.map((step, i) => `
                <li data-step="${String(i + 1).padStart(2, '0')}"><p>${step}</p></li>
              `).join('')}
            </ol>
          </div>
        </div>
      </div>
    </section>

    ${project.galleryPages && project.galleryPages.length ? `
      <section class="case-gallery">
        <div class="container">
          <div class="case-gallery__label"><span>Selected Report Pages</span></div>
          <div class="case-gallery__list">
            ${project.galleryPages.map((g, i) => `
              <figure class="case-gallery__item">
                <div class="case-gallery__figure">
                  ${pdfPreviewHTML(project.pdfFile, g.page, 'letter')}
                </div>
                <figcaption class="case-gallery__caption">
                  <span class="case-gallery__caption-num">Page ${String(g.page).padStart(2, '0')}</span>
                  <span>${g.caption}</span>
                </figcaption>
              </figure>
            `).join('')}
          </div>
          <div class="case-gallery__footer">
            <p class="case-gallery__footer-text">
              <strong>Above:</strong> selected pages from the full report.
              The complete 16-page analysis includes seasonal-trend correlations,
              per-state deep dives, and full methodology notes.
            </p>
            <a href="${pdfUrl(project.pdfFile)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
              ${ICONS.bookOpen}
              <span>View Full 16-Page Report</span>
            </a>
          </div>
        </div>
      </section>
    ` : ''}

    <section class="case-section">
      <div class="container">
        <div class="case-section__grid">
          <header class="case-section__head">
            <p class="case-section__eyebrow">Insights</p>
            <h2 class="case-section__title">What the data revealed.</h2>
          </header>
          <div class="case-section__body">
            <ul class="case-list--bullet">
              ${project.insights.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="case-section">
      <div class="container">
        <div class="case-section__grid">
          <header class="case-section__head">
            <p class="case-section__eyebrow">Impact</p>
            <h2 class="case-section__title">Why it mattered.</h2>
          </header>
          <div class="case-section__body">
            <p>${project.impact}</p>
            <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 0.75rem;">
              <a href="${pdfUrl(project.pdfFile)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                ${ICONS.fileText}
                <span>Open Full PDF</span>
              </a>
              <a href="../index.html#projects" class="btn btn--secondary">
                ${ICONS.arrowLeft}
                <span>Back to projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <nav class="case-nav" aria-label="Project navigation">
      <div class="container">
        <div class="case-nav__grid">
          ${prev ? `
            <a href="${prev.slug}.html" class="case-nav__card">
              <span class="case-nav__label">${ICONS.arrowLeft}<span>Previous</span></span>
              <span class="case-nav__title">${prev.title}</span>
              <span class="case-nav__sub">${prev.domain} · ${prev.year}</span>
            </a>
          ` : `<div></div>`}
          ${next ? `
            <a href="${next.slug}.html" class="case-nav__card is-next">
              <span class="case-nav__label"><span>Next</span>${ICONS.arrowRight}</span>
              <span class="case-nav__title">${next.title}</span>
              <span class="case-nav__sub">${next.domain} · ${next.year}</span>
            </a>
          ` : `
            <a href="../index.html#projects" class="case-nav__card is-next">
              <span class="case-nav__label"><span>Back</span>${ICONS.arrowRight}</span>
              <span class="case-nav__title">All projects</span>
              <span class="case-nav__sub">Explore the full portfolio</span>
            </a>
          `}
        </div>
      </div>
    </nav>
  `;
}

// ═════════════════════════════════════════════════════════════
// ICON INJECTION — swap [data-icon="name"] → inline SVG
// ═════════════════════════════════════════════════════════════
function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon) el.innerHTML = icon;
  });
}

// ═════════════════════════════════════════════════════════════
// CV LINK WIRING — set all download/CV anchors to the real path
// ═════════════════════════════════════════════════════════════
function wireCvLinks() {
  const path = cvUrl();
  document.querySelectorAll('[data-cv-link]').forEach((a) => {
    a.setAttribute('href', path);
  });
}

// ═════════════════════════════════════════════════════════════
// BOOTSTRAP
// ═════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  injectIcons();
  updateThemeIcons();
  wireCvLinks();

  document.querySelectorAll('[data-toggle-theme]').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });

  initMobileMenu();
  initNavbar();
  initScrollSpy();
  initScrollProgress();
  initBackToTop();
  initCopyEmail();

  // Render dynamic sections (home page has these; case pages have data-case-study)
  renderFeaturedProjects();
  renderInfographics();
  renderCaseStudy();

  // Initialise PDF.js AFTER content is rendered so the observers can see the hosts
  initPdfJs();
  initAllPdfPreviews();
  bindPreviewResize();

  // Kick reveal AFTER rendering so injected elements are observed
  initReveal();

  // Footer year
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
