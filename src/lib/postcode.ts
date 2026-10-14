import { coveredPostcodes } from '../content/site';

export interface PostcodeCheckResult {
  isValidFormat: boolean;
  isCovered: boolean;
  cleanInput: string;
  matchedArea?: string;
  feedbackMessage: string;
}

/**
 * Normalises an input postcode string into uppercase alphanumeric characters.
 */
export function normalisePostcode(raw: string): string {
  return raw.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

/**
 * Extracts the outward code prefix from a normalized postcode or partial string.
 * Example: 'TW197NG' -> 'TW19', 'SW1A1AA' -> 'SW1A', 'KT1' -> 'KT1'
 */
export function extractOutwardPrefix(clean: string): string {
  // If input is short (e.g. "TW19", "SW1"), return as-is
  if (clean.length <= 4) {
    return clean;
  }
  // Standard UK outward code is everything before the final 3 characters (inward code)
  return clean.slice(0, -3);
}

/**
 * Checks whether a user-submitted postcode falls within the Ask Appliance Repairs service area.
 */
export function checkPostcodeCoverage(input: string): PostcodeCheckResult {
  const clean = normalisePostcode(input);

  if (!clean || clean.length < 2) {
    return {
      isValidFormat: false,
      isCovered: false,
      cleanInput: input,
      feedbackMessage: "Please enter a valid UK postcode prefix (e.g. TW19, SW1A, KT1)."
    };
  }

  const outward = extractOutwardPrefix(clean);

  // Exact match on outward code
  const exactMatch = coveredPostcodes.find((prefix) => prefix === outward || prefix === clean);
  if (exactMatch) {
    return {
      isValidFormat: true,
      isCovered: true,
      cleanInput: clean,
      matchedArea: exactMatch,
      feedbackMessage: `Great news! We provide full domestic repair coverage in ${exactMatch}.`
    };
  }

  // Check prefix match (e.g. user typed "TW" or "SW")
  const areaLetters = clean.match(/^[A-Z]{1,2}/)?.[0] || '';
  const hasAreaPresence = coveredPostcodes.some((p) => p.startsWith(areaLetters));

  if (hasAreaPresence) {
    return {
      isValidFormat: true,
      isCovered: true,
      cleanInput: clean,
      matchedArea: clean,
      feedbackMessage: `Good news! We cover areas in the ${areaLetters} postal district. Contact us to schedule an engineer visit.`
    };
  }

  return {
    isValidFormat: true,
    isCovered: false,
    cleanInput: clean,
    feedbackMessage: `${clean} is just outside our primary 20-mile automated coverage. Send us a quick WhatsApp message to see if an engineer is nearby!`
  };
}
