import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NavBar() {
  const [category, setCategory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: 'none', boxShadow: 'none' }}>
        <Toolbar>
          <FormControl fullWidth onMouseEnter={handleOpen} onMouseLeave={handleClose}>
            <InputLabel id="shop-category-label">Shop</InputLabel>
            <Select
              labelId="shop-category-label"
              id="shop-category"
              value={category}
              label="Shop"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={handleChange}
              sx={{ width: '200px' }} // Set your desired width
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="books">Books</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
