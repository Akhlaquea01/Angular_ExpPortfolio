# Akhlaque Ahmad — Portfolio

A premium, dark-first portfolio built with Angular 22 (standalone components, Signals, zoneless
change detection, prerendered SSG), Tailwind CSS v4, GSAP/ScrollTrigger, and Spartan
(`@spartan-ng/brain`) UI primitives.

## Updating content

Every piece of copy on the site lives in `src/content/*.ts` — profile, experience, projects,
skills, tech stack, achievements, certifications, education, testimonials. Edit the plain
data there; no component or template changes are needed. `src/content/blog.ts` and
`src/content/open-source.ts` are empty stubs — fill them in and flip their `enabled` flag to
`true` in `src/app/sections/sections.config.ts` to turn those sections on.

To add a brand-new section: create `src/content/<name>.ts`, a component under
`src/app/sections/<name>/`, and one entry in `sections.config.ts`. The navbar and page both
render from that single registry.

## Development

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Production build (prerendered/static)

```bash
npm run build
```

Output goes to `dist/portfolio/browser` — fully prerendered static HTML/CSS/JS. It can be
hosted on any static file host (no Node server required); `dist/portfolio/server` is only
needed if you want live SSR instead of the static build.

## Tests

```bash
npm test
```

## Before deploying

- `src/app/core/services/seo.ts` and `public/robots.txt` / `public/sitemap.xml` use a
  placeholder domain (`https://akhlaque.dev`) — replace it once a real domain is chosen.
- Run a Lighthouse audit in Chrome DevTools against the production build to confirm
  performance/accessibility/SEO scores.
