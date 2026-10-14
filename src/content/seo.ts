import { businessInfo } from './site';
import { pricingPlans } from './services';

export interface PageSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImage: string;
  noindex?: boolean;
}

export const defaultSeo: PageSeo = {
  title: "Ask Appliance Repairs Ltd | Appliance Repairs London & Surrey from £75",
  description: "Prompt, reliable domestic appliance repairs in London & Surrey. Washing machines, cookers, tumble dryers & dishwashers. Transparent pricing from £75. Open 8am–8pm daily.",
  canonicalUrl: "https://askappliancerepairs.com",
  ogType: "website",
  ogImage: "https://askappliancerepairs.com/images/og-image.jpg?v=brand-20261014",
  noindex: false
};

export function generateLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://askappliancerepairs.com/#organization",
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "url": "https://askappliancerepairs.com",
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "priceRange": "From £75",
    "image": "https://askappliancerepairs.com/images/ask-appliance-repairs-ltd-logo-primary.png",
    "logo": "https://askappliancerepairs.com/images/ask-appliance-repairs-ltd-logo-primary.png",
    "description": "Professional domestic appliance repairs across London and Surrey for cookers, tumble dryers, washing machines, and dishwashers.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Greater London and Surrey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Appliance Repair Services",
      "itemListElement": pricingPlans.map((plan) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": plan.name,
          "description": plan.description
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": plan.priceNumeric,
          "priceCurrency": "GBP"
        }
      }))
    }
  };
}

export function generateLlmsText(): string {
  return `# Ask Appliance Repairs Ltd

> Local domestic appliance repair service operating across Greater London and Surrey. Specialising in cookers, tumble dryers, washing machines, and dishwashers with transparent pricing from £75.

## Overview
- **Business Name:** Ask Appliance Repairs Ltd
- **Company Registration:** 16560507 (England & Wales)
- **Service Sector:** Domestic Appliance Repairs
- **Operating Hours:** Monday – Sunday, 8:00 AM – 8:00 PM
- **Direct Phone:** +44 7340 002079
- **Email:** info@askappliancerepairs.com
- **Website:** https://askappliancerepairs.com/
- **Starting Price:** From £75 (includes on-site fault diagnosis and labour for approved repairs; parts charged separately if needed)

## Priority Repair Services
- [Cooker & Oven Repairs](https://askappliancerepairs.com/#services): Diagnostic troubleshooting and repairs for electric ovens, fan elements, thermostats, and cookers.
- [Tumble Dryer Repairs](https://askappliancerepairs.com/#services): Belt replacements, heating elements, drum bearings, and pump repairs for condenser, vented, and heat-pump dryers.
- [Washing Machine Repairs](https://askappliancerepairs.com/#services): Drainage faults, motor brushes, bearing rumblings, door seal leaks, and spin problems.
- [Dishwasher Repairs](https://askappliancerepairs.com/#services): Water leakage, pump blockages, wash element failures, and electronic error clearing.

## Service Coverage
- Greater London & Surrey (within 20-mile radius)
- Postal areas covered: TW, UB, HA, SL, KT, GU, SW, W, NW, N, WC, EC, E, SE, EN, IG, RM, SM, CR, BR.

## Contact & Booking
- WhatsApp: https://wa.me/447340002079
- Telephone: 07340 002079
- Hours: 8:00 AM – 8:00 PM Every Day
`;
}
