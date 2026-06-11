# Caspian Smart Construction MMC — Website
## Production-Ready Static Website · 2025

---

## 📁 Folder Structure

```
csc-website/
├── index.html              ← Main page (all sections)
├── sitemap.xml             ← SEO sitemap
├── robots.txt              ← Search engine directives
├── README.md               ← This file
│
├── css/
│   └── styles.css          ← All custom styles & animations
│
├── js/
│   ├── translations.js     ← AZ / EN / RU content (all text)
│   └── main.js             ← All JavaScript logic
│
└── images/                 ← Place your images here
    ├── logo.png            ← Company logo (dark background version)
    ├── logo-white.png      ← Company logo (white/transparent version)
    ├── favicon.png         ← 32×32 favicon
    ├── apple-touch-icon.png← 180×180 iOS icon
    ├── og-image.jpg        ← 1200×630 Open Graph image
    ├── hero-construction.jpg    ← Hero fullscreen bg (1920×1080 min)
    ├── about.jpg           ← About section photo
    ├── service-1.jpg       ← Waterproofing service
    ├── service-2.jpg       ← Industrial Flooring service
    ├── service-3.jpg       ← Construction Works service
    ├── service-4.jpg       ← Tile & Ceramic service
    ├── service-5.jpg       ← Industrial Concrete service
    ├── service-6.jpg       ← Consulting service
    ├── project-1.jpg       ← Business centre roof waterproofing
    ├── project-2.jpg       ← Industrial plant epoxy flooring
    ├── project-3.jpg       ← Residential complex foundation
    ├── project-4.jpg       ← Shopping mall construction
    ├── project-5.jpg       ← Hotel pool waterproofing
    └── project-6.jpg       ← Logistics park concrete polishing
```

---

## 🚀 Deployment

### Option A — Netlify (Recommended, free)
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Drag the entire `csc-website/` folder onto the upload area
3. Done — your site is live on a `.netlify.app` URL
4. Add your custom domain `cscllc.az` in Site Settings → Domain Management

### Option B — Vercel
```bash
npm i -g vercel
cd csc-website
vercel --prod
```

### Option C — GitHub Pages
1. Push the folder to a GitHub repo
2. Settings → Pages → Source: Deploy from branch `main` / root `/`
3. Your site is live at `https://username.github.io/repo-name`

### Option D — cPanel / Shared Hosting
1. Compress the contents of `csc-website/` to a `.zip`
2. Upload via File Manager to `public_html/`
3. Extract in place

### Option E — Any Web Server (Apache / Nginx)
Just copy all files to the web root. No server-side processing needed — fully static.

---

## 🌐 Languages

| Code | Language    | Status   |
|------|-------------|----------|
| `az` | Azerbaijani | Default  |
| `en` | English     | ✅ Full  |
| `ru` | Russian     | ✅ Full  |

Language preference is saved in `localStorage` and persists across visits.

To edit any text, open `js/translations.js` and find the relevant key under `az`, `en`, or `ru`.

---

## 📝 Editing Content

### Change company text
Edit `js/translations.js` → find the section (e.g. `hero`, `about`, `services`) → update the string.

### Add a new project
In `translations.js`, under each language → `projects.items[]` → add a new object:
```js
{
  title: "Project Name",
  category: "waterproofing",   // waterproofing | flooring | construction | consulting
  cat_label: "Su İzolyasiyası",
  desc: "Short description",
  year: "2025"
}
```
Then add a corresponding `project-7.jpg` to the `/images/` folder.

### Add a new service
In `translations.js` → `services.items[]` → add a new entry with `key`, `title`, `description`, `sub[]`.
Add a `service-7.jpg` to `/images/`.

---

## 📧 Contact Form

The form submits to FormSubmit (no backend required).

**Current destination:** `yusif.kurba@gmail.com`

To change the email recipient, open `js/main.js` → search for `formsubmit.co/ajax/` → update the email address.

FormSubmit features used:
- `_subject` — Custom email subject line
- `_captcha: false` — No captcha (can be enabled)
- `_template: table` — Formatted table layout in email
- `_replyto` — Reply goes directly to the sender

---

## 🎨 Colours & Fonts

| Token        | Value     | Usage               |
|--------------|-----------|---------------------|
| Charcoal     | `#1C1C1C` | Page background     |
| Graphite     | `#2E2E2E` | Cards, dark sections|
| Gold         | `#D9A441` | Accents, CTAs       |
| Steel Gray   | `#6D6D6D` | Secondary text      |
| White        | `#FFFFFF` | Primary text        |

**Font:** Inter (Google Fonts) — full Azerbaijani character support (Ə Ü Ö Ğ Ş Ç İ)

---

## ⚡ Performance Tips

- Compress all images (use [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com))
- Convert JPGs to WebP for ~30% smaller files (update image paths in translations.js)
- Enable Gzip/Brotli compression on your hosting provider
- Set long cache headers for `/images/`, `/css/`, `/js/`

---

## ✅ Features Included

- [x] AZ / EN / RU multilingual with localStorage persistence
- [x] Sticky navigation with scroll-blur effect
- [x] Fullscreen hero with parallax zoom
- [x] Loading screen with progress bar
- [x] Counter animations (IntersectionObserver)
- [x] Scroll reveal animations (staggered)
- [x] Service cards (6 services, with sub-service lists)
- [x] Project portfolio with category filter
- [x] Statistics section with count-up animation
- [x] Why Choose Us feature cards
- [x] 4-step process section
- [x] Testimonials section
- [x] FAQ accordion
- [x] Contact form (FormSubmit AJAX, no page reload)
- [x] Google Maps embed (Baku, Azerbaijan)
- [x] Back-to-top button
- [x] Mobile hamburger menu (full-screen overlay)
- [x] Fully responsive (mobile, tablet, desktop)
- [x] SEO: meta tags, Open Graph, Twitter Card, Structured Data (JSON-LD)
- [x] sitemap.xml
- [x] robots.txt
- [x] Accessibility: ARIA labels, focus-visible, semantic HTML
- [x] Reduced-motion media query support

---

## 📞 Company Info

**Caspian Smart Construction MMC**
- Website: https://www.cscllc.az
- Phone: +994 50 330 64 78 (Elşad Mirzəyev)
- Email: elshad@cscllc.az · farid@cscllc.az · sabuhi@cscllc.az
- Location: Baku, Azerbaijan
- Founded: 2014
