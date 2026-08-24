import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button, Divider } from '@mui/material';
import HolidayCard from './HolidayCard';
import DownloadIcon from '@mui/icons-material/Download';

export default function HolidayList({ holidays, onExportICS, onExportAllICS }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubdivision, setSelectedSubdivision] = useState('ALL');

  // Extract all unique subdivision/county codes
  const subdivisions = ['ALL'];
  holidays.forEach(h => {
    if (h.counties && Array.isArray(h.counties)) {
      h.counties.forEach(county => {
        if (!subdivisions.includes(county)) {
          subdivisions.push(county);
        }
      });
    }
  });
  subdivisions.sort();

  // Filter holidays
  const filteredHolidays = holidays.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (h.localName && h.localName.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubdivision = selectedSubdivision === 'ALL' || 
                               (h.counties && h.counties.includes(selectedSubdivision));
    
    return matchesSearch && matchesSubdivision;
  });

  // Group holidays by month
  const groupedHolidays = {};
  filteredHolidays.forEach(h => {
    const dateObj = new Date(h.date + 'T00:00:00');
    const monthName = dateObj.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    if (!groupedHolidays[monthName]) {
      groupedHolidays[monthName] = [];
    }
    groupedHolidays[monthName].push(h);
  });

  return (
    <Box>
      {/* Controls Bar */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          gap: 2, 
          mb: 3, 
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', sm: 'auto' }, flex: 1 }}>
          <TextField
            size="small"
            placeholder="Search holidays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 1, maxWith: 300, '& .MuiOutlinedInput-root': { borderRadius: '24px' } }}
          />

          {subdivisions.length > 1 && (
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="subdivision-select-label">Subdivision</InputLabel>
              <Select
                labelId="subdivision-select-label"
                value={selectedSubdivision}
                label="Subdivision"
                onChange={(e) => setSelectedSubdivision(e.target.value)}
                sx={{ borderRadius: '24px' }}
              >
                {subdivisions.map(sub => (
                  <MenuItem key={sub} value={sub}>
                    {sub === 'ALL' ? 'All Regions' : sub}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        {filteredHolidays.length > 0 && (
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={() => onExportAllICS(filteredHolidays)}
            sx={{ borderRadius: '24px', textTransform: 'none', fontWeight: 600, flexShrink: 0 }}
          >
            Export All ({filteredHolidays.length})
          </Button>
        )}
      </Box>

      {/* Holiday Groups */}
      {Object.keys(groupedHolidays).length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6, opacity: 0.5 }}>
          <Typography variant="body1">No holidays match your criteria.</Typography>
        </Box>
      ) : (
        Object.keys(groupedHolidays).map(month => (
          <Box key={month} sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5, letterSpacing: 0.5 }}>
              {month}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {groupedHolidays[month].map((h, index) => (
              <HolidayCard 
                key={`${h.date}-${h.name}-${index}`} 
                holiday={h} 
                onExportICS={onExportICS} 
              />
            ))}
          </Box>
        ))
      )}
    </Box>
  );
}
