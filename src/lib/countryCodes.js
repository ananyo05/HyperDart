// Dictionary of common country names/aliases to ISO alpha-2 codes
export const COMMON_COUNTRY_MAP = {
  'united states': 'US',
  'united states of america': 'US',
  'usa': 'US',
  'us': 'US',
  'united kingdom': 'GB',
  'uk': 'GB',
  'great britain': 'GB',
  'england': 'GB',
  'gb': 'GB',
  'scotland': 'GB',
  'wales': 'GB',
  'northern ireland': 'GB',
  'canada': 'CA',
  'ca': 'CA',
  'japan': 'JP',
  'jp': 'JP',
  'germany': 'DE',
  'de': 'DE',
  'india': 'IN',
  'in': 'IN',
  'china': 'CN',
  'cn': 'CN',
  'australia': 'AU',
  'au': 'AU',
  'france': 'FR',
  'fr': 'FR',
  'brazil': 'BR',
  'br': 'BR',
  'italy': 'IT',
  'it': 'IT',
  'spain': 'ES',
  'es': 'ES',
  'russia': 'RU',
  'ru': 'RU',
  'south africa': 'ZA',
  'za': 'ZA',
  'new zealand': 'NZ',
  'nz': 'NZ',
  'mexico': 'MX',
  'mx': 'MX',
  'netherlands': 'NL',
  'nl': 'NL',
  'switzerland': 'CH',
  'ch': 'CH',
  'sweden': 'SE',
  'se': 'SE',
  'norway': 'NO',
  'no': 'NO',
  'finland': 'FI',
  'fi': 'FI',
  'denmark': 'DK',
  'dk': 'DK',
  'ireland': 'IE',
  'ie': 'IE',
  'belgium': 'BE',
  'be': 'BE',
  'austria': 'AT',
  'at': 'AT',
  'poland': 'PL',
  'pl': 'PL',
  'portugal': 'PT',
  'pt': 'PT',
  'singapore': 'SG',
  'sg': 'SG',
  'hong kong': 'HK',
  'hk': 'HK',
  'south korea': 'KR',
  'korea': 'KR',
  'kr': 'KR',
};

/**
 * Resolves a country code from a raw name or code string
 * @param {string} input - The country name or code (e.g. "USA", "Germany", "gb")
 * @param {Array<{key: string, value: string}>} availableCountries - Dynamic list of available countries from Nager.Date
 * @returns {{code: string, name: string}|null}
 */
export function resolveCountryCode(input, availableCountries = []) {
  if (!input) return null;
  const cleanInput = input.trim().toLowerCase();

  // 1. Check common map first
  if (COMMON_COUNTRY_MAP[cleanInput]) {
    const code = COMMON_COUNTRY_MAP[cleanInput];
    // Find the official name from available countries if possible
    const official = availableCountries.find(c => c.key.toUpperCase() === code.toUpperCase());
    return {
      code,
      name: official ? official.value : code
    };
  }

  // 2. Check direct match in available countries list by key (ISO code)
  const codeMatch = availableCountries.find(c => c.key.toLowerCase() === cleanInput);
  if (codeMatch) {
    return {
      code: codeMatch.key.toUpperCase(),
      name: codeMatch.value
    };
  }

  // 3. Check fuzzy match in available countries list by value (Name)
  const nameMatch = availableCountries.find(c => c.value.toLowerCase() === cleanInput);
  if (nameMatch) {
    return {
      code: nameMatch.key.toUpperCase(),
      name: nameMatch.value
    };
  }

  // 4. Check if input is a 2-letter uppercase word (assume it is a code)
  if (cleanInput.length === 2) {
    return {
      code: cleanInput.toUpperCase(),
      name: cleanInput.toUpperCase()
    };
  }

  // 5. Try substring/fuzzy match on country name
  const fuzzyMatch = availableCountries.find(c => c.value.toLowerCase().includes(cleanInput));
  if (fuzzyMatch) {
    return {
      code: fuzzyMatch.key.toUpperCase(),
      name: fuzzyMatch.value
    };
  }

  return null;
}
