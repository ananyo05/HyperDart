import React from 'react';
import { Card, CardContent, Typography, Box, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import DateCheckAnswer from '../components/DateCheckAnswer';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function SidebarView({ 
  selectedCountry, year, holidays, dateCheckHoliday, dateCheckActive, 
  queryDateStr, intent, month, messageHandlers 
}) {
  const todayStr = '2026-08-24';
  const today = new Date(todayStr + 'T00:00:00');

  // Find next upcoming holiday relative to today
  const upcomingHolidays = holidays
    .filter(h => new Date(h.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const nextHoliday = upcomingHolidays[0] || null;

  // Calculate countdown to next holiday
  let countdownMsg = '';
  if (nextHoliday) {
    const nextDate = new Date(nextHoliday.date + 'T00:00:00');
    const diffTime = nextDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      countdownMsg = `🎉 Today: ${nextHoliday.name}!`;
    } else if (diffDays === 1) {
      countdownMsg = `Tomorrow: ${nextHoliday.name}`;
    } else {
      countdownMsg = `${nextHoliday.name} in ${diffDays} days`;
    }
  }

  // Get flag emoji
  const getFlag = (code) => {
    if (!code) return '';
    return code.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
  };

  const handleExpand = () => {
    if (messageHandlers && messageHandlers.switchFullScreen) {
      messageHandlers.switchFullScreen(true, true);
    }
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 400, 
        borderRadius: 4, 
        border: '1px solid', 
        borderColor: 'divider',
        background: 'background.paper',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden'
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        {/* Sidebar Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: '1.5rem' }}>{getFlag(selectedCountry.code)}</span>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {selectedCountry.name}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {year}
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Dynamic Display based on Intent */}
        {dateCheckActive ? (
          <Box sx={{ mt: -2, mb: 1 }}>
            <DateCheckAnswer
              isHoliday={!!dateCheckHoliday}
              holiday={dateCheckHoliday}
              dateStr={queryDateStr}
              countryName={selectedCountry.name}
              nextHoliday={nextHoliday}
            />
          </Box>
        ) : (
          <Box>
            {/* Countdown Chip */}
            {nextHoliday && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  bgcolor: 'rgba(240, 95, 64, 0.08)', 
                  p: 1.5, 
                  borderRadius: 2.5, 
                  mb: 2.5,
                  border: '1px solid',
                  borderColor: 'rgba(240, 95, 64, 0.15)'
                }}
              >
                <AccessTimeIcon color="primary" sx={{ fontSize: 18 }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Next Holiday: {countdownMsg}
                </Typography>
              </Box>
            )}

            {/* Content Title */}
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EventIcon sx={{ fontSize: 16 }} />
              {intent === 'LIST_MONTH' && month !== null ? (
                `Holidays in ${new Date(year, month, 1).toLocaleDateString(undefined, { month: 'long' })}`
              ) : (
                'Upcoming Holidays'
              )}
            </Typography>

            {/* Compact Holiday List */}
            {holidays.length === 0 ? (
              <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                No public holidays found.
              </Typography>
            ) : (
              <List disablePadding sx={{ mb: 2 }}>
                {(intent === 'LIST_MONTH' && month !== null
                  ? holidays.filter(h => new Date(h.date + 'T00:00:00').getMonth() === month)
                  : upcomingHolidays
                ).slice(0, 3).map((h, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-child': { borderBottom: 'none' } }}>
                    <ListItemText
                      primary={h.name}
                      secondary={new Date(h.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric', weekday: 'short' })}
                      primaryTypographyProps={{ variant: 'subtitle2', sx: { fontWeight: 600, fontSize: '0.8rem' } }}
                      secondaryTypographyProps={{ variant: 'caption', sx: { color: 'text.secondary' } }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        )}

        {/* See Full Year Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleExpand}
          endIcon={<OpenInNewIcon fontSize="small" />}
          sx={{ 
            borderRadius: '24px', 
            textTransform: 'none', 
            fontWeight: 700, 
            mt: 1, 
            py: 1,
            boxShadow: 'none',
            '&:hover': { boxShadow: 'none' }
          }}
        >
          See Full Year
        </Button>
      </CardContent>
    </Card>
  );
}
