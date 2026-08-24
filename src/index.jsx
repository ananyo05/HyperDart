import React, { useState, useEffect, useRef } from 'react';
import { withHD } from '@hyperdart/frontend';
import { fetchAvailableCountries, fetchHolidays } from './lib/nagerClient';
import { resolveEntities } from './lib/resolveEntities';
import { resolveDateExpr } from './lib/resolveDateExpr';
import { exportToICS } from './lib/exportICS';
import MainlineView from './views/MainlineView';
import SidebarView from './views/SidebarView';
import { Box, CircularProgress, Typography } from '@mui/material';

function HolidayCalendarComponent(props) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);
  const [intent, setIntent] = useState('LIST_YEAR');
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initialLoadRef = useRef(false);

  // 1. Fetch available countries on mount
  useEffect(() => {
    async function init() {
      try {
        const countryList = await fetchAvailableCountries();
        setCountries(countryList);

        // Parse searchData and query context
        const searchData = props.searchData || {};
        const queryText = searchData.query || searchData.queryTerm || '';

        // Extract date expressions
        const dateExpr = resolveDateExpr(queryText);
        setYear(dateExpr.year);
        setMonth(dateExpr.month);
        setDate(dateExpr.date);
        setIntent(dateExpr.intent);

        // Extract location entities
        const resolvedLocs = resolveEntities(searchData, countryList);
        setSelectedCountry(resolvedLocs.primaryCountry);
        setAllCountries(resolvedLocs.allCountries);
        
        // Fetch holidays for the primary country
        const holidayData = await fetchHolidays(resolvedLocs.primaryCountry.code, dateExpr.year);
        setHolidays(holidayData);
        setLoading(false);

        // Signal to hyperDart host that component is loaded
        props?.messageHandlers?.componentLoaded();
      } catch (err) {
        console.error('Initialization error:', err);
        setError(err.message);
        setLoading(false);
        props?.messageHandlers?.componentLoaded();
      }
    }
    
    init();
  }, []);

  // 2. Fetch holidays when selectedCountry or year changes
  useEffect(() => {
    // Prevent run on initial load since mount effect handles it
    if (!selectedCountry) return;
    
    async function updateHolidays() {
      setLoading(true);
      try {
        const holidayData = await fetchHolidays(selectedCountry.code, year);
        setHolidays(holidayData);
        setLoading(false);
      } catch (err) {
        console.error('Update error:', err);
        setLoading(false);
      }
    }

    updateHolidays();
  }, [selectedCountry, year]);

  // Handle Country & Year Selection
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
    // If comparison was active, reset it to only the new primary country to clear comparison layout
    setAllCountries([newCountry]);
  };

  const handleYearChange = (newYear) => {
    if (newYear >= 1970 && newYear <= 2100) {
      setYear(newYear);
    }
  };

  // Export Single Holiday to ICS
  const handleExportICS = (holiday) => {
    exportToICS(holiday, `${holiday.name.replace(/\s+/g, '_')}_${holiday.date}.ics`);
  };

  // Export List of Holidays to ICS
  const handleExportAllICS = (holidayList) => {
    const filename = `${selectedCountry.code}_${year}_holidays.ics`;
    exportToICS(holidayList, filename);
  };

  // Determine if specific date query matches any holiday
  let dateCheckHoliday = null;
  let queryDateStr = null;
  if (intent === 'CHECK_DATE' && month !== null && date !== null) {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(date).padStart(2, '0');
    queryDateStr = `${year}-${formattedMonth}-${formattedDay}`;
    dateCheckHoliday = holidays.find(h => h.date === queryDateStr) || null;
  }

  if (loading && holidays.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 250, gap: 1.5 }}>
        <CircularProgress size={36} color="primary" />
        <Typography variant="caption" color="text.secondary">Loading public holidays...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error" variant="body2">Error loading calendar: {error}</Typography>
      </Box>
    );
  }

  // Sidebar / mobile viewport routing
  const isSidebar = props.format === 'sidebar' || props.format === 'mobile';

  if (isSidebar && selectedCountry) {
    return (
      <SidebarView
        selectedCountry={selectedCountry}
        year={year}
        holidays={holidays}
        dateCheckHoliday={dateCheckHoliday}
        dateCheckActive={intent === 'CHECK_DATE'}
        queryDateStr={queryDateStr}
        intent={intent}
        month={month}
        messageHandlers={props.messageHandlers}
      />
    );
  }

  if (selectedCountry) {
    return (
      <MainlineView
        selectedCountry={selectedCountry}
        year={year}
        holidays={holidays}
        countries={countries}
        allCountries={allCountries}
        onCountryChange={handleCountryChange}
        onYearChange={handleYearChange}
        onExportICS={handleExportICS}
        onExportAllICS={handleExportAllICS}
        initialMonth={month}
      />
    );
  }

  return null;
}

export default withHD(HolidayCalendarComponent);
