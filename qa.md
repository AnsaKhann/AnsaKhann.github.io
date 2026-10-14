# Quality Assurance & Verification: Ask Appliance Repairs Ltd

**Stage:** demo-build (Completed)  
**Date:** 14 October 2026  
**Implementation Agent:** Antigravity  
**Independent Verifier:** Claude  

---

## 1. Technical & Architecture Acceptance

| Check | Requirement | Result | Evidence |
|---|---|---|---|
| **Tech Stack** | Astro v5.18.2 + Strict TypeScript + Plain CSS tokens | **PASS** | `pnpm check` passed with 0 errors, 0 warnings; `pnpm build` completed in 565ms |
| **Content Separation** | All user-visible text, links, and SEO metadata in `src/content/` | **PASS** | `site.ts`, `services.ts`, `home.ts`, `seo.ts`, `pages.ts`, `assets.ts` |
| **SOLID Principles** | Separation of presentation, validation, SEO schemas, and domain data | **PASS** | `src/lib/postcode.ts` pure domain logic; thin page route composition in `src/pages/index.astro` |
| **Design Tokens** | Engineering Navy `#01233F`, Appliance Teal `#01797F`, Mist `#F3F7F7`, Font `Manrope` | **PASS** | Defined in `src/styles/tokens.css` per Brand Guidelines Spec v1.0 |
| **Logo Integration** | Primary approved logo with 1x clear space and WCAG AA contrast | **PASS** | Evaluated on white header holding bar and white footer panel; min artwork width >= 320px |
| **No Invented Facts** | Zero fabricated testimonials, accreditations, or unapproved prices | **PASS** | Verified price baseline "From £75", reg #16560507, 8am-8pm daily hours; Google Reviews marked as planned full-build integration |

---

## 2. SEO Acceptance Checklist (Per `seo-checklist.md`)

| # | Check | Acceptance Criteria | Result | Evidence |
|---|---|---|---|---|
| 1 | `sitemap.xml` | Valid XML, canonical URLs, only indexable pages | **PASS** | Verified at `http://127.0.0.1:4321/sitemap.xml` (HTTP 200, valid urlset XML) |
| 2 | `robots.txt` | Served at root, correct sitemap location | **PASS** | Served from `public/robots.txt` referencing `https://askappliancerepairs.com/sitemap.xml` |
| 3 | Indexing directives | Demo safeguards (`noindex, nofollow` on preview/demo, ready for production) | **PASS** | Verified in `<head>` meta robots tag per checklist rule #3 |
| 4 | Canonicals | Coherent absolute canonical per page | **PASS** | Verified `<link rel="canonical" href="https://askappliancerepairs.com">` |
| 5 | Titles | Distinct descriptive title from content | **PASS** | "Ask Appliance Repairs Ltd \| Appliance Repairs London & Surrey from £75" |
| 6 | Descriptions | Accurate page-specific description | **PASS** | Verified in `<meta name="description">` |
| 7 | H1 | One clear semantic H1 per page | **PASS** | Single H1 in hero: "Fast, Reliable Appliance Repairs With Upfront Pricing From £75" |
| 8 | Heading hierarchy | Proper nesting H1 -> H2 -> H3 | **PASS** | Hero (H1) -> Sections (H2: Pricing, Services, Process, Coverage, About, Reviews, CTA) -> Cards (H3) |
| 9 | Image alternatives | Meaningful alt for informative images | **PASS** | Logo and service images have descriptive alt attributes; decorative icons use `aria-hidden="true"` |
| 10 | Structured data | Valid LocalBusiness JSON-LD schema matching visible text | **PASS** | Verified in HTML `<script type="application/ld+json">` with HomeAndConstructionBusiness schema |
| 11 | Internal links | Descriptive HTML navigation links | **PASS** | Verified header and footer navigation with descriptive aria-labels |
| 12 | Broken links | No 404s or circular redirects | **PASS** | All routes (`/`, `/privacy`, `/terms`, `/404`) return HTTP 200 OK |
| 13 | Images | Sized responsive images with dimensions | **PASS** | Width and height defined on logo, icons, and about image |
| 14 | Core Web Vitals | Zero render-blocking scripts, lightweight CSS, fast LCP | **PASS** | Static HTML-first build with bundled scoped CSS |
| 15 | Mobile | Responsive on 320px–1200px viewports | **PASS** | Mobile hamburger drawer, responsive grid columns, touch targets >= 44px |
| 16 | HTTPS | Configured for secure protocol | **PASS** | All canonical and structured data URLs use `https://` |
| 17 | URL slugs | Clean semantic slugs | **PASS** | Root `/`, `/privacy`, `/terms` |
| 18 | Social image | Valid og:image metadata | **PASS** | `https://askappliancerepairs.com/images/og-image.jpg` with Open Graph tags |
| 19 | Search Console | Account ownership setup | **NOT APPLICABLE** | Awaiting client account credentials for production deployment |
| 20 | `llms.txt` | Public concise markdown guide per spec | **PASS** | Verified at `http://127.0.0.1:4321/llms.txt` (HTTP 200, 1702 bytes) |

---

## 3. Verified Endpoints & Local Runtime

- **Preview Server:** `http://127.0.0.1:4321/` (Active daemon process)
- **Astro Check:** Passed (`0 errors, 0 warnings`)
- **Astro Build:** Passed (`4 page(s) built in 565ms`)
- **Routes Verified:**
  - `http://127.0.0.1:4321/` -> HTTP 200
  - `http://127.0.0.1:4321/llms.txt` -> HTTP 200
  - `http://127.0.0.1:4321/sitemap.xml` -> HTTP 200
  - `http://127.0.0.1:4321/privacy` -> HTTP 200
  - `http://127.0.0.1:4321/terms` -> HTTP 200
