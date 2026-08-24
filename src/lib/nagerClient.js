// In-memory cache for holidays and available countries
const holidayCache = {};
let availableCountriesCache = null;

/**
 * Fetches the list of all supported countries from Nager.Date.
 * Caches the response in memory.
 * 
 * @returns {Promise<Array<{key: string, value: string}>>}
 */
export async function fetchAvailableCountries() {
  if (availableCountriesCache) {
    return availableCountriesCache;
  }

  try {
    const res = await fetch('https://date.nager.at/api/v4/AvailableCountries');
    if (!res.ok) {
      throw new Error(`Failed to fetch countries: status ${res.status}`);
    }
    const data = await res.json();
    availableCountriesCache = data || [];
    return availableCountriesCache;
  } catch (error) {
    console.error('Error fetching available countries:', error);
    // Return standard fallback if offline or failed
    return [
      { key: 'US', value: 'United States' },
      { key: 'GB', value: 'United Kingdom' },
      { key: 'CA', value: 'Canada' },
      { key: 'JP', value: 'Japan' },
      { key: 'DE', value: 'Germany' },
      { key: 'IN', value: 'India' },
      { key: 'CN', value: 'China' },
      { key: 'AU', value: 'Australia' },
      { key: 'FR', value: 'France' },
      { key: 'BR', value: 'Brazil' },
      { key: 'IT', value: 'Italy' },
      { key: 'ES', value: 'Spain' },
      { key: 'RU', value: 'Russia' },
      { key: 'ZA', value: 'South Africa' },
      { key: 'NZ', value: 'New Zealand' }
    ];
  }
}

/**
 * Fetches holidays for a specific country and year from Nager.Date.
 * Caches responses by `${countryCode}-${year}`.
 * 
 * @param {string} countryCode - ISO alpha-2 country code (e.g. "US", "GB")
 * @param {number} year - 4-digit year (e.g. 2026)
 * @returns {Promise<Array<{date: string, localName: string, name: string, countryCode: string, fixed: boolean, global: boolean, counties: Array<string>|null, launchYear: number|null, types: Array<string>}>>}
 */
export async function fetchHolidays(countryCode, year) {
  if (!countryCode || !year) return [];
  
  const cleanCode = countryCode.trim().toUpperCase();
  const cacheKey = `${cleanCode}-${year}`;

  if (holidayCache[cacheKey]) {
    return holidayCache[cacheKey];
  }

  try {
    const url = `https://date.nager.at/api/v4/Holidays/${cleanCode}/${year}`;
    const res = await fetch(url);
    
    if (res.status === 404) {
      // 404 means country-year not supported or invalid code. Cache empty to prevent spamming
      holidayCache[cacheKey] = [];
      return [];
    }

    if (!res.ok) {
      throw new Error(`Nager API returned status ${res.status}`);
    }

    const data = await res.json();
    const holidays = Array.isArray(data) ? data : [];
    
    // Cache it
    holidayCache[cacheKey] = holidays;
    return holidays;
  } catch (error) {
    console.error(`Error fetching holidays for ${cleanCode} in ${year}:`, error);
    // Do not cache failures permanently, but return empty array to prevent crashing UI
    return [];
  }
}
