# TechNova Studio — Angular Website

A full recreation of the TechNova Studio marketing site, built in **Angular 18** (standalone
components, no NgModules) with a fully responsive, single-source-of-truth design system.

## Getting started

```bash
npm install
npm start        # ng serve -> http://localhost:4200
npm run build    # production build -> dist/technova-studio
```

Requires Node 18+ and npm. (This project was authored without network access, so
dependencies have not been installed/verified in this sandbox — run `npm install`
locally before building or serving.)

## Architecture — "single source of truth"

Nothing is hard-coded twice. If you need to rebrand, change copy, or add a page, you almost
always only touch **one file**:

| Concern | Single source of truth |
|---|---|
| Colours, spacing, radii, shadows, fonts | `src/styles/_tokens.scss` (CSS custom properties) |
| Buttons, badges, cards, grid helpers | `src/styles/_utilities.scss` |
| Shared component patterns (service cards, pricing cards, team cards, process steps, testimonials, CTA bands...) | `src/styles/_patterns.scss` |
| All site copy/data — nav links, services, products, tech stack, team, testimonials, pricing, footer links, FAQs | `src/app/core/data/site-data.ts` |
| Icons | `src/app/shared/components/icon/icon.component.ts` (inline SVG registry) |
| Tech-stack brand colours/badges | `src/app/shared/components/tech-badge/tech-badge.component.ts` |

## Structure

```
src/
  app/
    core/data/site-data.ts        # all content lives here
    shared/components/
      header/                     # sticky nav + mobile menu
      footer/                     # contact form + link columns
      icon/                       # SVG icon registry
      tech-badge/                 # brand-coloured tech badge
      section-heading/            # eyebrow + title + subtitle
      page-hero/                  # navy gradient banner for inner pages
    pages/
      home/                       # full homepage (hero, services, products,
                                   # tech stack, about, stats, team, process,
                                   # testimonials, pricing)
      services/
      products/
      our-work/
      technologies/
      team/
      about/
      contact/
  styles/
    _tokens.scss                  # design tokens (colours, spacing, type)
    _base.scss                    # resets + layout primitives
    _utilities.scss               # buttons, badges, grids
    _patterns.scss                # shared card/section patterns
  assets/images/                  # cropped photography from the reference design
```

## Responsiveness

Every layout uses CSS grid/flexbox with breakpoints at `992px`, `860px` and `640px`
(see the media queries in each stylesheet). The header collapses into a slide-down
mobile menu below `860px`.

## Routing

All page routes are lazy-loaded standalone components, defined in `src/app/app.routes.ts`.
