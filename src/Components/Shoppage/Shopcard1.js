import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
  
      <Card sx={{ maxWidth:"250px"}}>
      <CardContent>
       <div style={{ backgroundColor:"#f9f9ff;"}}>
       <Typography sx={{ fontSize: 15, textAlign:"center",lineHeight:"70px", backgroundColor:"#f9f9ff;"}} color="text.secondary" >
        BROWSE CATEGORIES
        </Typography>
       </div>
        <Typography variant="h5" component="div" sx={{textAlign:"left",fontSize:20,display:"grid",justifyContent:"flex-start"}}>
        <ul style={{listStyleType:"none", padding:"0px"}}>
      <li>Fruits and Vegetables</li>
      <li>Meat and Fish</li>
      <li>Cooking</li>
      <li>Beverages</li>
      <li>Home and Cleaning</li>
    </ul>
        </Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    
  );
}
