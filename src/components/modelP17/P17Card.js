import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import P17Image from '../Images/P17ModelImg.png'


export default function P17Card(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 1000 , maxHeight:150 ,backgroundColor:'#3F3E3E' }}
      onClick={()=> navigate("/modelP17")} 
     >
      <CardMedia
        component="img"
        height="100"
         image= {P17Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         corn flakes
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
