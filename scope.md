# Client Scope: Ask Appliance Repairs Ltd

**Last Updated:** 14 October 2026  
**Stage:** demo-build (Homepage Redesign Demo)  
**Client Approver:** Usman / ask@fintaxtech.co.uk  

---

## 1. Agreed Demo Scope (Current Stage)

The demo delivers a complete, reviewable, responsive homepage built with the agreed Astro + TypeScript stack.

### In-Scope Deliverables for Homepage Demo:
1. **Header & Navigation:**
   - Approved primary logo (`ask-appliance-repairs-ltd-logo-primary.png`) with WCAG-compliant white background holding.
   - Responsive mobile drawer navigation and desktop menu.
   - Operating hours indicator ("Open today 8am – 8pm") and direct WhatsApp/Phone call links.
2. **Hero Section:**
   - Clear proposition: domestic appliance repair across London & Surrey.
   - Core differentiators: 5 years experience, transparent pricing from £75, friendly cooperative engineers.
   - Primary Call to Action: "Book a Repair" and "Quick WhatsApp Quote".
   - Appliance quick-filter / service overview.
3. **Reference-Inspired Pricing Section:**
   - Dedicated pricing cards modeled after Nimble Appliance Repairs as requested in client brief.
   - Pricing starting from £75 for prioritized appliances: Cookers, Tumble Dryers, Washing Machines, Dishwashers.
   - Transparent itemised list of inclusions (Fault diagnosis, labour for approved repair, return visits, clear quotation before work proceeds).
4. **Priority Services Section:**
   - Dedicated service cards for top priority offerings:
     1. Cooker & Oven Repairs
     2. Tumble Dryer Repairs
     3. Washing Machine Repairs
     4. Dishwasher, Fridge & Additional Appliances
   - Common fault symptom guides and repair scopes.
5. **Interactive Postcode / Coverage Checker:**
   - Postcode prefix search (TW, UB, HA, SL, KT, GU, SW, W, NW, N, WC, EC, E, SE, EN, IG, RM, SM, CR, BR).
   - Real-time client-side feedback showing coverage confirmation and estimated booking availability.
6. **How It Works / Repair Process:**
   - Step-by-step customer journey:
     1. Describe your fault (WhatsApp, Call, or Online)
     2. Transparent quote & scheduled visit
     3. Expert diagnosis & approved repair
     4. Tested appliance with satisfaction guarantee
7. **Interactive Booking / Quote Modal:**
   - Clean, accessible modal for booking an engineer visit or generating a WhatsApp message pre-filled with appliance details and issue description.
   - Illustrative confirmation state preventing phantom production bookings.
8. **Trust & Quality Assurance:**
   - Transparent company registration details (#16560507).
   - Placeholder structure for upcoming Google Reviews integration (noting full integration is scoped for full build).
   - Zero invented testimonials or falsified credentials.
9. **Footer:**
   - Contact numbers, WhatsApp link, opening hours (8 am – 8 pm Every Day).
   - Service areas, company legal notices, and navigation.
10. **Technical & SEO Architecture:**
    - Strict content separation (`src/content/site.ts`, `services.ts`, `home.ts`, `seo.ts`, `pages.ts`).
    - Semantic HTML, WCAG AA color contrast, responsive layout across 320px–1440px viewports.
    - JSON-LD LocalBusiness & HomeAndConstructionBusiness structured data schema.
    - Canonical tags, Open Graph, meta descriptions, sitemap.xml, robots.txt, and llms.txt guide.

---

## 2. Explicit Demo Exclusions

As per `tech-stack.md` and `workflow.md`:
- **No live payment gateway:** Stripe/e-commerce checkout is out of scope.
- **No live third-party booking backend:** No external scheduling API (e.g. ServiceM8 / Calendly) is provisioned until agreed in full-build scope.
- **No user account or login system.**
- **No database or CMS:** All content driven by typed TypeScript configuration.
- **No production deployment or DNS modification:** Local review only; production release requires client sign-off.
- **Additional launch pages** (Dedicated About, Individual Service pages, Blog, Past Reviews) will be built upon demo approval in the full-build phase.

---

## 3. Full-Build Roadmap (Post-Approval)

Upon demo sign-off:
1. Multi-page architecture (`/services/cooker-repairs`, `/services/washing-machine-repairs`, `/about`, `/contact`, `/pricing`, `/reviews`).
2. Google Reviews API / widget live integration.
3. Form submission handling / secure webhook delivery (e.g. email or Slack notification).
4. Blog markdown collection setup for SEO articles.
5. Final DNS and production deployment to client hosting.
