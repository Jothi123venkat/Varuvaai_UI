import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Secondpage.css'

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'background-color 0.3s',
  '&:hover': {
    background: 'rgba(97, 97, 202, 0.807) !important'
  },
}));



export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={6  }>
          <Item  className='deal' >
            <h1 style={{color:"white",  marginTop:"50px"}}>Hot Deals of this Month</h1>
             <h1  style={{color:"white"}}>SHOP NOW</h1>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Item  className='deal'>
            <h1 style={{color:"white", marginTop:"50px"}}>Hot Deals of this Month</h1>
             <h1 style={{color:"white"}}>SHOP NOW</h1>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}