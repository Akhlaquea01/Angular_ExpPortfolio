## What this is
This is a personal Angular portfolio site for showcasing the author’s skills, experience, projects, testimonials, education, resume, and contact details. It’s built as a polished single-page experience with SSR/prerender support, theme switching, animated sections, and SEO metadata baked in.

### Stack
- **Language(s):** TypeScript, HTML, CSS
- **Framework / runtime:** Angular 22 with SSR/prerender, Angular CLI, Node.js
- **Notable libraries:** Tailwind CSS v4, Lucide Angular icons, GSAP, RxJS, Angular CDK, express

## How it's organized
```text
src/
  main.ts              bootstrap entry
  app/
    app.ts             root shell, composes page sections
    app.html           page composition via NgComponentOutlet
    core/services/     SEO, scroll spy, theme
    layout/            navbar and footer
    sections/          hero/about/experience/projects/etc. content blocks
    shared/            reusable UI bits, directives, buttons/cards
  styles.css           global theme tokens and Tailwind utilities
public/                static assets
scripts/               helper scripts, including resume generation
```

**How it fits together:** `src/main.ts` bootstraps the standalone `App` component, which renders the enabled sections from `sections.config.ts` through `NgComponentOutlet`. The navbar uses a scroll-spy service to highlight the active section, while the `Seo` service sets titles, meta tags, canonical URL, and JSON-LD for the portfolio.

## How to run it
```bash
npm install
npm start
npm run build
npm test
```

For the SSR build/runtime path:

```bash
npm run build
npm run serve:ssr:portfolio
```

For the resume generator script:

```bash
npm run generate:resume
```

Deployment note from `netlify.toml`:
- build command: `npm run build`
- publish directory: `dist/portfolio/browser`
