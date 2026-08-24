# Khondokar Mustafa — Data Analyst Portfolio

A production-ready static portfolio. No frameworks, no build step, no npm.
Just `index.html`, one CSS file, one JS file, and 6 project pages — ready to
push to GitHub Pages.

## Live demo

Deploy it and it'll be live at
`https://<your-github-username>.github.io/<repo-name>/`.

## What's in the box

```
static-portfolio/
├── index.html                # Home page (hero, about, skills, projects, experience, certifications, contact)
├── .nojekyll                 # Tells GitHub Pages to skip Jekyll processing
├── README.md                 # This file
├── assets/
│   ├── css/
│   │   └── style.css         # Full design system: dark/light themes, all components
│   ├── js/
│   │   └── main.js           # All interactivity + project data + case study renderer
│   ├── cv/                   # ← DROP YOUR CV HERE
│   │   └── Khondokar_Mustafa_CV.pdf
│   └── img/
│       └── projects/         # ← DROP DASHBOARD SCREENSHOTS HERE
│           ├── covid-herd-immunity/
│           ├── bangladesh-economy/
│           ├── qatalyst-ma-deals/
│           ├── restaurant-meal-deal/
│           ├── data-analytics-tools/
│           └── python-libraries-ds/
└── projects/                 # Six case study pages (one per project)
    ├── covid-herd-immunity.html
    ├── bangladesh-economy.html
    ├── qatalyst-ma-deals.html
    ├── restaurant-meal-deal.html
    ├── data-analytics-tools.html
    └── python-libraries-ds.html
```

**Total: 12 HTML files, 1 CSS file, 1 JS file. That's it.**

---

## 1. Drop in your assets

Missing images degrade gracefully (they fade to ~15% opacity) so the site
still looks intact if you deploy without them — but here's what to add for
the finished look.

### CV

Save your CV as `assets/cv/Khondokar_Mustafa_CV.pdf`.

### Project screenshots

Save each screenshot with the exact filename below. All should be **PNG or JPG**, ideally 1600×900px or wider for the cover images:

**`assets/img/projects/covid-herd-immunity/`**
- `cover.png` — hero/cover image
- `deaths-chart.png` — annual virus-related deaths comparison
- `vaccine-distribution.png` — vaccine distribution + administered doses
- `death-vs-vaccination.png` — monthly deaths vs. vaccinations correlation
- `usa-maps.png` — U.S. state-level density maps
- `variants-timeline.png` — Delta / Omicron BA.1 / XBB.1.5 timeline

**`assets/img/projects/bangladesh-economy/`**
- `cover.png`
- `dashboard.png` — the single-page dashboard image

**`assets/img/projects/qatalyst-ma-deals/`**
- `cover.png`
- `decade-bubble-chart.png` — the bubble chart of tech M&A deals

**`assets/img/projects/restaurant-meal-deal/`**
- `cover.png`
- `dashboard.png` — the operations dashboard

**`assets/img/projects/data-analytics-tools/`**
- `cover.png`
- `trend-comparison.png` — the lollipop chart

**`assets/img/projects/python-libraries-ds/`**
- `cover.png`
- `timeline.png` — the library timeline infographic

**Tip:** Use the same image as both `cover.png` and the gallery image if you
only have one file per project — it works.

---

## 2. Test locally (optional)

You can just double-click `index.html` and it works.

For a slightly better experience (some browsers restrict local file access
for security), run any local server. Pick one you already have:

**Python 3**
```bash
python -m http.server 8000
```

**Node**
```bash
npx serve .
```

**VS Code:** install the "Live Server" extension, right-click `index.html` → "Open with Live Server".

Then open `http://localhost:8000` in your browser.

---

## 3. Deploy to GitHub Pages

### One-time setup

**1. Create a new GitHub repo.** Name it whatever you like — a common choice is `portfolio` or `<your-username>.github.io` (the second gives you a cleaner URL: `https://<username>.github.io/` without a subpath).

**2. Push these files to the repo.** From this folder in your terminal:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

**3. Enable Pages.** On GitHub:
- Go to your repo → **Settings** → **Pages** (in the left sidebar)
- Under **Source**, select **Deploy from a branch**
- Under **Branch**, select `main` and `/ (root)`
- Click **Save**

GitHub builds the site in ~30–60 seconds. Refresh the Pages settings page and you'll see the live URL at the top.

### After the first deploy

Every `git push` to `main` re-deploys the site automatically. So:

```bash
# Make a change (edit CV, drop new screenshots, tweak text)
git add .
git commit -m "Update: added Q4 dashboards"
git push
```

That's it. ~30 seconds later it's live.

---

## 4. Custom domain (optional)

If you own a domain (e.g. `khondokarmustafa.com`):

**1.** Create a file named `CNAME` (no extension) at the repo root, containing exactly one line: your domain.
```
khondokarmustafa.com
```

**2.** In your domain registrar's DNS settings, add these A records pointing to GitHub's IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Or for `www.` support, add a CNAME record: `www` → `<your-username>.github.io`.

**3.** In the repo's Pages settings, enter your domain in the **Custom domain** field. Check **Enforce HTTPS** once the SSL certificate provisions (~10 minutes).

---

## Common tweaks

### Update your CV
Just replace `assets/cv/Khondokar_Mustafa_CV.pdf` with the new file — same filename, and every "Download CV" button on the site now points to the fresh version.

### Add or edit a project
All project data lives in **one place**: the `PROJECTS` array at the top of
`assets/js/main.js`. Edit or add an object, and both the home page card and
the case study page update. If you add a new project, also generate a new
case study HTML file by copying one of the existing ones in `projects/` and
changing the `data-case-study="..."` slug on the `<main>` element to match
your new `slug`.

### Change the color scheme
Design tokens live at the very top of `assets/css/style.css` under `:root`
(dark theme) and `:root[data-theme='light']` (light theme). Change the
`--accent-primary`, `--accent-secondary`, and `--accent-tertiary` variables
to reskin the entire site.

### Change your LinkedIn/GitHub links
Search `index.html` and the six files in `projects/` for
`linkedin.com/in/khondokarmustafa` and `github.com/khondokarmustafa` — replace
with your real URLs.

---

## Tech notes

- **Zero JavaScript frameworks.** Vanilla JS, one file, ~800 lines.
- **Zero CSS frameworks.** Pure CSS with custom properties. ~2300 lines.
- **Zero build step.** No npm, no webpack, no Vite, no Tailwind CLI, no PostCSS.
- **Fully accessible.** Skip link, keyboard nav, focus rings, semantic HTML,
  ARIA labels on interactive controls, `prefers-reduced-motion` support.
- **SEO-ready.** Meta description, Open Graph, Twitter card, JSON-LD `Person`
  schema, semantic headings.
- **Fast.** Zero framework payload. Fonts preconnected. Images lazy-loaded.
  Scroll animations use `IntersectionObserver` (native).
- **Dark/light themes** with localStorage persistence and system-preference
  respect on first visit.

---

## Credits

Design and content by Khondokar Mustafa. Fonts from Google Fonts (Inter,
Space Grotesk, JetBrains Mono). Icons are inline SVG (no icon library).
