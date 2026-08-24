import React from 'react';
import { Card, Box, Typography, Chip, IconButton, Tooltip } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DownloadIcon from '@mui/icons-material/Download';

export default function HolidayCard({ holiday, onExportICS }) {
  const dateObj = new Date(holiday.date + 'T00:00:00');
  const monthStr = dateObj.toLocaleDateString(undefined, { month: 'short' }).toUpperCase();
  const dayStr = dateObj.getDate();
  const weekdayStr = dateObj.toLocaleDateString(undefined, { weekday: 'short' });

  // Categorize holiday type colors
  const getTypeChip = (types) => {
    if (!types || types.length === 0) return null;
    const type = types[0].toLowerCase();
    
    let color = 'default';
    if (type.includes('public') || type.includes('national')) color = 'success';
    else if (type.includes('bank') || type.includes('federal')) color = 'secondary';
    else if (type.includes('school')) color = 'warning';
    else if (type.includes('observance') || type.includes('optional')) color = 'info';

    return (
      <Chip 
        label={types[0]} 
        color={color} 
        size="small" 
        sx={{ 
          borderRadius: '6px', 
          fontWeight: 600,
          textTransform: 'capitalize',
          fontSize: '0.75rem',
          height: 20
        }} 
      />
    );
  };

  return (
    <Card 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2, 
        mb: 1.5, 
        borderRadius: 3, 
        border: '1px solid',
        borderColor: 'divider',
        background: 'background.paper',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderColor: 'primary.light'
        }
      }}
    >
      {/* Date badge */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          bgcolor: 'primary.light', 
          color: 'primary.contrastText', 
          borderRadius: 2, 
          width: 56, 
          height: 56, 
          mr: 2,
          flexShrink: 0
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 800, fontSize: '0.65rem', lineHeight: 1 }}>
          {monthStr}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
          {dayStr}
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '0.6rem', opacity: 0.8, textTransform: 'uppercase' }}>
          {weekdayStr}
        </Typography>
      </Box>

      {/* Info */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, noWrap: true, textOverflow: 'ellipsis', overflow: 'hidden' }}>
          {holiday.name}
        </Typography>
        {holiday.localName && holiday.localName !== holiday.name && (
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', noWrap: true, textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {holiday.localName}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, alignItems: 'center' }}>
          {getTypeChip(holiday.types)}
          
          {holiday.counties && holiday.counties.length > 0 && (
            <Tooltip title={`Applies to states/counties: ${holiday.counties.join(', ')}`}>
              <Chip 
                label={`States: ${holiday.counties.join(', ')}`} 
                size="small" 
                variant="outlined" 
                sx={{ 
                  borderRadius: '6px', 
                  fontSize: '0.7rem',
                  height: 20,
                  maxWidth: 180
                }} 
              />
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* Actions */}
      <Box sx={{ ml: 1, display: 'flex', gap: 0.5 }}>
        <Tooltip title="Add to Calendar (ICS)">
          <IconButton 
            size="small" 
            onClick={() => onExportICS(holiday)}
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            <DownloadIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}
