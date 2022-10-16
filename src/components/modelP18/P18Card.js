import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import P18Image from '../Images/P18Model.png'


export default function P18Card(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 1000 , maxHeight:150 ,backgroundColor:'#3F3E3E' }}
      onClick={()=> navigate("/modelP18")} 
     >
      <CardMedia
        component="img"
        height="100"
         image= {P18Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         musli nuts
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
