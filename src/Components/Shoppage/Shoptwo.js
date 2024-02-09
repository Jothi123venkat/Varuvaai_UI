import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Shopcard1 from "./Shopcard1";
import Select1 from "./select1";
import Select2 from "./Select2";

import Cardmap from "./Cardmap";
import Shopcard2 from './Shopcard2'
import Shopcard3 from './Shopcard3'
import Slider from './Slider'
import Paginations from '../Paginations'


const Shoptwo = () => {
  return (
    <Container>
      <div>
    <div className="sidebar" style={{display:"flex",justifyContent:"center", marginTop:"100px"}}>
      <Grid container direction="row" alignItems='flex-start' justifyContent="center" spacing={-15}>
        <Grid item xs={12} md={4} className='side-content' >
          <Shopcard1/>
          <Shopcard2/>
          <Shopcard3/>
          <Slider/>
          
         
        </Grid>
        <Grid  item xs={12} md={8} alignItems="center"   className="card-conts" >
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',backgroundColor:"#f9f9ff;"}}>
        <Select1/>
          <Select2/>
          <Paginations/>
        </Box>
       <Cardmap/>
        </Grid>
      </Grid>
    </div>
  </div>

    </Container>
  );
};

export default Shoptwo;
