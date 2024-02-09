import { Grid } from '@mui/material'
import React from 'react'
import { arrival } from '../imgdata/data'
import { Card } from 'react-bootstrap'

const Cardmap = () => {
  return (
    <div>
       <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  // gap={2}
  spacing={3}
  sx={{ textAlign: 'center', justifyContent: 'center',alignItems:'center' }}
>
{
  arrival && arrival.map((a,i)=>{
    return(
        <Grid item lg={3}  sm={6} md={3} sx={12}key={i} >
              <Card >
      <Card.Img variant="top" src={a.img} width="100%" />
      <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text>
           {a.price}
        </Card.Text>
      </Card.Body>
    </Card>
           
        </Grid>
    )
  })
  
}

</Grid> 
    </div>
  )
}

export default Cardmap