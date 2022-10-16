import React from 'react';
import { Grid } from '@mui/material';


import P18Card from './modelP18/P18Card';
import P17Card from './modelP17/P17Card';
import P13Card from './modelP13/P13Card';
import P4Card from './modelp4/P4Card';
function CardsList() {
 
  return (
    <div>
<Grid container rowSpacing={2} columnSpacing={2}>
  
    
    <Grid item xs={3}  >
    <P18Card />
    </Grid>
    <Grid item xs={3} >
    <P17Card />
    </Grid>
    <Grid item xs={3}  >
    <P13Card />
    </Grid>
    <Grid item xs={3} >
    <P4Card />
    </Grid>
    
</Grid>
        
    </div>
  )
}

export default CardsList