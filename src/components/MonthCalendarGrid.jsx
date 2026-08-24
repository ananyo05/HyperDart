import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, Paper, Tooltip, Collapse } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HolidayCard from './HolidayCard';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function MonthCalendarGrid({ year, initialMonth, holidays, onExportICS }) {
  const [currentMonth, setCurrentMonth] = useState(initialMonth !== null ? initialMonth : new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(year);
  const [selectedDayHolidays, setSelectedDayHolidays] = useState([]);
  const [selectedDayLabel, setSelectedDayLabel] = useState('');

  // Number of days in the month
  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  // First day of the month (0 = Sun, 1 = Mon, etc.)
  const getFirstDayOfMonth = (y, m) => new Date(y, m, 1).getDay();

  const daysCount = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
    setSelectedDayHolidays([]);
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
    setSelectedDayHolidays([]);
  };

  // Build grid items
  const gridCells = [];
  // Add empty slots for days of previous month
  for (let i = 0; i < firstDay; i++) {
    gridCells.push({ day: null, dateStr: null, holidays: [] });
  }

  // Add days of current month
  for (let d = 1; d <= daysCount; d++) {
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    const formattedDay = String(d).padStart(2, '0');
    const dateStr = `${currentYear}-${formattedMonth}-${formattedDay}`;
    
    // Find holidays on this day
    const dayHolidays = holidays.filter(h => h.date === dateStr);

    gridCells.push({
      day: d,
      dateStr,
      holidays: dayHolidays
    });
  }

  const monthLabel = new Date(currentYear, currentMonth, 1).toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric'
  });

  const handleDayClick = (cell) => {
    if (!cell.day || cell.holidays.length === 0) {
      setSelectedDayHolidays([]);
      return;
    }
    setSelectedDayHolidays(cell.holidays);
    setSelectedDayLabel(new Date(cell.dateStr + 'T00:00:00').toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Calendar Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <IconButton size="small" onClick={prevMonth}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {monthLabel}
        </Typography>
        <IconButton size="small" onClick={nextMonth}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Week Day Labels */}
      <Grid container spacing={1} columns={7} sx={{ mb: 1, textAlign: 'center' }}>
        {DAYS_OF_WEEK.map(day => (
          <Grid item xs={1} key={day}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Days Grid */}
      <Grid container spacing={1} columns={7}>
        {gridCells.map((cell, idx) => {
          const hasHolidays = cell.holidays && cell.holidays.length > 0;
          const isWeekend = (idx % 7 === 0 || idx % 7 === 6) && cell.day !== null;

          return (
            <Grid item xs={1} key={idx}>
              <Paper
                onClick={() => handleDayClick(cell)}
                sx={{
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: cell.day ? (hasHolidays ? 'pointer' : 'default') : 'default',
                  visibility: cell.day ? 'visible' : 'hidden',
                  bgcolor: hasHolidays 
                    ? 'rgba(240, 95, 64, 0.1)' 
                    : isWeekend 
                      ? 'rgba(0, 0, 0, 0.02)' 
                      : 'background.paper',
                  border: '1px solid',
                  borderColor: hasHolidays ? 'primary.light' : 'divider',
                  borderRadius: 2,
                  position: 'relative',
                  transition: 'transform 0.1s',
                  '&:hover': cell.day && hasHolidays ? {
                    transform: 'scale(1.05)',
                    boxShadow: 2
                  } : {}
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: hasHolidays ? 700 : 400,
                    color: hasHolidays ? 'primary.main' : isWeekend ? 'text.secondary' : 'text.primary'
                  }}
                >
                  {cell.day}
                </Typography>

                {/* Holiday Indicator */}
                {hasHolidays && (
                  <Tooltip title={cell.holidays.map(h => h.name).join(', ')}>
                    <Box 
                      sx={{ 
                        width: 5, 
                        height: 5, 
                        bgcolor: 'primary.main', 
                        borderRadius: '50%', 
                        position: 'absolute',
                        bottom: 4
                      }} 
                    />
                  </Tooltip>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* Selected Day Details */}
      <Collapse in={selectedDayHolidays.length > 0}>
        <Box sx={{ mt: 3, p: 2, bgcolor: 'background.default', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1, display: 'block' }}>
            Holidays on {selectedDayLabel}
          </Typography>
          {selectedDayHolidays.map((h, i) => (
            <HolidayCard key={i} holiday={h} onExportICS={onExportICS} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}
