import { serviceIcons } from './assets';

export interface ServiceInclusion {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  applianceCategory: string;
  priceFrom: string;
  priceNumeric: number;
  highlighted: boolean;
  badge?: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
  inclusions: string[];
  ctaText: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  priorityOrder: number;
  iconKey: keyof typeof serviceIcons;
  summary: string;
  commonFaults: string[];
  supportedBrands: string[];
  priceFrom: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "pricing-cooker",
    name: "Cooker & Oven Repair",
    applianceCategory: "Cookers & Ovens",
    priceFrom: "£75",
    priceNumeric: 75,
    highlighted: true,
    badge: "Priority Service",
    description: "Complete fault diagnosis and repair for electric, fan, and dual-fuel ovens and cookers.",
    icon: {
      src: "/images/oven.png",
      alt: "Cooker & Oven Repair"
    },
    inclusions: [
      "Full Fault Diagnosis Included",
      "Labour Included for Approved Repairs",
      "Return Visit Included if Parts Are Required",
      "Parts Charged Separately if Required",
      "Clear Quotation Before Work Proceeds",
      "No Hidden Charges / Upfront Pricing"
    ],
    ctaText: "Book Cooker Repair"
  },
  {
    id: "pricing-dryer",
    name: "Tumble Dryer Repair",
    applianceCategory: "Tumble Dryers",
    priceFrom: "£75",
    priceNumeric: 75,
    highlighted: false,
    badge: "Popular Service",
    description: "Rapid diagnosis and repair for condenser, vented, and modern heat-pump dryers.",
    icon: {
      src: "/images/tumble-dryer.png",
      alt: "Tumble Dryer Repair"
    },
    inclusions: [
      "Full Fault Diagnosis Included",
      "Labour Included for Approved Repairs",
      "Return Visit Included if Parts Are Required",
      "Parts Charged Separately if Required",
      "Clear Quotation Before Work Proceeds",
      "No Hidden Charges / Upfront Pricing"
    ],
    ctaText: "Book Dryer Repair"
  },
  {
    id: "pricing-washing-machine",
    name: "Washing Machine Repair",
    applianceCategory: "Washing Machines",
    priceFrom: "£75",
    priceNumeric: 75,
    highlighted: true,
    badge: "Most Requested",
    description: "Expert diagnostic repair for freestanding and integrated washing machines & washer-dryers.",
    icon: {
      src: "/images/washing-machine.png",
      alt: "Washing Machine Repair"
    },
    inclusions: [
      "Full Fault Diagnosis Included",
      "Labour Included for Approved Repairs",
      "Return Visit Included if Parts Are Required",
      "Parts Charged Separately if Required",
      "Clear Quotation Before Work Proceeds",
      "No Hidden Charges / Upfront Pricing"
    ],
    ctaText: "Book Washer Repair"
  },
  {
    id: "pricing-dishwasher",
    name: "Dishwasher Repair",
    applianceCategory: "Dishwashers",
    priceFrom: "£75",
    priceNumeric: 75,
    highlighted: false,
    description: "Prompt troubleshooting and repair for leaks, drainage faults, and heating issues.",
    icon: {
      src: "/images/dishwasher.png",
      alt: "Dishwasher Repair"
    },
    inclusions: [
      "Full Fault Diagnosis Included",
      "Labour Included for Approved Repairs",
      "Return Visit Included if Parts Are Required",
      "Parts Charged Separately if Required",
      "Clear Quotation Before Work Proceeds",
      "No Hidden Charges / Upfront Pricing"
    ],
    ctaText: "Book Dishwasher Repair"
  }
];

export const servicesList: ServiceDetail[] = [
  {
    id: "service-cooker",
    title: "Cooker & Oven Repairs",
    priorityOrder: 1,
    iconKey: "cooker",
    priceFrom: "From £75",
    summary: "From uneven heating and faulty elements to thermostat issues and broken door seals, we restore your oven or cooker quickly.",
    commonFaults: [
      "Oven not heating or blowing cold air",
      "Uneven baking or burning food",
      "Faulty thermostats or grill elements",
      "Door glass and seal replacements",
      "Tripping the electrical circuit breaker"
    ],
    supportedBrands: ["Bosch", "Neff", "Hotpoint", "Beko", "Zanussi", "AEG", "Smeg", "Indesit"]
  },
  {
    id: "service-tumble-dryer",
    title: "Tumble Dryer Repairs",
    priorityOrder: 2,
    iconKey: "tumbleDryer",
    priceFrom: "From £75",
    summary: "Reliable repairs for vented, condenser, and heat-pump tumble dryers experiencing drum, belt, or heating problems.",
    commonFaults: [
      "Drum not turning or snapped drive belt",
      "Dryer runs but produces no heat",
      "Excessive noise, squeaking or vibration",
      "Clothes still damp after a full cycle",
      "Water tank full warning or pump blockages"
    ],
    supportedBrands: ["Beko", "Bosch", "Hotpoint", "Miele", "Candy", "Hoover", "Samsung", "AEG"]
  },
  {
    id: "service-washing-machine",
    title: "Washing Machine Repairs",
    priorityOrder: 3,
    iconKey: "washingMachine",
    priceFrom: "From £75",
    summary: "Comprehensive diagnostics for washing machines that fail to drain, won't spin, leak water, or stop mid-cycle.",
    commonFaults: [
      "Machine won't drain or display error code",
      "Drum won't spin or loud bearing rumble",
      "Leaking water from door seal or underneath",
      "Door locked shut and won't release",
      "Not taking in water or dispensing detergent"
    ],
    supportedBrands: ["Bosch", "Samsung", "LG", "Hotpoint", "Beko", "Indesit", "Miele", "Zanussi"]
  },
  {
    id: "service-dishwasher",
    title: "Dishwasher Repairs",
    priorityOrder: 4,
    iconKey: "dishwasher",
    priceFrom: "From £75",
    summary: "Fast troubleshooting for freestanding and integrated dishwashers that leave dishes dirty, leak, or fail to drain.",
    commonFaults: [
      "Standing water at the bottom of the tub",
      "Water leaking onto the kitchen floor",
      "Dishes coming out cold and wet",
      "Tablets not dissolving or spray arms blocked",
      "Continuous beeping or cycle stopping prematurely"
    ],
    supportedBrands: ["Bosch", "Neff", "Siemens", "Hotpoint", "Beko", "Miele", "Whirlpool"]
  },
  {
    id: "service-fridge",
    title: "Fridge & Freezer Repairs",
    priorityOrder: 5,
    iconKey: "fridge",
    priceFrom: "From £75",
    summary: "Diagnostic checks for domestic refrigeration units failing to maintain proper cooling temperature.",
    commonFaults: [
      "Fridge running warm while freezer is frozen",
      "Excessive frost and ice build-up",
      "Unusual compressor noises or clicking",
      "Water pooling in bottom crisper drawers"
    ],
    supportedBrands: ["Samsung", "Beko", "Bosch", "Hotpoint", "Liebherr", "LG", "Haier"]
  },
  {
    id: "service-hob",
    title: "Hob & Cooktop Repairs",
    priorityOrder: 6,
    iconKey: "hob",
    priceFrom: "From £75",
    summary: "Repairs for ceramic, electric, and induction hobs that won't heat, display error symbols, or fail to ignite.",
    commonFaults: [
      "Induction zones flashing error codes",
      "Hotplate elements failing to heat up",
      "Touch control sensors unresponsive",
      "Power regulator switches malfunctioning"
    ],
    supportedBrands: ["Bosch", "Neff", "Hotpoint", "AEG", "Beko", "Zanussi", "SMEG"]
  }
];
