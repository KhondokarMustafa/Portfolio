/* =========================================================
   Khondokar Mustafa — Portfolio
   Vanilla JS. Single file. No build step.
   ========================================================= */

// ─────────────────────────────────────────────────────────────
// PROJECT DATA — single source of truth for both home + case pages
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: 'covid-herd-immunity',
    title: "The Tale of COVID-19's Herd Immunity",
    tagline:
      'A data-driven post-mortem of the U.S. pandemic — vaccinations, deaths, variants, and the seasonal patterns connecting them.',
    summary:
      'Co-authored a 16-page research analysis examining the U.S. pandemic trajectory across 2020–2023. Synthesized 11 CDC datasets covering 335M people to surface correlations between vaccination rates and mortality, map state-level impact, and trace variant evolution from Alpha to Omicron XBB.1.5.',
    tier: 'flagship',
    domain: 'Public Health',
    year: 2023,
    tools: ['Power BI', 'Excel', 'Statistical Analysis', 'Data Storytelling'],
    cover: {
      src: 'assets/img/projects/covid-herd-immunity/cover.png',
      alt: 'COVID-19 herd immunity research cover'
    },
    problem:
      "Three years into the pandemic, the U.S. response had generated overwhelming amounts of data — but no consolidated narrative tying vaccination effort to outcomes. The brief was to build a single, defensible story arc explaining what worked, what didn't, and where seasonality and variants shaped the curve.",
    approach: [
      'Sourced 11 public datasets from CDC, U.S. Census, and Our World in Data, covering vaccinations, distribution, deaths, infections, and variant surveillance from Dec 2020 to May 2023.',
      'Cleaned and joined the data into a unified analytical model, segmenting by state, manufacturer, variant lineage, and month.',
      'Built dashboards covering virus-related deaths (COVID vs. pneumonia vs. influenza), vaccine distribution-vs-administered gaps, and state-level density maps.',
      'Performed correlation analysis on deaths vs. vaccinations and deaths vs. infections to test the herd-immunity hypothesis quantitatively.',
      'Traced variant prevalence (Alpha, Beta, Delta, Gamma, Omicron sub-lineages) against seasonal cycles to identify winter-spike patterns.'
    ],
    insights: [
      'Inverse correlation between vaccinations and mortality: as vaccine administration scaled in 2021, monthly deaths fell from 86K (Jan 2021) to 1.9K (May 2023).',
      'Positive correlation between active infections and deaths — confirming transmission control as the critical lever even post-vaccine.',
      'Distribution-vs-administered gap of ~96M doses in 2021 alone, signaling significant logistical waste worth investigating.',
      'Omicron BA.1 peaked at 538K cases in January 2022 before nearly disappearing by mid-2023 — a textbook variant displacement curve.',
      'Clear seasonal mortality spikes every winter, validating the case for proactive winter vaccination campaigns.'
    ],
    impact:
      'The 16-page report became a reference artifact for understanding the U.S. pandemic at a glance, demonstrating end-to-end analytical rigor: from raw federal data to defensible policy-relevant insight. It remains my most comprehensive case study in multi-source synthesis and statistical storytelling.',
    metrics: [
      { value: '11', label: 'CDC datasets integrated' },
      { value: '335M', label: 'Population analyzed' },
      { value: '80.71%', label: 'Vaccination coverage tracked' },
      { value: '16 pp', label: 'Final research report' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/covid-herd-immunity/deaths-chart.png',
        alt: 'Annual virus-related deaths comparison',
        caption:
          'Annual virus-related death rates: COVID-19 vs. pneumonia vs. influenza'
      },
      {
        src: 'assets/img/projects/covid-herd-immunity/vaccine-distribution.png',
        alt: 'Vaccine distribution and administered doses by year and manufacturer',
        caption:
          'Distribution vs. administered: Pfizer led 60%+ of doses across all years'
      },
      {
        src: 'assets/img/projects/covid-herd-immunity/death-vs-vaccination.png',
        alt: 'Monthly correlation chart: deaths vs. administered vaccines',
        caption:
          'Inverse correlation between vaccination scale and monthly mortality'
      },
      {
        src: 'assets/img/projects/covid-herd-immunity/usa-maps.png',
        alt: 'U.S. state-level density maps: population, vaccination, infection, death',
        caption:
          'State-level analysis: California, Texas, and Florida absorbed the largest absolute impact'
      },
      {
        src: 'assets/img/projects/covid-herd-immunity/variants-timeline.png',
        alt: 'Timeline of Delta, Omicron BA.1, and Omicron XBB.1.5 variants',
        caption:
          'Variant displacement curves: Delta → Omicron BA.1 → XBB.1.5'
      }
    ]
  },
  {
    slug: 'bangladesh-economy',
    title: "What's Happening to the Economy of Bangladesh",
    tagline:
      'A macro-economic dashboard diagnosing record FX rates and rising inflation through trade, remittance, and FDI signals.',
    summary:
      "Designed a single-page diagnostic dashboard explaining Bangladesh's 2023 currency crisis. Combined inflation, trade balance, remittance flow, and Foreign Direct Investment data to identify the import-export gap as the dominant inflationary driver — and explained the central bank's Forward FOREX Contract policy response.",
    tier: 'flagship',
    domain: 'Economics',
    year: 2023,
    tools: ['Power BI', 'Figma', 'Economic Data Analysis', 'Storytelling'],
    cover: {
      src: 'assets/img/projects/bangladesh-economy/cover.png',
      alt: 'Bangladesh economy dashboard cover'
    },
    problem:
      "In late 2023, Bangladesh's currency hit record lows against the USD and inflation climbed past 9%. Public commentary was fragmented — most coverage isolated single indicators. The challenge: build one dashboard that connects the dots across four macro signals and explains why this is happening, not just what is happening.",
    approach: [
      'Compiled official data on monthly inflation (Jan–Aug 2023), USD/BDT exchange rate, remittance flow (Jan 2022 – Aug 2023), trade balance across two fiscal years, and FDI net investment.',
      'Visualized inflation as a step-up bar chart to emphasize the trajectory from 7.92% to 9.24% in eight months.',
      'Plotted import vs. export receipts side-by-side to expose the widening trade deficit (-$21.3B → -$36.9B).',
      'Tracked monthly remittance flow against deficit growth to test the "remittance as stabilizer" hypothesis.',
      "Connected the FDI decline to depreciation pressure, then explained the Bangladesh Bank's Forward FOREX Contract policy as the policy response."
    ],
    insights: [
      'Net export deficit nearly doubled year-over-year (-$21.3B → -$36.9B), making it the dominant pressure on the currency.',
      'Remittance flow remained stable across the period — strong enough to matter, not strong enough to offset the deficit.',
      'FDI declined from $2.65B to $2.43B between FY 2021-22 and FY 2022-23, signaling weakening investor confidence.',
      "The central bank's SMART rate (six-month moving average of treasury bills) was introduced as the new lending-rate anchor at 7.14%.",
      'Three-month vs. twelve-month forward contracts price USD at Tk 113.85 vs. Tk 123.91 — a meaningful policy lever for importers.'
    ],
    impact:
      'Translated four disconnected economic indicators into one coherent narrative that a non-economist could read in 90 seconds. The dashboard format made the project shareable on LinkedIn and demonstrated my ability to handle macro-financial storytelling, not just operational analytics.',
    metrics: [
      { value: '9.24%', label: 'Peak inflation tracked' },
      { value: '$36.9B', label: 'Net export deficit identified' },
      { value: '20 mo', label: 'Remittance data analyzed' },
      { value: '4', label: 'Macro indicators unified' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/bangladesh-economy/dashboard.png',
        alt: 'Single-page Bangladesh economy dashboard',
        caption: 'Single-page diagnostic: four indicators, one narrative'
      }
    ]
  },
  {
    slug: 'qatalyst-ma-deals',
    title: 'Qatalyst Partners — A Decade of Tech M&A',
    tagline:
      "Visualizing 10 years of Qatalyst Partners' advisory work to map tech-sector consolidation patterns from 2014 to 2023.",
    summary:
      'Compiled and visualized a decade of M&A deals advised by Qatalyst Partners, the boutique investment bank specializing in tech. Surfaced the most active acquirers, the largest deals, and the peak years of tech consolidation — culminating in a single-page bubble visualization tracking $200B+ in deal value.',
    tier: 'flagship',
    domain: 'Finance & M&A',
    year: 2024,
    tools: ['Data Extraction', 'Figma', 'Data Visualization', 'Research'],
    cover: {
      src: 'assets/img/projects/qatalyst-ma-deals/cover.png',
      alt: 'Qatalyst Partners decade of M&A deals visualization'
    },
    problem:
      "Tech M&A activity is fragmented across years and acquirers, making it difficult to spot consolidation patterns or strategic buyers. The brief: take Qatalyst Partners' publicly listed advisory work — a well-respected proxy for tech M&A flow — and turn ten years of it into one readable narrative.",
    approach: [
      "Extracted a decade of acquisition records (2014–2023) from Qatalyst Partners' public website.",
      'Cleaned and consolidated the dataset, retaining the top 5 deals by value per year for visual clarity.',
      'Encoded each deal as a sized bubble (deal value), grouped by year, color-coded by cohort — producing a single-page chronological flow.',
      'Identified the most active acquirers across the decade and ranked them by deal frequency.',
      'Annotated standout moments: peak years, largest individual deals, and cyclical patterns.'
    ],
    insights: [
      "Salesforce's acquisition of Slack ($29.2B) was the single largest deal in the decade.",
      '2021 and 2022 represented the peak of average deal value, aligning with the tech-funding boom.',
      'Cisco was the most active acquirer (6 deals), followed by Oracle and Vista Equity Partners (5 each).',
      "Microsoft's LinkedIn acquisition ($28.1B in 2016) anchored the mid-decade deal wave.",
      'Deal value distribution skewed heavily toward the top 5 per year — a long-tail pattern typical of consolidation cycles.'
    ],
    impact:
      'A visually distinctive single-page artifact that compresses ten years of public M&A activity into one image. It demonstrates web-based data extraction, large-scale visual encoding, and the discipline of editing down (top 5 per year) to keep the chart legible without losing the story.',
    metrics: [
      { value: '10 yrs', label: 'Of M&A activity mapped' },
      { value: '50+', label: 'Top deals visualized' },
      { value: '$29.2B', label: 'Largest deal: Slack → Salesforce' },
      { value: '6', label: 'Cisco acquisitions — most active' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/qatalyst-ma-deals/decade-bubble-chart.png',
        alt: 'Decade-long bubble chart of top tech M&A deals',
        caption: 'Decade in one image: 50+ top deals, color-coded by year'
      }
    ]
  },
  {
    slug: 'restaurant-meal-deal',
    title: 'Restaurant Meal Deal Analysis',
    tagline:
      'A category-performance dashboard that quantified meal-deal attach rate and identified the highest-performing items.',
    summary:
      'Built an operations dashboard for a multi-category restaurant analyzing 15,497 orders. Surfaced a 70.75% meal-deal attach rate, ranked categories by volume, and identified pizza and drinks as the dominant pairings — turning raw transaction data into a clear merchandising signal.',
    tier: 'featured',
    domain: 'Operations',
    year: 2024,
    tools: ['Power BI', 'Figma', 'Sales Analytics'],
    cover: {
      src: 'assets/img/projects/restaurant-meal-deal/cover.png',
      alt: 'Restaurant meal deal dashboard'
    },
    problem:
      'A multi-category restaurant wanted to know whether their meal-deal program was actually moving the needle. The dashboard had to quantify the attach rate, rank category performance, and present it in a format ready for an operations stand-up.',
    approach: [
      'Aggregated transaction data covering 15,497 orders across six categories.',
      'Computed the meal-deal attach rate as a share of total orders (10,964 of 15,497).',
      'Ranked categories by volume and visualized them as a horizontal bar chart with iconography for fast scanning.',
      "Designed the layout in Figma with a warm, food-friendly palette to suit the client's brand context."
    ],
    insights: [
      '70.75% of all orders included a meal deal — a strong signal the program is working.',
      'Pizza dominated category volume (50,005 units), followed by drinks (33,469).',
      'Sides and salads occupied the middle tier, while soup and burger trailed.',
      'The pizza-drink pairing is the obvious anchor for any future bundling promotion.'
    ],
    impact:
      'Compressed an operations question into a single visual that a manager can read in 10 seconds — with enough detail to drive merchandising decisions on the spot.',
    metrics: [
      { value: '15,497', label: 'Total orders analyzed' },
      { value: '70.75%', label: 'Meal-deal attach rate' },
      { value: '10,964', label: 'Meal deals sold' },
      { value: '6', label: 'Categories ranked' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/restaurant-meal-deal/dashboard.png',
        alt: 'Restaurant meal deal analysis dashboard',
        caption: 'Single-screen operations view: attach rate + category leaderboard'
      }
    ]
  },
  {
    slug: 'data-analytics-tools',
    title: 'Top Data Analytics Tools — A Trend Comparison',
    tagline:
      'A market-intelligence visualization comparing the relative reach of programming, BI, spreadsheet, and ETL tools.',
    summary:
      'Built a comparative trend visualization across four tool categories — programming languages, visualization tools, spreadsheets, and business intelligence platforms — ranking ten of the most-discussed tools by relative reach. Designed to give analysts and decision-makers a fast read on the current tool landscape.',
    tier: 'featured',
    domain: 'Market Research',
    year: 2024,
    tools: ['Figma', 'Research', 'Comparative Analysis'],
    cover: {
      src: 'assets/img/projects/data-analytics-tools/cover.png',
      alt: 'Trend comparison chart of top data analytics tools'
    },
    problem:
      'New analysts repeatedly ask the same question: which tools are actually worth learning? Most answers are anecdotal. The brief: build a single visual that shows the relative reach of leading tools across the categories that matter, in a layout you can read in seconds.',
    approach: [
      'Selected ten tools across four categories (programming, visualization, spreadsheet, BI).',
      'Compiled comparative reach data from public industry sources.',
      'Designed a category-grouped lollipop chart to show both relative ranking and category boundaries simultaneously.',
      'Used official tool logos and a dark technical palette to evoke "developer dashboard" aesthetics.'
    ],
    insights: [
      'Power BI led overall reach in this snapshot, narrowly ahead of Excel and Tableau.',
      'Python remains the dominant programming choice for analytics, well ahead of R.',
      'Talend held a surprisingly strong BI/ETL position relative to peers like Qlik View and SAS.',
      'Google Sheets lagged Excel by an order of magnitude despite cloud advantages — reflecting enterprise inertia.'
    ],
    impact:
      'A reusable reference visual that turns a recurring question into a one-glance answer. Doubles as an onboarding artifact for junior analysts choosing where to invest their learning time.',
    metrics: [
      { value: '10', label: 'Tools compared' },
      { value: '4', label: 'Tool categories' },
      { value: '1 visual', label: 'Reference artifact' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/data-analytics-tools/trend-comparison.png',
        alt: 'Lollipop chart comparing top 10 data analytics tools',
        caption: 'Lollipop comparison grouped by category for quick scanning'
      }
    ]
  },
  {
    slug: 'python-libraries-ds',
    title: 'Top Python Libraries for Data Science',
    tagline:
      "An educational timeline tracing the evolution of Python's data-science stack from 1991 to 2023.",
    summary:
      'Designed an editorial-grade infographic mapping the chronological release of ten essential Python libraries — SciPy, NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, TensorFlow, Theano, and PyTorch — with side-by-side comparison tables for each functional pair.',
    tier: 'featured',
    domain: 'Education',
    year: 2023,
    tools: ['Figma', 'Research', 'Information Design'],
    cover: {
      src: 'assets/img/projects/python-libraries-ds/cover.png',
      alt: 'Top Python libraries for data science timeline'
    },
    problem:
      'New data-science learners face an overwhelming choice of Python libraries with overlapping purposes. The brief: produce a single infographic that orients them — chronologically and functionally — in under a minute.',
    approach: [
      'Categorized ten libraries into five functional buckets: data visualization, deep learning, machine learning, numerical computing, and data analysis.',
      'Built a winding-road timeline anchoring each library to its original release year.',
      'Designed three side-by-side comparison tables for the most commonly confused pairs: SciPy vs. NumPy, Theano vs. PyTorch, Scikit-Learn vs. TensorFlow.',
      'Added Matplotlib/Seaborn/Plotly as a three-way visualization comparison — the most frequent question from beginners.'
    ],
    insights: [
      'NumPy (2006) and Pandas (2008) form the foundational layer everything else builds on.',
      'The deep-learning landscape consolidated rapidly: Theano (2007) was effectively replaced by TensorFlow (2015) and PyTorch (2016).',
      'Visualization fragmented along complexity lines: Matplotlib (custom), Seaborn (statistical), Plotly (interactive).',
      "Python's data-science stack is younger than most learners realize — most core libraries are post-2008."
    ],
    impact:
      'A reference infographic suitable for bootcamps, university intros, and onboarding decks — turning a confusing library landscape into a single page learners can return to.',
    metrics: [
      { value: '10', label: 'Libraries mapped' },
      { value: '32 yrs', label: 'Of stack evolution' },
      { value: '5', label: 'Functional categories' },
      { value: '4', label: 'Comparison tables' }
    ],
    gallery: [
      {
        src: 'assets/img/projects/python-libraries-ds/timeline.png',
        alt: 'Python data science library timeline infographic',
        caption: 'Timeline + comparison tables in a single learner-friendly page'
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
// PATH RESOLUTION — case pages live one folder deep
// ─────────────────────────────────────────────────────────────
function getBasePath() {
  // Case pages sit in /projects/; home is at root
  return window.location.pathname.includes('/projects/') ? '../' : '';
}

function projectUrl(slug) {
  return getBasePath() + 'projects/' + slug + '.html';
}

function assetUrl(path) {
  return getBasePath() + path;
}

// ─────────────────────────────────────────────────────────────
// ICONS — inline SVGs, no font/icon library needed
// ─────────────────────────────────────────────────────────────
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
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
};

// ─────────────────────────────────────────────────────────────
// THEME TOGGLE — persists in localStorage
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// MOBILE DRAWER
// ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const drawer = document.querySelector('.mobile-drawer');
  if (!drawer) return;

  const openBtn = document.querySelector('.mobile-menu-toggle');
  const closeBtn = drawer.querySelector('[data-close-drawer]');
  const backdrop = drawer.querySelector('.mobile-drawer__backdrop');
  const links = drawer.querySelectorAll('.mobile-drawer__link');

  function open() {
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  openBtn && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  links.forEach((l) => l.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

// ─────────────────────────────────────────────────────────────
// NAVBAR — scroll shrink + active-link tracking
// ─────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initScrollSpy() {
  const links = document.querySelectorAll('.navbar__link[data-section]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map((l) => document.getElementById(l.dataset.section))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) {
        const id = visible[0].target.id;
        links.forEach((l) => {
          l.classList.toggle('is-active', l.dataset.section === id);
        });
      }
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ─────────────────────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// BACK TO TOP
// ─────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const toggle = () => {
    btn.classList.toggle('is-visible', window.scrollY > 800);
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL — IntersectionObserver, applied to .reveal
// ─────────────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  els.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────────────────────
// COPY EMAIL
// ─────────────────────────────────────────────────────────────
function initCopyEmail() {
  const btn = document.querySelector('[data-copy-email]');
  if (!btn) return;

  const label = btn.querySelector('.copy-btn__label');
  const originalHTML = btn.innerHTML;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copyEmail);
      btn.classList.add('is-copied');
      btn.innerHTML = ICONS.check + '<span>Copied</span>';
      setTimeout(() => {
        btn.classList.remove('is-copied');
        btn.innerHTML = originalHTML;
      }, 2000);
    } catch (e) {
      // Clipboard API may fail (insecure context) — no-op
    }
  });
}

