import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DisplaySettings } from '@mui/icons-material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select report</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select report"
          onChange={handleChange}
        >
          <MenuItem value={10} className='pt-1'>1 Report for 32.00
          </MenuItem>
          <MenuItem value={20}>2 Reports for 39.95
          </MenuItem>
          
          <MenuItem value={30}>5 Reports for 65.95</MenuItem>
          <MenuItem value={40}>10 Reports for 65.95</MenuItem>
          <MenuItem value={50}>25 Reports for 159.95</MenuItem>
          <MenuItem value={60}>50 Reports for 259.95</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}