import React from 'react'
import Grid from '@mui/material/Grid';

import Header from './header';
import Body from './Body';


function Home() {
  return (
    <div> <div className="App">

    <Grid container>
      <Grid item xs={12}>
      <Header />
      </Grid>
      
      
      <Grid item xs={12} sx={{minHeight:300 , }}>
      <br />
      <br />
      <br />
      <Body />
      </Grid>
    </Grid>
    </div></div>
  )
}

export default Home