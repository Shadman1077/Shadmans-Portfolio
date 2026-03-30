# Shadman Sakeeb Khan — Portfolio

Personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Deployed on **Vercel**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Syne + DM Mono (via next/font/google)
- **Hosting**: Vercel

## Project Structure

```
shadman-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Tailwind directives + custom utilities
├── components/
│   ├── Cursor.tsx        # Custom animated cursor (desktop only)
│   ├── Navbar.tsx        # Fixed nav with mobile hamburger drawer
│   ├── Hero.tsx          # Hero section with typing animation
│   ├── About.tsx         # Bio, CV downloads, stats, timeline, skills
│   ├── Publications.tsx  # Research papers
│   ├── Works.tsx         # Tabbed web + ML projects
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   └── useScrollFadeIn.ts # Scroll-triggered fade-in hook
├── public/
│   └── cvs/
│       ├── shadman_sakeeb_khan_cv.pdf   # Software & ML CV
│       └── SHADMAN_WEBFLOW.pdf          # Web Development CV
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── vercel.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done ✅

## Adding New Projects

Open `components/Works.tsx` and add to `WEB_PROJECTS` or `ML_PROJECTS` arrays:

```ts
{
  num: '07 / Web',
  title: 'New Project',
  desc: 'Project description here.',
  tags: ['Webflow', 'GSAP'],
  link: 'https://your-project.com',
  linkLabel: 'Visit Site',
}
```

## Adding New Publications

Open `components/Publications.tsx` and add to the `PUBLICATIONS` array.

## Updating CVs

Replace the files in `public/cvs/` — keep the same filenames.
