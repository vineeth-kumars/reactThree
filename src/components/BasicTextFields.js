import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  "./BasicTextFields.css";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { color } from '@mui/system';

export default function BasicTextFields() {
  const styles = {
    floatingLabelFocusStyle: {
        color: "#F7F4F4"
    }
}
  return (
    <div >
<TextField  className='TextStyles'
sx={{width:500 , 
  backgroundColor: '#3F3E3E' ,
   borderRadius:5,
   
  }} 
id="outlined-basic" 
label="SEARCH HERE" 
variant="outlined" />
    </div>
    
      
    // <Box
      
    //   component="form"
    //       noValidate
    //   autoComplete="off"
    //   style={{
    //     backgroundColor:"black"
    //   }}
    // >
     
    // </Box>
  );
}