// ─────────────────────────────────────────────────────────────
// PROJECTS RENDERING (home page)
// ─────────────────────────────────────────────────────────────
function renderProjects() {
  const flagshipHost = document.querySelector('[data-projects-flagship]');
  const featuredHost = document.querySelector('[data-projects-featured]');
  if (!flagshipHost || !featuredHost) return;

  const flagship = PROJECTS.filter((p) => p.tier === 'flagship');
  const featured = PROJECTS.filter((p) => p.tier === 'featured');

  flagshipHost.innerHTML = flagship
    .map((p, i) => `
      <a href="${projectUrl(p.slug)}" class="project-card reveal reveal-delay-${Math.min(i, 3)}" aria-label="View case study: ${p.title}">
        <div class="project-card__cover">
          <img src="${assetUrl(p.cover.src)}" alt="${p.cover.alt}" loading="lazy" onerror="this.style.opacity='0.15'"/>
          <div class="project-card__cover-overlay"></div>
          <span class="project-card__domain">${p.domain}</span>
          <span class="project-card__year">${p.year}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__tagline">${p.tagline}</p>
          <div class="project-card__tools">
            ${p.tools.slice(0, 4).map((t) => `<span class="tool-pill">${t}</span>`).join('')}
            ${p.tools.length > 4 ? `<span class="tool-pill">+${p.tools.length - 4}</span>` : ''}
          </div>
          <div class="project-card__footer">
            <span class="project-card__cta">View case study</span>
            <span class="project-card__arrow">${ICONS.arrowUpRight}</span>
          </div>
        </div>
      </a>
    `).join('');

  featuredHost.innerHTML = featured
    .map((p, i) => `
      <a href="${projectUrl(p.slug)}" class="project-card--compact reveal reveal-delay-${Math.min(i, 3)}" aria-label="View case study: ${p.title}">
        <div class="project-card__head">
          <span class="project-card__domain-inline">${p.domain}</span>
          <span class="project-card__year">${p.year}</span>
        </div>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__tagline">${p.tagline}</p>
        <div class="project-card__tools">
          ${p.tools.slice(0, 3).map((t) => `<span class="tool-pill">${t}</span>`).join('')}
        </div>
        <span class="project-card__read">
          <span>Read case study</span>
          ${ICONS.arrowUpRight}
        </span>
      </a>
    `).join('');

  // Update count
  const count = document.querySelector('[data-featured-count]');
  if (count) count.textContent = featured.length + ' projects';

  // Kick reveal after inject
  requestAnimationFrame(() => initReveal());
}

