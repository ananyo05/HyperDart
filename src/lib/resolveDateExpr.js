const MONTH_MAP = {
  january: 0, jan: 0,
  february: 1, feb: 1,
  march: 2, mar: 2,
  april: 3, apr: 3,
  may: 4,
  june: 5, jun: 5,
  july: 6, jul: 6,
  august: 7, aug: 7,
  september: 8, sep: 8, sept: 8,
  october: 9, oct: 9,
  november: 10, nov: 10,
  december: 11, dec: 11
};

/**
 * Deterministically parses year, month, date, and intent from a query string.
 * Uses 2026-08-24 as the reference date based on the local system time context.
 * 
 * @param {string} query - The query string (e.g. "Holidays in Japan July 2026")
 * @returns {{ year: number, month: number|null, date: number|null, relativeDateStr: string|null, intent: 'LIST_YEAR'|'LIST_MONTH'|'CHECK_DATE' }}
 */
export function resolveDateExpr(query) {
  if (!query) {
    // Default to today
    const now = new Date(2026, 7, 24); // 2026-08-24
    return {
      year: 2026,
      month: 7,
      date: 24,
      relativeDateStr: '2026-08-24',
      intent: 'CHECK_DATE'
    };
  }

  const clean = query.toLowerCase().trim();
  const refDate = new Date(2026, 7, 24); // August 24, 2026

  let year = refDate.getFullYear();
  let month = null;
  let date = null;
  let intent = 'LIST_YEAR';
  let relativeDateStr = null;

  // 1. Resolve Year
  const yearMatch = clean.match(/\b(20\d{2})\b/);
  if (yearMatch) {
    year = parseInt(yearMatch[1], 10);
  } else if (clean.includes('next year')) {
    year = refDate.getFullYear() + 1;
  } else if (clean.includes('last year')) {
    year = refDate.getFullYear() - 1;
  } else if (clean.includes('this year')) {
    year = refDate.getFullYear();
  }

  // 2. Resolve Month (Check names)
  let foundMonthKey = null;
  for (const mKey of Object.keys(MONTH_MAP)) {
    // Use word boundaries to avoid false positives (like "march" matches in "merchant")
    const regex = new RegExp(`\\b${mKey}\\b`, 'i');
    if (regex.test(clean)) {
      foundMonthKey = mKey;
      break;
    }
  }

  if (foundMonthKey !== null) {
    month = MONTH_MAP[foundMonthKey];
    intent = 'LIST_MONTH';
  } else if (clean.includes('next month')) {
    const nextMonthDate = new Date(refDate.getFullYear(), refDate.getMonth() + 1, 1);
    month = nextMonthDate.getMonth();
    // Only adjust year if it was not explicitly specified
    if (!yearMatch) {
      year = nextMonthDate.getFullYear();
    }
    intent = 'LIST_MONTH';
  } else if (clean.includes('last month')) {
    const lastMonthDate = new Date(refDate.getFullYear(), refDate.getMonth() - 1, 1);
    month = lastMonthDate.getMonth();
    if (!yearMatch) {
      year = lastMonthDate.getFullYear();
    }
    intent = 'LIST_MONTH';
  } else if (clean.includes('this month')) {
    month = refDate.getMonth();
    intent = 'LIST_MONTH';
  }

  // 3. Resolve Specific Date Check (e.g. Today/Tomorrow/Yesterday/July 4)
  if (clean.includes('today')) {
    year = refDate.getFullYear();
    month = refDate.getMonth();
    date = refDate.getDate();
    intent = 'CHECK_DATE';
  } else if (clean.includes('tomorrow')) {
    const tom = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate() + 1);
    year = tom.getFullYear();
    month = tom.getMonth();
    date = tom.getDate();
    intent = 'CHECK_DATE';
  } else if (clean.includes('yesterday')) {
    const yest = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate() - 1);
    year = yest.getFullYear();
    month = yest.getMonth();
    date = yest.getDate();
    intent = 'CHECK_DATE';
  } else {
    // Try matching specific day-month combos like: "july 4", "4 july", "4th of july", "12/25"
    // Pattern 1: month_name + day (e.g. "july 4", "july 4th", "july 04")
    const p1 = clean.match(new RegExp(`\\b(${Object.keys(MONTH_MAP).join('|')})\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b`));
    if (p1) {
      month = MONTH_MAP[p1[1]];
      date = parseInt(p1[2], 10);
      intent = 'CHECK_DATE';
    } else {
      // Pattern 2: day + month_name (e.g. "4 july", "4th july", "4th of july")
      const p2 = clean.match(new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(?:of\\s+)?(${Object.keys(MONTH_MAP).join('|')})\\b`));
      if (p2) {
        month = MONTH_MAP[p2[2]];
        date = parseInt(p2[1], 10);
        intent = 'CHECK_DATE';
      } else {
        // Pattern 3: MM/DD or DD/MM style slashes (e.g., 12/25 or 25/12 or 7-4)
        const p3 = clean.match(/\b(\d{1,2})[/-](\d{1,2})\b/);
        if (p3) {
          const val1 = parseInt(p3[1], 10);
          const val2 = parseInt(p3[2], 10);
          // Let's assume standard US/UK format logic:
          // If val1 <= 12 and val2 <= 31, then MM/DD.
          // Otherwise, if val1 <= 31 and val2 <= 12, then DD/MM.
          if (val1 <= 12 && val2 <= 31) {
            month = val1 - 1;
            date = val2;
            intent = 'CHECK_DATE';
          } else if (val1 <= 31 && val2 <= 12) {
            month = val2 - 1;
            date = val1;
            intent = 'CHECK_DATE';
          }
        }
      }
    }
  }

  // Formatting date string if CHECK_DATE is resolved
  if (intent === 'CHECK_DATE' && month !== null && date !== null) {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(date).padStart(2, '0');
    relativeDateStr = `${year}-${formattedMonth}-${formattedDay}`;
  }

  return {
    year,
    month,
    date,
    relativeDateStr,
    intent
  };
}
