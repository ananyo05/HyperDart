/**
 * Calculates the number of working days (Monday-Friday) between two dates,
 * excluding public holidays.
 * 
 * @param {Date|string} dateA - Start date
 * @param {Date|string} dateB - End date
 * @param {Array<Object>} holidays - Array of holidays for the relevant years
 * @returns {{ workingDays: number, totalDays: number, weekendDays: number, holidayDays: number }}
 */
export function calculateWorkingDays(dateA, dateB, holidays = []) {
  const start = new Date(dateA);
  const end = new Date(dateB);

  // Normalize to start of day
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  // Swap if start is after end
  const first = start <= end ? start : end;
  const last = start <= end ? end : start;

  let totalDays = 0;
  let weekendDays = 0;
  let holidayDays = 0;
  let workingDays = 0;

  // Create a set of holiday date strings for quick lookup
  const holidayDates = new Set(holidays.map(h => h.date));

  // Loop through each day from first to last (inclusive)
  const current = new Date(first);
  while (current <= last) {
    totalDays++;
    const dayOfWeek = current.getDay(); // 0 = Sun, 6 = Sat
    const dateStr = current.toISOString().split('T')[0];

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      weekendDays++;
    } else if (holidayDates.has(dateStr)) {
      holidayDays++;
    } else {
      workingDays++;
    }

    current.setDate(current.getDate() + 1);
  }

  return {
    workingDays,
    totalDays,
    weekendDays,
    holidayDays
  };
}
