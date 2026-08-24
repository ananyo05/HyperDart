/**
 * Formats a holiday object into standard iCalendar (ICS) event format.
 * 
 * @param {Object} holiday - The holiday object
 * @returns {string} - ICS event string
 */
function createICSEvent(holiday) {
  const dateStr = holiday.date.replace(/-/g, '');
  // Since public holidays are all-day events, we use VALUE=DATE format
  const dtStart = `DTSTART;VALUE=DATE:${dateStr}`;
  
  // End date is start date + 1 day for all-day events in ICS
  const startDate = new Date(holiday.date + 'T00:00:00');
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
  const endYear = endDate.getFullYear();
  const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');
  const endDay = String(endDate.getDate()).padStart(2, '0');
  const dtEnd = `DTEND;VALUE=DATE:${endYear}${endMonth}${endDay}`;
  
  const uid = `${holiday.date}-${holiday.name.replace(/\s+/g, '-')}-${holiday.countryCode}@hyperdart-holidaycalendar`;
  const summary = holiday.name;
  const description = holiday.localName && holiday.localName !== holiday.name 
    ? `Local Name: ${holiday.localName}\\nType: ${holiday.types?.join(', ')}`
    : `Type: ${holiday.types?.join(', ')}`;

  return [
    'BEGIN:VEVENT',
    `UID:${uid}`,
    dtStart,
    dtEnd,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    'STATUS:CONFIRMED',
    'TRANSP:TRANSPARENT',
    'END:VEVENT'
  ].join('\r\n');
}

/**
 * Generates and downloads an ICS file for a single holiday or array of holidays.
 * 
 * @param {Object|Array<Object>} holidays - One or more holiday objects
 * @param {string} filename - Output filename (e.g. "holidays.ics")
 */
export function exportToICS(holidays, filename = 'holidays.ics') {
  const holidayList = Array.isArray(holidays) ? holidays : [holidays];
  
  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//hyperDart//Holiday Calendar Component//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH'
  ];

  holidayList.forEach(h => {
    icsLines.push(createICSEvent(h));
  });

  icsLines.push('END:VCALENDAR');

  const icsContent = icsLines.join('\r\n');
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
