# Client Website Brief: Ask Appliance Repairs Ltd

**Last Updated:** 14 October 2026  
**Client:** Ask Appliance Repairs Ltd  
**Stage:** demo-build  
**Status:** In Progress (Homepage Demo)

---

## 1. Confirmed Business Facts & Sources

| Fact | Value | Source |
|---|---|---|
| **Trading Name** | Ask Appliance Repairs Ltd | FinTaxTech Brand Guidelines Spec v1 (12 Oct 2026), Website Production Brief (14 Oct 2026) |
| **Legal Name** | Ask Appliance Repairs Ltd | Brand Spec, Companies House #16560507 |
| **Company Registration** | 16560507 | Existing Website AppConstants.js / README.md |
| **Final Approver** | Usman / ask@fintaxtech.co.uk | Brand Spec v1 & Production Brief |
| **Operating Hours** | 8:00 AM – 8:00 PM Every Day | Website Production Brief (14 Oct 2026) |
| **Contact Phone / WhatsApp** | +44 7340 002079 | Existing Website AppConstants.js |
| **Contact Email** | info@askappliancerepairs.com | Existing Website AppConstants.js |
| **Domain** | https://askappliancerepairs.com/ | Production Brief & Existing Website |
| **Business Sector** | Domestic Appliance Repairs | Production Brief |
| **Experience / Differentiator** | 5 years of experience; friendly, professional, and cooperative domestic repair service | Brand Spec v1 |
| **Service Area** | Greater London & Surrey / surrounding postcodes (approx. 20-mile radius covering TW, UB, HA, SL, KT, GU, SW, W, NW, N, WC, EC, E, SE, EN, IG, RM, SM, CR, BR) | Existing Website AppConstants.js |
| **Approved Starting Price** | Starting from £75 | Website Production Brief (14 Oct 2026) |

---

## 2. Priority Offerings

From the client's Website Production Brief (14 Oct 2026):
1. **Cooker Repair** (Ovens, cookers, electric & induction hobs)
2. **Tumble Dryer Repair** (Condenser, vented, and heat-pump dryers)
3. **Washing Machine Repair** (Freestanding and integrated washing machines & washer-dryers)

*Supporting services retained from existing portfolio:*
- Dishwasher Repairs
- Fridge & Freezer Repairs
- Microwave Repairs

---

## 3. Target Audience & Visitor Intent

- **Audiences:**
  - Consumers / Homeowners
  - Families
  - Small businesses / Local landlords
  - Existing customers
- **Visitor Intent:**
  - Find transparent pricing ("Starting from £75")
  - Understand which appliances are repaired and check their local postcode
  - Book an engineer visit / request an accurate repair quote
  - Contact directly via WhatsApp or phone

---

## 4. Design Direction & Reference Analysis

- **Reference Website:** [Nimble Appliance Repairs](https://nimbleappliancerepairs.co.uk/)
- **Key Element Liked by Client:** **Pricing Section**
- **Design Takeaways from Reference:**
  - Prominent "FROM £75" pricing cards per appliance category (Cookers, Tumble Dryers, Washing Machines, Dishwashers).
  - Clear itemised breakdown of what is included:
    - Full fault diagnosis included
    - Labour included for approved repairs
    - Return visit included if parts are required
    - Parts charged separately if required
    - Clear upfront quotation before any work proceeds
    - No hidden charges / transparent pricing
  - Direct "Book a Repair" / "Contact via WhatsApp" call-to-action buttons.
  - Reassuring, clutter-free layout with clean cards and honest engineering communication.

---

## 5. Visual Identity & Brand System

Source: `ask-appliance-repairs-ltd-brand-spec.json` (Locked decisions & guidelines):

- **Palette:**
  - **Engineering Navy:** `#01233F` (Primary text, dark header/footer accents, cards)
  - **Appliance Teal:** `#01797F` (Primary action buttons, badge accents, icons)
  - **White:** `#FFFFFF` (Page background, card background, high-contrast text)
  - **Mist:** `#F3F7F7` (Quiet neutral section background, pricing cards, subtle dividers)
- **Accessibility & Contrast:**
  - WCAG AA compliant: Navy on White (15.99:1), Navy on Mist (14.81:1), White on Teal (5.19:1).
  - *Strict Rule:* Never place ordinary teal text on navy (fails AA at 3.08:1).
- **Typography:**
  - Primary font family: `Manrope` (Google Fonts SIL OFL, weights 400, 500, 600, 700).
  - Fallback: `Manrope, Arial, sans-serif`.
  - Sentence-case buttons and labels; comfortable line-height (1.5–1.7).
- **Logo:**
  - Primary horizontal logo artwork: `ask-appliance-repairs-ltd-logo-primary.png` (transparent PNG, washing machine mark + "Ask Appliance Repairs Ltd").
  - Clear space: 1x (half height of capital "A").
  - Never stretch, squash, rotate, recolour, or place directly on dark backgrounds without a white holding panel.

---

## 6. Permissions & Provisional Material

- **Explicitly Permitted:**
  - Provisional layout, grid, and card styling following the approved FinTaxTech brand specification.
  - Existing client assets from `/images/` (`about-image.jpg`, service icons, favicon).
  - Realistic appliance category iconography and repair process steps based on verified facts.
- **Strictly Prohibited:**
  - No invented testimonials or fake star ratings (Google reviews integration is marked for full-build review).
  - No fabricated accreditations, certifications, or guarantees not confirmed by client (e.g. no "Gas Safe" or manufacturer authorised badges unless verified).
  - No invented prices outside the confirmed "Starting from £75" baseline.

---

## 7. Demo Acceptance Criteria

1. Fully responsive homepage demo running on local preview (mobile, tablet, desktop).
2. Adherence to Astro, strict TypeScript, semantic HTML, and plain CSS with shared design tokens.
3. Strict separation of content into typed TypeScript files (`src/content/`).
4. High-contrast, brand-compliant color palette (Navy `#01233F`, Teal `#01797F`, Mist `#F3F7F7`, White `#FFFFFF`) and typography (`Manrope`).
5. Prominent Pricing Section inspired by reference site (`nimbleappliancerepairs.co.uk`) with £75 starting price and clear terms.
6. Postcode coverage checker component for London & surrounding areas.
7. Interactive repair enquiry / WhatsApp booking flow with clear illustrative feedback.
8. SEO foundation: JSON-LD LocalBusiness schema, Open Graph metadata, canonicals, robots.txt, and sitemap.xml structure.
