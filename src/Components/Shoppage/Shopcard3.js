import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Radio from '@mui/material/Radio';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
        const [selectedValue, setSelectedValue] = React.useState('');
      
        const handleChange = (event) => {
          setSelectedValue(event.target.value);
        };
  return (
 
      <Card sx={{ maxWidth:"250px", marginTop:"50px"}}>
      <CardContent>
       <div style={{ backgroundColor:"#f9f9ff;"}}>
       <Typography sx={{ fontSize: 15, textAlign:"center",lineHeight:"70px", backgroundColor:"#f9f9ff;"}} color="text.secondary" >
       PRODUCT FILTERS
        </Typography>
        <p>Brand</p>
       </div>
        <Typography variant="h5" component="div" sx={{textAlign:"left",fontSize:20,display:"grid",justifyContent:"flex-start"}}>
        <ul style={{listStyleType:"none", padding:"0px"}}>
   <div style={{display:"flex",justifyContent:"justify",alignItems:"center",}}>
   <Radio
        checked={selectedValue === 'a'}
       onMouseOver={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        s
      />
      <li >Black</li>
   </div>
   <div style={{display:"flex", justifyContent:"justify",alignItems:"center"}}>
   <Radio
        checked={selectedValue === 'b'}
       onMouseOver={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
      <li>Black Leather</li>
   </div>
   <div style={{display:"flex",justifyContent:"justify",alignItems:"center"}}>
   <Radio
        checked={selectedValue === 'c'}
       onMouseOver={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      />
      <li>Black with red</li>
   </div>
   <div style={{display:"flex", justifyContent:"justify",alignItems:"center"}}>
   <Radio
        checked={selectedValue === 'd'}
       onMouseOver={handleChange}
        value="d"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'D' }}
        sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}
      />
      <li>Gold</li>
   </div>
   <div style={{display:"flex", justifyContent:"justify",alignItems:"center"}}>
   <Radio
        checked={selectedValue === 'e'}
       onMouseOver={handleChange}
        value="e"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'E' }}
      />
      <li>Spacegrey</li>
   </div>
    </ul>
        </Typography>

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
