import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

export default function CountrySwitcher({ countries, selectedCountry, onCountryChange }) {
  // Find current active option
  const value = countries.find(c => c.key.toUpperCase() === selectedCountry.code.toUpperCase()) || null;

  return (
    <Box sx={{ minWidth: 220, mx: 1, my: 1 }}>
      <Autocomplete
        size="small"
        options={countries}
        getOptionLabel={(option) => option.value || option.key}
        value={value}
        onChange={(event, newValue) => {
          if (newValue) {
            onCountryChange({
              code: newValue.key,
              name: newValue.value
            });
          }
        }}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          // Format standard flags using unicode emojis
          const flagEmoji = option.key.toUpperCase().replace(/./g, char => 
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          );
          return (
            <Box key={option.key} component="li" sx={{ fontSize: 14, gap: 1 }} {...optionProps}>
              <span style={{ fontSize: '1.2rem' }}>{flagEmoji}</span>
              {option.value} ({option.key})
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Country"
            variant="outlined"
            placeholder="Search country..."
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                backgroundColor: 'background.paper',
                '&:hover fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />
        )}
      />
    </Box>
  );
}
