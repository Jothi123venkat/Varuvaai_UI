import React from 'react'
import Swipper from './Swipper'
import { Button, Grid, TextField } from '@mui/material'
import { GrDiamond } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";

const Productsecond = () => {
  return (
    <div style={{marginTop:"40px"}}>
        
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

   <Grid item md={6} sm={12} xs={12}>
    <Swipper/>
   </Grid>
  
  <Grid item md={6} sm={12} xs={12}>
    <h1>Faded SkyBlu Denim Jeans</h1>
    <p>$149.99</p>
    <p>Category : Household</p>
    <p>Availibility : In Stock</p>
    <p>________________________________________________________________________</p>
    <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
    <p style={{fontSize:"20px"}}>Quantity : <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  type='number'
  defaultValue="Small"
  variant="outlined"
  size="small"
  sx={{width:"100px", height:"1px"}}
/>
</p>
<div style={{marginTop:"40px"}}>
    
  <Button sx={{backgroundColor:"blue",color:"white"}}>Add to Cart</Button>
  <Button><GrDiamond style={{margin:"0px"}}/></Button>
  <Button><CiHeart style={{margin:"0px"}}/></Button>



</div>
  </Grid>


</Grid>
    </div>
  )
}

export default Productsecond