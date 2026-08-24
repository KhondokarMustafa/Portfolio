# Khondokar Mustafa — Data Analyst Portfolio

A production-ready static portfolio. No frameworks, no build step, no npm.
All 7 project PDFs are included and rendered inline as visual previews
via PDF.js. Deploy by pushing to a GitHub repo and enabling Pages.

---

## What's in the box

```
portfolio/
├── index.html                                       # Home (hero, about, skills, projects, experience, certifications, contact)
├── .nojekyll                                        # Tells GitHub Pages to skip Jekyll
├── README.md                                        # This file
│
├── projects/                                        # Case study pages (3 featured projects)
│   ├── covid-herd-immunity.html
│   ├── qatalyst-acquisition-deals.html
│   └── restaurant-meal-deal-analysis.html
│
└── assets/
    ├── css/
    │   └── style.css                                # Full design system, all components
    ├── js/
    │   └── main.js                                  # All interactivity + project data + PDF.js integration
    ├── projects/                                    # Actual project PDFs — rendered as previews AND downloadable
    │   ├── covid-herd-immunity.pdf                    (16 pages, 1.8 MB)
    │   ├── qatalyst-acquisition-deals.pdf             (1 page)
    │   ├── restaurant-meal-deal-analysis.pdf          (1 page)
    │   ├── top-data-analytic-tools.pdf                (1 page)
    │   ├── top-python-libraries.pdf                   (1 page)
    │   ├── life-science-ai.pdf                        (1 page)
    │   └── celestial-bodies.pdf                       (1 page)
    └── cv/
        └── Khondokar_Mustafa_CV.pdf                 (2 pages)
```

Everything you need is already in this folder. Nothing to install, nothing
to configure, no screenshots to make. **Just push and deploy.**

---

## Deploy to GitHub Pages — 3 steps, ~2 minutes

### 1. Create a GitHub repo

Create a new repo on GitHub. Two common naming choices:
- **`portfolio`** (or any name) → live at `https://<username>.github.io/portfolio/`
- **`<username>.github.io`** → live at the cleaner `https://<username>.github.io/`

Both work — the site uses relative paths, so either deploys correctly.

### 2. Push these files

From this folder in your terminal:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. Enable Pages

In your GitHub repo:
- **Settings** → **Pages** (left sidebar)
- **Source**: Deploy from a branch
- **Branch**: `main` and `/ (root)`
- **Save**

GitHub builds the site in ~30–60 seconds. The live URL appears at the top of
the Pages settings once ready. Every subsequent `git push` re-deploys the
site automatically.

---

## Testing locally

The simplest option: **double-click `index.html`.** It opens in your browser
and works. PDF previews load from the same folder — no server needed.

However, some browsers have stricter local-file security policies that can
block PDF.js from fetching the PDFs. If previews don't render locally, run
a tiny local server:

```bash
# Python 3 (probably already installed)
python -m http.server 8000
```

or with Node:

```bash
npx serve .
```

Then open `http://localhost:8000`. This exactly matches how GitHub Pages
will serve the site.

---

## What each part does

### Featured Case Studies (3)

- **The Tale of COVID-19's Herd Immunity** — a 16-page research report. On
  the case study page, 5 selected pages are rendered inline (deaths chart,
  vaccination chart, correlation chart, state maps, variants timeline)
  followed by a "View Full 16-Page Report" button.
- **Qatalyst Partners — A Decade of Tech M&A** — single-page bubble chart
  rendered as the case-study cover.
- **Restaurant Meal Deal Analysis** — single-page operations dashboard
  rendered as the case-study cover.

Each of these has its own HTML page under `/projects/` and shows the full
case-study arc: overview → question → data sources → approach → insights
→ impact.

### Data Visualizations & Infographics (4)

- **Top Data Analytics Tools** — tool comparison across four categories
- **Top Python Libraries for Data Science** — 1991–2023 timeline
- **Life Science × AI** — healthcare/AI newsletter
- **Celestial Bodies of Our Solar System** — science infographic

