import { Grid } from '@mui/material'
import React from 'react'
import Command1 from './Commad1'
import Command2 from './Command2'
import './Command.css'
const Command = () => {
  return (
    <div>
        
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
>


    <Grid>
        <Command1/>
    </Grid>


    <Grid>
        <Command2/>
    </Grid>


</Grid>
    </div>
  )
}

export default Command