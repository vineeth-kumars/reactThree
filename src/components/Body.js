import React from 'react'
import "./Body.css";

import { Button , Grid , Typography} from '@mui/material';

import BasicTextFields from './BasicTextFields';

import CardsList from './CardsList';

export default function () {
    
  return (
    <div className='style'>
        <Grid container>
          <Grid item xs={6}>
          <BasicTextFields />
          </Grid>
          <Grid item xs={6}>
          <Button variant="contained" style={{
        borderRadius: 5,
        backgroundColor: '#3F3E3E' ,
        color:'#101010'
    }}> upload </Button>
          </Grid>
        </Grid>
         
         <br />
         <CardsList />
         
         </div>
  )
}
