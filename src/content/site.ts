export interface BusinessInfo {
  name: string;
  legalName: string;
  registrationNumber: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  whatsappNumber: string;
  whatsappUrl: string;
  facebookUrl: string;
  openingHours: string;
  openingHoursShort: string;
  openingHoursSchema: string[];
  serviceArea: string;
  serviceRadiusMiles: number;
  experienceYears: number;
  startingPrice: number;
  startingPriceFormatted: string;
}

export interface HeaderContent {
  tagline: string;
  hoursNotice: string;
  phoneAriaLabel: string;
  whatsappAriaLabel: string;
  bookCtaText: string;
  menuOpenAria: string;
  menuCloseAria: string;
}

export interface FooterContent {
  companySummary: string;
  servicesTitle: string;
  areasTitle: string;
  contactTitle: string;
  legalTitle: string;
  registrationNotice: string;
  disclaimer: string;
  copyright: string;
  facebookLinkText: string;
  creatorLabel: string;
  creatorName: string;
  creatorUrl: string;
}

export interface QuoteModalContent {
  title: string;
  subtitle: string;
  applianceLabel: string;
  appliancePlaceholder: string;
  faultLabel: string;
  faultPlaceholder: string;
  postcodeLabel: string;
  postcodePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  nameLabel: string;
  namePlaceholder: string;
  submitWhatsAppText: string;
  submitCallText: string;
  closeAriaLabel: string;
  illustrativeNote: string;
  successTitle: string;
  successMessage: string;
}

export interface CookieConsentContent {
  title: string;
  message: string;
  acceptText: string;
  declineText: string;
  policyLinkText: string;
}

export const businessInfo: BusinessInfo = {
  name: "Ask Appliance Repairs Ltd",
  legalName: "Ask Appliance Repairs Ltd",
  registrationNumber: "16560507",
  phone: "+44 7340 002079",
  phoneFormatted: "07340 002079",
  email: "info@askappliancerepairs.com",
  whatsappNumber: "447340002079",
  whatsappUrl: "https://wa.me/447340002079?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20an%20appliance%20repair.",
  facebookUrl: "https://www.facebook.com/askappliancerepairs",
  openingHours: "Monday – Sunday: 8:00 AM – 8:00 PM",
  openingHoursShort: "8am – 8pm Every Day",
  openingHoursSchema: [
    "Mo-Su 08:00-20:00"
  ],
  serviceArea: "Greater London & Surrey (within 20 miles)",
  serviceRadiusMiles: 20,
  experienceYears: 5,
  startingPrice: 75,
  startingPriceFormatted: "£75"
};

export const coveredPostcodes: string[] = [
  // TW (Twickenham/Richmond/West London)
  "TW1", "TW2", "TW3", "TW4", "TW5", "TW6", "TW7", "TW8", "TW9", "TW10", "TW11", "TW12", "TW13", "TW14", "TW15", "TW16", "TW17", "TW18", "TW19", "TW20",
  // UB (Southall/Uxbridge)
  "UB1", "UB2", "UB3", "UB4", "UB5", "UB6", "UB7", "UB8", "UB9", "UB10", "UB11",
  // HA (Harrow)
  "HA1", "HA2", "HA3", "HA4", "HA5", "HA6", "HA7", "HA8", "HA9",
  // SL (Slough/Berkshire)
  "SL1", "SL2", "SL3", "SL4", "SL5", "SL6", "SL7", "SL8", "SL9",
  // KT (Kingston/Surrey)
  "KT1", "KT2", "KT3", "KT4", "KT5", "KT6", "KT7", "KT8", "KT9", "KT10", "KT11", "KT12", "KT13", "KT14", "KT15", "KT16", "KT17", "KT18", "KT19", "KT20", "KT21", "KT22", "KT23", "KT24",
  // GU (Guildford/Surrey)
  "GU1", "GU2", "GU3", "GU4", "GU5", "GU6", "GU7", "GU8", "GU9", "GU10", "GU11", "GU12", "GU13", "GU14", "GU15", "GU16", "GU17", "GU18", "GU19", "GU20", "GU21", "GU22", "GU23", "GU24", "GU25", "GU26", "GU27", "GU28", "GU29", "GU30", "GU31", "GU32", "GU33", "GU34", "GU35",
  // SW (South West London)
  "SW1", "SW2", "SW3", "SW4", "SW5", "SW6", "SW7", "SW8", "SW9", "SW10", "SW11", "SW12", "SW13", "SW14", "SW15", "SW16", "SW17", "SW18", "SW19", "SW20",
  // W (West London)
  "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "W13", "W14",
  // NW (North West London)
  "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10", "NW11",
  // N (North London)
  "N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9", "N10", "N11", "N12", "N13", "N14", "N15", "N16", "N17", "N18", "N19", "N20", "N21", "N22",
  // WC & EC (Central London)
  "WC1", "WC2", "EC1", "EC2", "EC3", "EC4",
  // E (East London)
  "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15", "E16", "E17", "E18", "E20",
  // SE (South East London)
  "SE1", "SE2", "SE3", "SE4", "SE5", "SE6", "SE7", "SE8", "SE9", "SE10", "SE11", "SE12", "SE13", "SE14", "SE15", "SE16", "SE17", "SE18", "SE19", "SE20", "SE21", "SE22", "SE23", "SE24", "SE25", "SE26", "SE27", "SE28",
  // Outer London
  "EN1", "EN2", "EN3", "EN4", "EN5", "EN6", "EN7", "EN8", "EN9", "EN10", "EN11",
  "IG1", "IG2", "IG3", "IG4", "IG5", "IG6", "IG7", "IG8", "IG9", "IG10", "IG11",
  "RM1", "RM2", "RM3", "RM4", "RM5", "RM6", "RM7", "RM8", "RM9", "RM10", "RM11", "RM12", "RM13", "RM14", "RM15", "RM16", "RM17", "RM18", "RM19", "RM20",
  "SM1", "SM2", "SM3", "SM4", "SM5", "SM6", "SM7",
  "CR0", "CR2", "CR3", "CR4", "CR5", "CR6", "CR7", "CR8", "CR9",
  "BR1", "BR2", "BR3", "BR4", "BR5", "BR6", "BR7", "BR8"
];

