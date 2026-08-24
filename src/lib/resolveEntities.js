import { resolveCountryCode } from './countryCodes';

/**
 * Parses searchData for HD_LOCATION entities and user location fallbacks.
 * Supports resolving multiple countries for comparison.
 * 
 * @param {Object} searchData - The searchData object from props
 * @param {Array} availableCountries - Available countries from API
 * @returns {{ primaryCountry: {code: string, name: string}, allCountries: Array<{code: string, name: string}> }}
 */
export function resolveEntities(searchData, availableCountries = []) {
  const allCountries = [];
  
  if (searchData && searchData.entities && Array.isArray(searchData.entities)) {
    // Look for HD_LOCATION entities
    const locationEntities = searchData.entities.filter(
      entity => entity.collectionType === 'HD_LOCATION' || entity.entityType === 'HD_LOCATION' || entity.wgName === 'HD_LOCATION'
    );

    locationEntities.forEach(entity => {
      // 1. Check entityInfo.geo.countryCode first as authoritative
      let code = entity.entityInfo?.geo?.countryCode || entity.entityInfo?.countryCode || entity.entityInfo?.geo?.country;
      let name = entity.entityInfo?.geo?.countryName || entity.word || entity.primaryText;
      
      // If code is "UK", map it to "GB" (standard Nager.Date expects GB)
      if (code && code.toUpperCase() === 'UK') {
        code = 'GB';
      }

      if (code) {
        // Find official name from available countries if possible
        const official = availableCountries.find(c => c.key.toUpperCase() === code.toUpperCase());
        allCountries.push({
          code: code.toUpperCase(),
          name: official ? official.value : name || code
        });
      } else {
        // 2. Fuzzy match word/primaryText against countryCodes
        const resolved = resolveCountryCode(entity.word || entity.primaryText, availableCountries);
        if (resolved) {
          allCountries.push(resolved);
        }
      }
    });
  }

  // Deduplicate countries
  const seen = new Set();
  const dedupedCountries = allCountries.filter(c => {
    const key = c.code.toUpperCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Fallback to user location if no country was resolved from query entities
  let primaryCountry = dedupedCountries[0] || null;

  if (!primaryCountry && searchData) {
    const userCountryCode = 
      searchData.userLocation?.position?.coords?.countryCode ||
      searchData.userLocation?.countryCode ||
      searchData.userLocation?.position?.countryCode;

    if (userCountryCode) {
      const code = userCountryCode.toUpperCase() === 'UK' ? 'GB' : userCountryCode.toUpperCase();
      const official = availableCountries.find(c => c.key.toUpperCase() === code);
      primaryCountry = {
        code,
        name: official ? official.value : code
      };
      dedupedCountries.push(primaryCountry);
    }
  }

  // Default default fallback to US if still nothing
  if (!primaryCountry) {
    primaryCountry = { code: 'US', name: 'United States' };
    dedupedCountries.push(primaryCountry);
  }

  return {
    primaryCountry,
    allCountries: dedupedCountries
  };
}
