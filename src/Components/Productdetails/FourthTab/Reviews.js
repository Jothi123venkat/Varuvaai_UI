import { Container, Grid } from '@mui/material'
import React from 'react'
import Review1 from   './Review1'
import Review2 from   './Review2'


const Reviews = () => {
  return (
  <div>
        <Container>
        
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
        
            <Grid item sm={12} md={6} lg={6}>
                <Review1 />
            </Grid>
        
            <Grid item sm={12} md={6} lg={6}>
                <Review2/>
            </Grid>
        
        </Grid>
       
            </Container>
          
            
            
  </div>
  )
}

export default Reviews