// ─────────────────────────────────────────────────────────────
// CASE STUDY RENDERING (individual project pages)
// ─────────────────────────────────────────────────────────────
function renderCaseStudy() {
  const host = document.querySelector('[data-case-study]');
  if (!host) return;

  const slug = host.dataset.caseStudy;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    host.innerHTML = `<div class="container" style="padding: 8rem 0; text-align: center;">
      <h1 class="font-display" style="font-size: var(--fs-display-lg);">Project not found</h1>
      <p style="margin-top: 1rem; color: var(--text-secondary);">Slug: ${slug}</p>
      <a href="../index.html#projects" class="btn btn--primary" style="margin-top: 2rem;">${ICONS.arrowLeft}<span>Back to projects</span></a>
    </div>`;
    return;
  }

  // Update page metadata
  document.title = project.title + ' · Khondokar Mustafa';
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', project.tagline);

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  host.innerHTML = `
    <header class="case-hero">
      <div class="bg-grid"></div>
      <div class="bg-radial"></div>
      <div class="container">
        <a href="../index.html#projects" class="case-back">${ICONS.arrowLeft}<span>All projects</span></a>
        <div class="case-meta">
          <span class="case-meta__pill">${project.domain}</span>
          <span class="case-meta__year">· ${project.year}</span>
          ${project.tier === 'flagship' ? '<span class="case-meta__pill is-flagship">Flagship</span>' : ''}
        </div>
        <h1 class="case-title text-gradient">${project.title}</h1>
        <p class="case-tagline">${project.tagline}</p>
        <div class="case-tools">
          ${project.tools.map((t) => `<span class="tool-pill">${t}</span>`).join('')}
        </div>
        <div class="case-cover">
          <img src="${assetUrl(project.cover.src)}" alt="${project.cover.alt}" onerror="this.style.opacity='0.15'"/>
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
            <p class="case-section__eyebrow">The Problem</p>
            <h2 class="case-section__title">What we set out to solve.</h2>
          </header>
          <div class="case-section__body"><p>${project.problem}</p></div>
        </div>
      </div>
    </section>

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

    ${project.gallery && project.gallery.length ? `
      <section class="case-gallery">
        <div class="container">
          <div class="case-gallery__label"><span>Visual Walkthrough</span></div>
          <div class="case-gallery__list">
            ${project.gallery.map((img, i) => `
              <figure class="case-gallery__item">
                <div class="case-gallery__figure">
                  <img src="${assetUrl(img.src)}" alt="${img.alt}" loading="${i === 0 ? 'eager' : 'lazy'}" onerror="this.style.opacity='0.15'"/>
                </div>
                ${img.caption ? `
                  <figcaption class="case-gallery__caption">
                    <span class="case-gallery__caption-num">Fig. ${String(i + 1).padStart(2, '0')}</span>
                    <span>${img.caption}</span>
                  </figcaption>
                ` : ''}
              </figure>
            `).join('')}
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
          <div class="case-section__body"><p>${project.impact}</p></div>
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
          ` : '<div></div>'}
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

// ─────────────────────────────────────────────────────────────
// ICON INJECTION — replaces [data-icon="name"] with SVG
// ─────────────────────────────────────────────────────────────
function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon) el.innerHTML = icon;
  });
}

// ─────────────────────────────────────────────────────────────
// BOOTSTRAP
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  injectIcons();
  updateThemeIcons();

  // Theme toggle wiring
  document.querySelectorAll('[data-toggle-theme]').forEach((btn) => {
    btn.addEventListener('click', toggleTheme);
  });

  initMobileMenu();
  initNavbar();
  initScrollSpy();
  initScrollProgress();
  initBackToTop();
  initCopyEmail();

  renderProjects();
  renderCaseStudy();

  // Initial reveal pass
  initReveal();

  // Footer year
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
