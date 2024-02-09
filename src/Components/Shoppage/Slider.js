import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CardActions, CardContent, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div >
      <Card sx={{ maxWidth:"250px"}}>
    <CardContent>
     <div style={{ backgroundColor:"#f9f9ff;"}}>
     <Typography sx={{ fontSize: 15, lineHeight:"70px",  justifyContent:"center",padding:"0px"}} color="text.secondary" >
      Price
      </Typography>
     </div>
    </CardContent>
    <CardActions>
    <Box sx={{ width: 300 ,alignItems:"justify" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
    </CardActions>
  </Card>
   </div>
  
  );
}
