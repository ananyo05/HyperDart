import React, { useState, useEffect } from 'react';
import { 
  Box, Typography, Card, CardContent, Tabs, Tab, 
  Grid, TextField, Button, Divider, Alert, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import CountrySwitcher from '../components/CountrySwitcher';
import HolidayList from '../components/HolidayList';
import MonthCalendarGrid from '../components/MonthCalendarGrid';
import { calculateWorkingDays } from '../lib/workingDays';
import { fetchHolidays } from '../lib/nagerClient';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListIcon from '@mui/icons-material/List';
import CalculateIcon from '@mui/icons-material/Calculate';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export default function MainlineView({ 
  selectedCountry, year, holidays, countries, allCountries,
  onCountryChange, onYearChange, onExportICS, onExportAllICS, initialMonth 
}) {
  const [activeTab, setActiveTab] = useState(0);
  
  // Working days calculator state
  const [calcStart, setCalcStart] = useState('2026-08-24');
  const [calcEnd, setCalcEnd] = useState('2026-09-07');
  const [calcResult, setCalcResult] = useState(null);

  // Multi-country comparison state
  const [comparisonHolidays, setComparisonHolidays] = useState({});
  const [loadingComparison, setLoadingComparison] = useState(false);

  useEffect(() => {
    if (allCountries.length > 1) {
      setLoadingComparison(true);
      const promises = allCountries.map(c => 
        fetchHolidays(c.code, year).then(data => ({ code: c.code, data }))
      );
      Promise.all(promises).then(results => {
        const cache = {};
        results.forEach(r => {
          cache[r.code] = r.data;
        });
        setComparisonHolidays(cache);
        setLoadingComparison(false);
      });
    }
  }, [allCountries, year]);

  const handleCalculate = () => {
    const result = calculateWorkingDays(calcStart, calcEnd, holidays);
    setCalcResult(result);
  };

  const getFlag = (code) => {
    if (!code) return '';
    return code.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
  };

  // Travel planning: long weekends detector
  const detectLongWeekends = () => {
    const longWeekends = [];
    holidays.forEach(h => {
      const date = new Date(h.date + 'T00:00:00');
      const day = date.getDay(); // 0 = Sun, 6 = Sat
      
      // If holiday falls on Mon or Fri, it forms a 3-day weekend
      if (day === 1) {
        longWeekends.push({ holiday: h, type: '3-Day Weekend (Mon)', dates: `${h.date} (Mon)` });
      } else if (day === 5) {
        longWeekends.push({ holiday: h, type: '3-Day Weekend (Fri)', dates: `${h.date} (Fri)` });
      } else if (day === 2) {
        // Tue holiday: Take Mon off for 4-day weekend
        longWeekends.push({ holiday: h, type: 'Potential 4-Day Weekend (Tue)', dates: `Bridge Mon (${h.date} is Tue)` });
      } else if (day === 4) {
        // Thu holiday: Take Fri off for 4-day weekend
        longWeekends.push({ holiday: h, type: 'Potential 4-Day Weekend (Thu)', dates: `Bridge Fri (${h.date} is Thu)` });
      }
    });
    return longWeekends;
  };

  const longWeekends = detectLongWeekends();

  return (
    <Box sx={{ p: { xs: 1, sm: 3 }, maxWidth: 900, mx: 'auto' }}>
      {/* Top Header Card */}
      <Card 
        sx={{ 
          mb: 4, 
          borderRadius: 4, 
          background: 'linear-gradient(135deg, rgba(240, 95, 64, 0.08) 0%, rgba(64, 240, 187, 0.05) 100%)',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}
      >
        <CardContent sx={{ p: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <span style={{ fontSize: '2.5rem' }}>{getFlag(selectedCountry.code)}</span>
              {selectedCountry.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary', ml: 0.5 }}>
              Public Holidays Calendar • Year {year}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', width: { xs: '100%', sm: 'auto' }, justifyContent: 'flex-end' }}>
            <CountrySwitcher 
              countries={countries} 
              selectedCountry={selectedCountry} 
              onCountryChange={onCountryChange} 
            />
            
            <TextField
              size="small"
              type="number"
              label="Year"
              value={year}
              onChange={(e) => onYearChange(parseInt(e.target.value, 10) || year)}
              sx={{ width: 100, '& .MuiOutlinedInput-root': { borderRadius: '24px' } }}
              inputProps={{ min: 1970, max: 2100 }}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs 
        value={activeTab} 
        onChange={(e, val) => setActiveTab(val)} 
        sx={{ 
          mb: 3,
          borderBottom: 1, 
          borderColor: 'divider',
          '& .MuiTabs-indicator': { height: 3, borderRadius: '3px' }
        }}
      >
        <Tab icon={<ListIcon />} iconPosition="start" label="Holidays List" sx={{ fontWeight: 600, textTransform: 'none' }} />
        <Tab icon={<CalendarMonthIcon />} iconPosition="start" label="Monthly Grid" sx={{ fontWeight: 600, textTransform: 'none' }} />
        <Tab icon={<CalculateIcon />} iconPosition="start" label="Working Days" sx={{ fontWeight: 600, textTransform: 'none' }} />
        {allCountries.length > 1 && (
          <Tab icon={<CompareArrowsIcon />} iconPosition="start" label="Compare Countries" sx={{ fontWeight: 600, textTransform: 'none' }} />
        )}
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ minHeight: 300 }}>
        {activeTab === 0 && (
          <Grid container spacing={3}>
            {/* List columns */}
            <Grid item xs={12} md={longWeekends.length > 0 ? 8 : 12}>
              {holidays.length === 0 ? (
                <Alert severity="warning" sx={{ borderRadius: 3 }}>
                  No public holidays found for {selectedCountry.name} in {year}.
                </Alert>
              ) : (
                <HolidayList 
                  holidays={holidays} 
                  onExportICS={onExportICS}
                  onExportAllICS={onExportAllICS}
                />
              )}
            </Grid>

            {/* Side column: Travel Long Weekend Planning */}
            {longWeekends.length > 0 && (
              <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                      ✈️ Travel Plan Optimizer
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                      Maximize your time off! Here are potential long weekends around public holidays:
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {longWeekends.map((lw, idx) => (
                        <Box key={idx} sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
                            {lw.holiday.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                            Type: {lw.type}
                          </Typography>
                          <Typography variant="caption" color="primary.main" sx={{ fontWeight: 600 }}>
                            {lw.dates}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        )}

        {activeTab === 1 && (
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <MonthCalendarGrid 
              year={year} 
              initialMonth={initialMonth} 
              holidays={holidays}
              onExportICS={onExportICS}
            />
          </Box>
        )}

        {activeTab === 2 && (
          <Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                💼 Business Working-Day Calculator
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>
                Calculate total working days (Mon-Fri) between two dates in {selectedCountry.name}, excluding public holidays.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={5}>
                  <TextField
                    type="date"
                    label="Start Date"
                    fullWidth
                    value={calcStart}
                    onChange={(e) => setCalcStart(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    type="date"
                    label="End Date"
                    fullWidth
                    value={calcEnd}
                    onChange={(e) => setCalcEnd(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleCalculate}
                    sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 600 }}
                  >
                    Calculate
                  </Button>
                </Grid>
              </Grid>

              {calcResult && (
                <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
                    Calculation Results:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="caption" color="text.secondary">Working Days</Typography>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: 'success.main' }}>
                        {calcResult.workingDays}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="caption" color="text.secondary">Total Calendar Days</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {calcResult.totalDays}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="caption" color="text.secondary">Weekend Days</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {calcResult.weekendDays}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="caption" color="text.secondary">Public Holidays</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {calcResult.holidayDays}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === 3 && allCountries.length > 1 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              🌎 Country Comparison Grid ({year})
            </Typography>

            {loadingComparison ? (
              <Typography>Loading comparative holiday data...</Typography>
            ) : (
              <TableContainer component={Paper} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {allCountries.map(c => (
                        <TableCell key={c.code} align="center" sx={{ fontWeight: 700, bgcolor: 'action.hover' }}>
                          <span style={{ fontSize: '1.2rem', marginRight: '6px' }}>{getFlag(c.code)}</span>
                          {c.name}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {allCountries.map(c => {
                        const countryHolidays = comparisonHolidays[c.code] || [];
                        return (
                          <TableCell key={c.code} sx={{ verticalAlign: 'top', p: 2 }}>
                            {countryHolidays.length === 0 ? (
                              <Typography variant="caption" color="text.secondary">No holidays resolved</Typography>
                            ) : (
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {countryHolidays.slice(0, 15).map((h, i) => (
                                  <Box key={i} sx={{ p: 1, borderRadius: 1.5, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                                    <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', color: 'primary.main' }}>
                                      {new Date(h.date + 'T00:00:00').toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2 }}>
                                      {h.name}
                                    </Typography>
                                  </Box>
                                ))}
                                {countryHolidays.length > 15 && (
                                  <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', mt: 1 }}>
                                    + {countryHolidays.length - 15} more
                                  </Typography>
                                )}
                              </Box>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
