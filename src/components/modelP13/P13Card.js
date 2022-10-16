import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import p13Image from "../Images/p13.png"


export default function P13Card(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 1000 , maxHeight:150 ,backgroundColor:'#3F3E3E' }}
      onClick={()=> navigate("/modelP13")} 
     >
      <CardMedia
        component="img"
        height="100"
         image= {p13Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         musli 
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
