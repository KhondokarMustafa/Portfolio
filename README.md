# Khondokar Jamal E Mustafa — Data Analyst Portfolio

A production-ready static portfolio. No frameworks, no build step, no npm.
Pure HTML, CSS, and vanilla JavaScript — deployable to GitHub Pages by
pushing these files as-is.

**Privacy note:** this site intentionally does not display a phone number
anywhere — not in the contact section, footer, metadata, or any other part
of the page. Only email and LinkedIn are used as contact methods.

---

## What's in the box

```
portfolio/
├── index.html                 # The entire site (single page)
├── .nojekyll                  # Tells GitHub Pages to skip Jekyll
├── README.md                  # This file
└── assets/
    ├── css/style.css          # Full design system
    ├── js/main.js             # All interactivity + project data
    ├── cv/
    │   └── Khondokar_Jamal_E_Mustafa_CV.pdf   ← your real resume
    ├── img/                   # Optimized preview images (thumbnails + full)
    │   ├── dashboard/
    │   ├── analytical/
    │   └── creative/
    └── projects/               # Original source files — opened via "Open PDF" / "Open Image"
        ├── demo-dashboard.pdf
        ├── brics-vs-g7.pdf
        ├── antibiotic-misuse-bangladesh.pdf
        ├── grameenphone-vs-robi.pdf
        ├── bangladesh-economy-2023.pdf
        ├── qatalyst-top-deals.pdf
        ├── top-data-analytic-tools.jpg
        ├── top-python-libraries.png
        ├── icc-cricket-world-cup.png
        └── celestial-bodies.jpg
```

Nothing to install. Nothing to configure. Push and deploy.

---

## Deploy to GitHub Pages — 3 steps

### 1. Create a GitHub repo
Any name works — `portfolio`, or `<username>.github.io` for the cleanest URL.

### 2. Push these files
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 3. Enable Pages
**Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**

Live in about 30–60 seconds. Every future `git push` redeploys automatically.

---

## Testing locally

Double-click `index.html` — it works standalone. For an environment closer
to production:

```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

---

## Content sources

Everything on this site is sourced directly from the resume and project
files you provided — nothing was invented:

- **Hero stats, work experience, education, and skills** — from
  `Khondokar_Jamal_E_Mustafa_Resume.pdf`.
- **Demo Dashboard** — rendered from `Demo_Dashboard.pdf` (Finance + HR
  Power BI views); the stats shown (180 employees, $9M salary cost, 85%
  training completion, etc.) are read directly off the dashboard.
- **5 Analytical Projects** — BRICS vs. G7, Antibiotic Misuse in
  Bangladesh, Grameenphone vs. Robi, Bangladesh Economy 2023, and Qatalyst
  Partners' Top Deals — each rendered from its source PDF, with every
  statistic in the card taken from the document text.
- **4 Creative Projects** — Top Data Analytic Tools, Top Python Libraries,
  ICC Cricket World Cup 2023, and Celestial Bodies of Our Solar System —
  using the original infographic images you supplied.

Project card previews are pre-rendered, optimized JPEGs (not live PDF
rendering), so they load instantly and never depend on a third-party
CDN or JavaScript library. Clicking **"View Project"** opens a lightbox
with the full-resolution image(s); **"Open PDF" / "Open Image"** opens the
original source file in a new tab.

---

## Common tweaks

### Update your CV
Replace `assets/cv/Khondokar_Jamal_E_Mustafa_CV.pdf` with a new file of the
same name — every "Download CV" button updates automatically.

### Add or edit a project
All project content lives in one place: the `PROJECTS` array at the top of
`assets/js/main.js`. Each entry has `category` (`dashboard` / `analytical`
/ `creative`), `title`, `description`, `tools`, an optional `insight`
string, a `thumb` (card image), a `gallery` (lightbox images), and a
`fileUrl` (the "Open PDF/Image" link). Add a new object and it appears in
the right tab automatically — no HTML changes needed.

### Change the accent color
Design tokens are at the top of `assets/css/style.css` under `:root`.
`--accent` / `--accent-deep` / `--accent-soft` control the primary blue
used throughout; `--cat-dashboard`, `--cat-analytical`, and `--cat-creative`
control the three project-category colors.

### Update contact details
Search `index.html` for `khondokarmustafa0@gmail.com` and
`linkedin.com/in/khondokarmustafa` and replace as needed. No phone number
field exists anywhere in the markup by design — if you ever want to add
one, you'll need to add new markup deliberately; nothing needs to be
"turned back on."

---

## Custom domain (optional)

1. Add a `CNAME` file at the repo root containing your domain, e.g.:
   ```
   khondokarmustafa.com
   ```
2. Point your DNS `A` records to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Enter the domain in **Settings → Pages → Custom domain**, then check
   **Enforce HTTPS** once the certificate provisions (~10 minutes).

---

## Tech notes

- Zero JS frameworks, zero CSS frameworks, zero build step.
- Fonts: Fraunces (headings), Inter (body), IBM Plex Mono (labels/data) —
  loaded from Google Fonts.
- All internal paths are relative — works at both
  `<user>.github.io/` and `<user>.github.io/<repo>/`.
- Fully responsive (mobile, tablet, desktop) with a slide-out mobile menu.
- Accessible: skip link, keyboard-operable lightbox and tabs, visible
  focus states, `prefers-reduced-motion` respected.
- SEO: meta description, Open Graph, Twitter card, JSON-LD `Person`
  schema (no telephone field).
