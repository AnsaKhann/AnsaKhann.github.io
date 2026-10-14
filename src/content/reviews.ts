// Manually checked on the linked public profiles on 14 October 2026.
// These are selected review excerpts, not a live feed or an overall five-star claim.
export const reviewSources = {
  checkedOn: "14 October 2026",
  google: {
    url: "https://maps.app.goo.gl/Zn9xq5vxg7qYB4429",
    rating: "4.9",
    count: 53
  },
  checkatrade: {
    url: "https://www.checkatrade.com/trades/usmansrepairs",
    profileName: "Usmans Repairs",
    headline: "Over 200 reviews on Checkatrade"
  },
  customerMilestone: "Nearly 5,000 happy customers"
} as const;

export const googleReviews = [
  {
    author: "Devi Santhosh",
    service: "Washing machine repair",
    excerpt: "Reasonable pricing and speedy response.",
    initials: "DS"
  },
  {
    author: "Georgina A J Rivers",
    service: "Oven repair",
    excerpt: "he was upfront about the labour costs from the start",
    initials: "GR"
  },
  {
    author: "Jean Ajin MBE",
    service: "Oven repair",
    excerpt: "Excellent service",
    initials: "JA"
  }
] as const;