These render as smaller cards on the home page with a PDF preview + a
direct "Open PDF" button. No case-study page — the PDF **is** the deliverable.

### PDF.js integration

PDF previews use [PDF.js 3.11.174](https://mozilla.github.io/pdf.js/)
loaded from cdnjs. Every preview:

- Renders **page 1 by default** (or a specified page for the COVID gallery)
- Is **lazy-loaded** via `IntersectionObserver` — nothing renders until you
  scroll near it, so the page stays fast
- Uses **device pixel ratio** for a crisp image on retina displays
- **Preserves the original PDF aspect ratio** — no distortion
- Shows a **loading spinner** while rendering
- Shows a **clean fallback icon** if rendering fails
- **Re-renders on window resize** so it stays sharp after zoom/rotate

The PDFs themselves are served as normal static files, so all "Open PDF"
buttons open them in a new browser tab using the browser's native PDF viewer.

---

## Common tweaks

### Update your CV

Replace `assets/cv/Khondokar_Mustafa_CV.pdf` with your new file — keep the
same filename and every "Download CV" button on the site points to the fresh
version automatically.

### Add or edit a project

All project data lives in **one place**: the `FEATURED_PROJECTS` and
`INFOGRAPHICS` arrays at the top of `assets/js/main.js`. Edit an object and
both the home card and the case study page update.

To add a new **featured** project:
1. Drop the PDF in `assets/projects/`.
2. Add a new object to `FEATURED_PROJECTS` in `main.js`.
3. Copy any existing file in `projects/` (e.g. `qatalyst-acquisition-deals.html`)
   and change the `data-case-study="..."` attribute on `<main>` to your new slug.

To add a new **infographic**:
1. Drop the PDF in `assets/projects/`.
2. Add a new object to `INFOGRAPHICS` in `main.js`. That's it — no HTML page needed.

### Change the color scheme

Design tokens live at the very top of `assets/css/style.css` under `:root`
(dark theme) and `:root[data-theme='light']` (light theme). Change
`--accent-primary`, `--accent-secondary`, and `--accent-tertiary` to reskin
the entire site.

### Update your LinkedIn link

Search `index.html` and the three files in `projects/` for
`linkedin.com/in/khondokarmustafa` — replace with your real URL if different.

---

## Custom domain (optional)

If you own a domain (e.g. `khondokarmustafa.com`):

1. Create a file named `CNAME` (no extension) at the repo root, containing
   exactly one line with your domain:
   ```
   khondokarmustafa.com
   ```

2. In your registrar's DNS settings, add A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. In the repo's Pages settings, enter your domain in the Custom domain
   field. Check **Enforce HTTPS** once the SSL certificate provisions
   (~10 minutes).

---

## Tech notes

- **Zero JavaScript frameworks.** Vanilla JS in a single file.
- **Zero CSS frameworks.** Pure CSS with custom properties.
- **Zero build step.** No npm, no webpack, no Vite, no Tailwind CLI, no PostCSS.
- **One CDN dependency:** PDF.js (`cdnjs.cloudflare.com`). Everything else
  is served from your repo.
- **All internal paths are relative.** The site works whether deployed at
  `<user>.github.io/` (user site) or `<user>.github.io/portfolio/` (project site).
- **Fully accessible.** Skip link, keyboard nav, focus rings, semantic HTML,
  ARIA labels, `prefers-reduced-motion` support.
- **SEO-ready.** Meta description, Open Graph, Twitter card, JSON-LD `Person`
  schema, semantic headings.
- **Fast.** Zero framework payload. Fonts preconnected. PDF previews
  lazy-rendered on scroll.
- **Dark/light themes** with localStorage persistence and system-preference
  respect on first visit.

---

## Credits

Design, content, and PDFs by Khondokar Mustafa. Typography from Google Fonts
(Inter, Space Grotesk, JetBrains Mono). Icons are inline SVG. PDF rendering
by Mozilla PDF.js.
