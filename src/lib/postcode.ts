import { coveredPostcodes } from '../content/site';

export interface PostcodeCheckResult {
  isValidFormat: boolean;
  isCovered: boolean;
  cleanInput: string;
  matchedArea?: string;
  feedbackMessage: string;
}

export function normalisePostcode(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, '');
}

// Accept an outward code or a complete UK postcode, including SW1A and EC1A.
const postcodePattern = /^([A-Z]{1,2}\d[\dA-Z]?)(?:\d[A-Z]{2})?$/;

export function extractOutwardPrefix(clean: string): string {
  return clean.match(postcodePattern)?.[1] ?? '';
}

export function checkPostcodeCoverage(input: string): PostcodeCheckResult {
  const clean = normalisePostcode(input);
  const outward = extractOutwardPrefix(clean);
  if (!outward) {
    return {
      isValidFormat: false, isCovered: false, cleanInput: clean,
      feedbackMessage: 'Please enter a UK postcode or prefix (e.g. TW19, SW1A, KT1 or TW19 7NG).'
    };
  }

  // Letter subdivisions such as SW1A and N1C belong to SW1 and N1.
  // An unlisted numbered district such as TW99 must not match the whole TW area.
  const district = outward.replace(/([0-9])[A-Z]$/, '$1');
  const isCovered = coveredPostcodes.includes(outward) || coveredPostcodes.includes(district);
  return {
    isValidFormat: true, isCovered, cleanInput: clean, matchedArea: outward,
    feedbackMessage: isCovered
      ? `Great news! We cover ${outward}.`
      : `${outward} is not in our listed service area. Contact us to check availability.`
  };
}