export const headerContent: HeaderContent = {
  tagline: "Local Domestic Appliance Repairs Across London & Surrey",
  hoursNotice: "Open 8:00 AM – 8:00 PM Every Day",
  phoneAriaLabel: "Call Ask Appliance Repairs Ltd directly on 07340 002079",
  whatsappAriaLabel: "Chat with an engineer on WhatsApp",
  bookCtaText: "Book a Repair",
  menuOpenAria: "Open navigation menu",
  menuCloseAria: "Close navigation menu"
};

export const footerContent: FooterContent = {
  companySummary: "Experienced, approachable domestic appliance repairs for cookers, tumble dryers, washing machines, and dishwashers across London and Surrey.",
  servicesTitle: "Our Services",
  areasTitle: "Service Coverage",
  contactTitle: "Get in Touch",
  legalTitle: "Information & Compliance",
  registrationNotice: "Ask Appliance Repairs Ltd is registered in England & Wales (Company No. 16560507).",
  disclaimer: "All quotes provided upfront after comprehensive diagnostic inspection. Starting from £75. Parts charged separately where required.",
  copyright: "© 2026 Ask Appliance Repairs Ltd. All rights reserved.",
  facebookLinkText: "Follow us on Facebook",
  creatorLabel: "Website Created By:",
  creatorName: "FinTaxTech Ltd",
  creatorUrl: "https://fintaxtech.co.uk/"
};

export const quoteModalContent: QuoteModalContent = {
  title: "Book a Repair or Get a Quick Quote",
  subtitle: "Tell us what your appliance is doing, and our friendly engineers will discuss the next step.",
  applianceLabel: "Appliance Type",
  appliancePlaceholder: "Select your appliance...",
  faultLabel: "Describe the Issue",
  faultPlaceholder: "e.g. Washing machine not draining, cooker not heating up...",
  postcodeLabel: "Your Postcode",
  postcodePlaceholder: "e.g. TW19 7NG, SW1A 1AA",
  phoneLabel: "Phone Number",
  phonePlaceholder: "e.g. 07123 456789",
  nameLabel: "Your Name",
  namePlaceholder: "e.g. Sarah Jenkins",
  submitWhatsAppText: "Send via WhatsApp",
  submitCallText: "Call Us Instead",
  closeAriaLabel: "Close repair enquiry modal",
  illustrativeNote: "Opens WhatsApp with your repair details. Send the message there to request a quote; your visit is confirmed once we agree a time.",
  successTitle: "Enquiry Prepared",
  successMessage: "Click below to send your pre-filled repair enquiry directly to our WhatsApp service desk."
};

export const cookieConsentContent: CookieConsentContent = {
  title: "Cookie & Privacy Notice",
  message: "We use essential cookies to maintain website functionality. No tracking cookies are used without your explicit consent.",
  acceptText: "Accept Essential",
  declineText: "Decline Non-Essential",
  policyLinkText: "Privacy Policy"
};
