import { Button, Grid } from '@mui/material'
import React from 'react'
import './Fifthpage.css'
const Fifthpage = () => {
  return (
    <div className='fifth'>
        <h1>Subscribe for Our Newsletter</h1>
        <p>We won’t send any kind of spam</p>
      
     <div style={{position:'relative'}}>
     <input type="text" />
        <div className='fifthbutton'>
            <Button sx={{position:"absolute",bottom:"23px",right:"20%",fontSize:"9px",top:"1px"}}>Get started</Button>
     </div>
        </div>


      
{/* <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

  <Grid item lg={12}>
     <h1>Subscribe for Our Newsletter</h1>
      <p>We won’t send any kind of spam</p>
     
  </Grid>

  <Grid item lg={12} xs={6} sm={12}>
    <div className='textbox'>
    <input type="text" />
      <Button>Get started</Button>
    </div>
  </Grid>

</Grid> */}
    </div>

    
  )
}

export default Fifthpage