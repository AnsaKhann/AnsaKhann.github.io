import { businessInfo } from './site';
import { reviewSources } from './reviews';

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  badge: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    headline: string;
    highlightWord: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBullets: string[];
  };
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
    href?: string;
  }>;
  pricingSection: {
    badge: string;
    title: string;
    subtitle: string;
    diagnosticNote: string;
    transparentPromise: string;
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
  };
  coverageSection: {
    badge: string;
    title: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    buttonText: string;
    coverageConfirmedText: string;
    coverageUnavailableText: string;
    popularAreasNotice: string;
  };
  processSection: {
    badge: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  aboutSection: {
    badge: string;
    title: string;
    leadParagraph: string;
    bodyParagraph: string;
    pillars: ValuePillar[];
    ctaText: string;
  };
  reviewsSection: {
    badge: string;
    title: string;
    subtitle: string;
    selectedTitle: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    hoursNotice: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    badge: "London & Surrey Domestic Appliance Specialists",
    headline: "Fast, Reliable Appliance Repairs With Pricing",
    highlightWord: "From £75",
    subheadline: "Five years of trusted domestic appliance repair across London. We diagnose and repair cookers, tumble dryers, washing machines, and dishwashers with clear, honest pricing.",
    primaryCta: "Book an Engineer",
    secondaryCta: "Quote via WhatsApp",
    trustBullets: [
      "Starting from £75",
      "Full Fault Diagnosis",
      "8am – 8pm Every Day",
      "London & Surrey Postcodes"
    ]
  },
  stats: [
    {
      value: "Nearly 5,000",
      label: "Happy customers",
      sublabel: "Trusted for domestic appliance repairs"
    },
    {
      value: "200+",
      label: "Reviews on Checkatrade",
      sublabel: "Read our Usmans Repairs profile →",
      href: reviewSources.checkatrade.url
    },
    {
      value: `${reviewSources.google.rating}/5`,
      label: "Google customer rating",
      sublabel: `Based on ${reviewSources.google.count} reviews →`,
      href: reviewSources.google.url
    },
    {
      value: `${businessInfo.experienceYears} years`,
      label: "Engineering experience",
      sublabel: "Local, approachable appliance specialists"
    }
  ],
  pricingSection: {
    badge: "Transparent Pricing",
    title: "Clear Pricing for Your Appliance Repair",
    subtitle: "Inspired by honest local engineering. We quote clearly before any repair work commences, with no hidden call-out shocks.",
    diagnosticNote: "Every standard visit includes comprehensive on-site fault diagnosis and labour for approved repairs. If specialist parts are required, we provide an exact price before proceeding.",
    transparentPromise: "No hidden charges. Clear quotes before any work proceeds."
  },
  servicesSection: {
    badge: "What We Repair",
    title: "Priority Domestic Appliance Services",
    subtitle: "Expert repairs for kitchen and laundry appliances. We diagnose the issue accurately and explain the next step in plain English."
  },
  coverageSection: {
    badge: "Local Coverage",
    title: "Check If We Cover Your Postcode",
    subtitle: "We serve households across Greater London and Surrey and nearby areas. Enter your postcode or prefix below to check our listed service districts.",
    inputLabel: "Enter your postcode or prefix",
    inputPlaceholder: "e.g. TW19, SW1A, KT1, W2, UB8...",
    buttonText: "Check Coverage",
    coverageConfirmedText: "Good news! We provide appliance repair coverage in",
    coverageUnavailableText: "is not in our primary 20-mile automated zone. Please message us on WhatsApp to check engineer availability in your area.",
    popularAreasNotice: "Serving Twickenham, Richmond, Kingston, Hounslow, Slough, Guildford, Ealing, Wimbledon, Croydon, and Central London postcodes."
  },
  processSection: {
    badge: "Simple 4-Step Process",
    title: "How Your Appliance Repair Works",
    subtitle: "Getting your machine back up and running is straightforward and stress-free.",
    steps: [
      {
        stepNumber: "01",
        title: "Contact Us With Your Fault",
        description: "Send us a quick message via WhatsApp or call us. Tell us your appliance make, model, and what problem you are facing."
      },
      {
        stepNumber: "02",
        title: "Price & Arrival Slot",
        description: "We provide a quote starting from £75 and book a convenient arrival slot between 8:00 AM and 8:00 PM."
      },
      {
        stepNumber: "03",
        title: "Thorough On-Site Diagnosis",
        description: "Our engineer inspects your appliance, identifies the exact fault, and explains the repair clearly before completing the work."
      },
      {
        stepNumber: "04",
        title: "Testing & Full Peace of Mind",
        description: "We thoroughly safety-test the appliance through a test cycle and leave your kitchen or utility room spotless."
      }
    ]
  },
  aboutSection: {
    badge: "About Ask Appliance Repairs",
    title: "Dedicated Local Engineers You Can Rely On",
    leadParagraph: "Ask Appliance Repairs Ltd was built on a simple principle: domestic appliance repair should be straightforward, honest, and delivered with cooperative, professional service.",
    bodyParagraph: "With five years of domestic engineering experience, we understand how disruptive a broken washing machine or cold cooker is to family life. We bring the right tools, practical expertise, and clear communication directly to your doorstep.",
    pillars: [
      {
        badge: "01",
        title: "Transparent Price",
        description: "We explain costs before starting work. Starting from £75, with no hidden add-ons."
      },
      {
        badge: "02",
        title: "Approachable & Clear",
        description: "We speak in plain English without confusing jargon, explaining the root cause of the breakdown."
      },
      {
        badge: "03",
        title: "Everyday Availability",
        description: "Operating 8:00 AM – 8:00 PM every day so you don't need to take time off work."
      }
    ],
    ctaText: "Discuss Your Repair With An Engineer"
  },
  reviewsSection: {
    badge: "Customer Feedback",
    title: "Trusted by Thousands of Happy Customers",
    subtitle: "Real feedback from customers who trust us to get their appliances working again.",
    selectedTitle: "Selected five-star Google reviews"
  },
  ctaBanner: {
    title: "Have an Appliance That Needs Repairing Today?",
    subtitle: "Speak directly with our friendly engineers. We're open from 8:00 AM to 8:00 PM every day.",
    hoursNotice: "Open 8:00 AM – 8:00 PM • Fast Response on WhatsApp",
    primaryCta: "Book a Repair Now",
    secondaryCta: "WhatsApp 07340 002079"
  }
};
