import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function DateCheckAnswer({ isHoliday, holiday, dateStr, countryName, nextHoliday }) {
  const parsedDate = new Date(dateStr + 'T00:00:00');
  const formattedDate = parsedDate.toLocaleDateString(undefined, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Calculate day difference for countdown
  const today = new Date(2026, 7, 24); // Reference: 2026-08-24
  const diffTime = parsedDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let relativeMsg = '';
  if (diffDays === 0) {
    relativeMsg = '🎉 Today!';
  } else if (diffDays === 1) {
    relativeMsg = 'Tomorrow';
  } else if (diffDays === -1) {
    relativeMsg = 'Yesterday';
  } else if (diffDays > 1) {
    relativeMsg = `In ${diffDays} days`;
  } else {
    relativeMsg = `${Math.abs(diffDays)} days ago`;
  }

  // Get flag emoji
  const getFlag = (code) => {
    if (!code) return '';
    return code.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 500, 
        mx: 'auto', 
        my: 3, 
        borderRadius: 4, 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        background: isHoliday 
          ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.15) 100%)' 
          : 'linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)',
        border: '1px solid',
        borderColor: isHoliday ? 'rgba(76, 175, 80, 0.3)' : 'rgba(244, 67, 54, 0.2)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          {isHoliday ? (
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 48 }} />
          ) : (
            <CancelOutlinedIcon color="error" sx={{ fontSize: 48 }} />
          )}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: isHoliday ? 'success.main' : 'text.primary' }}>
              {isHoliday ? 'Yes, it is!' : 'No Holiday'}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              {formattedDate}
            </Typography>
          </Box>
          <Chip 
            label={relativeMsg} 
            color={isHoliday ? 'success' : 'default'} 
            variant="outlined" 
            size="small" 
            sx={{ ml: 'auto', fontWeight: 600 }} 
          />
        </Box>

        {isHoliday ? (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {holiday.name}
            </Typography>
            {holiday.localName && holiday.localName !== holiday.name && (
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2 }}>
                Local name: {holiday.localName}
              </Typography>
            )}
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {holiday.types?.map((type, i) => (
                <Chip 
                  key={i} 
                  label={type} 
                  size="small" 
                  color="primary" 
                  sx={{ 
                    borderRadius: '6px', 
                    fontWeight: 600,
                    textTransform: 'capitalize' 
                  }} 
                />
              ))}
              {holiday.counties && holiday.counties.length > 0 && (
                <Chip 
                  label={`Regional (${holiday.counties.length} subdivisions)`} 
                  size="small" 
                  variant="outlined"
                  sx={{ borderRadius: '6px' }} 
                />
              )}
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              There is no public holiday in <b>{countryName}</b> on this date.
            </Typography>
            
            {nextHoliday && (
              <Box 
                sx={{ 
                  p: 2, 
                  borderRadius: 2, 
                  bgcolor: 'background.paper', 
                  border: '1px solid',
                  borderColor: 'divider',
                  mt: 2
                }}
              >
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', mb: 1 }}>
                  Next Public Holiday
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {nextHoliday.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {new Date(nextHoliday.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
