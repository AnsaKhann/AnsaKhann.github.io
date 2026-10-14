export interface NavItem {
  id: string;
  label: string;
  href: string;
  ariaLabel: string;
  isExternal?: boolean;
}

export const routes = {
  home: "/",
  services: "/#services",
  pricing: "/#pricing",
  howItWorks: "/#how-it-works",
  coverage: "/#coverage",
  about: "/#about",
  reviews: "/#reviews",
  contact: "/#contact",
  blog: "/blog",
  privacy: "/privacy",
  terms: "/terms",
  llms: "/llms.txt"
} as const;

export const mainNavItems: NavItem[] = [
  {
    id: "nav-services",
    label: "Services",
    href: routes.services,
    ariaLabel: "View our appliance repair services"
  },
  {
    id: "nav-pricing",
    label: "Pricing",
    href: routes.pricing,
    ariaLabel: "View transparent repair pricing starting from £75"
  },
  {
    id: "nav-how-it-works",
    label: "How It Works",
    href: routes.howItWorks,
    ariaLabel: "Learn about our 4-step repair process"
  },
  {
    id: "nav-coverage",
    label: "Coverage",
    href: routes.coverage,
    ariaLabel: "Check your London postcode coverage"
  },
  {
    id: "nav-about",
    label: "About Us",
    href: routes.about,
    ariaLabel: "About Ask Appliance Repairs Ltd"
  },
  {
    id: "nav-reviews",
    label: "Reviews",
    href: routes.reviews,
    ariaLabel: "Read customer reviews"
  },
  {
    id: "nav-blog",
    label: "Blog",
    href: routes.blog,
    ariaLabel: "Read appliance advice from our engineers"
  },
  {
    id: "nav-contact",
    label: "Contact",
    href: routes.contact,
    ariaLabel: "Contact our repair engineers"
  }
];

export const legalNavItems: NavItem[] = [
  {
    id: "nav-privacy",
    label: "Privacy Policy",
    href: routes.privacy,
    ariaLabel: "Read our privacy policy"
  },
  {
    id: "nav-terms",
    label: "Terms of Service",
    href: routes.terms,
    ariaLabel: "Read our terms of service"
  },
  {
    id: "nav-llms",
    label: "AI Guide (llms.txt)",
    href: routes.llms,
    ariaLabel: "Machine-readable llms.txt guide"
  }
];
