import { Grid } from '@mui/material';
import React from 'react';
import { clogo1, clogo2, clogo3, clogo4, clogo5 } from '../Assets/Product';
import './Thirdpage.css'
const Thirdpage = () => {
  return (
    <div className='clogos'>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        
      >
        <Grid item lg={2.25} xs={12} sm={12} >
          <img src={clogo1} alt="img" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} className='contain' />
        </Grid>

        <Grid item lg={2.25} xs={12} sm={12}>
          <img src={clogo2} alt="img" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} className='contain' />
        </Grid>

        <Grid item lg={2.25} xs={12} sm={12}>
          <img src={clogo3} alt="img" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}  className='contain' />
        </Grid>

        <Grid item lg={2.25} xs={12} sm={12}>
          <img src={clogo4} alt="img" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}  className='contain'/>
        </Grid>

        <Grid item lg={2.25} xs={12} sm={12}>
          <img src={clogo5} alt="img" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}   className='contain'/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Thirdpage;
