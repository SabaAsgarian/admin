"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import sub from './img/Legend.png'
import  Gaugee  from './gauge';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { Box, Button, ButtonBase } from '@mui/material';
import Tabs from './tab'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 281,maxHeight:400 ,marginTop:'8%'}}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="Card title"
        subheader="Description"
      />
    <CardMedia>
      <Tabs/>
    <Gaugee />
    </CardMedia>
      <CardContent>
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <Image src={sub} alt='sub'/>
        </Box>
      </CardContent>
      
      <Button sx={{color:'#5B5FC7',marginTop:'20%'}}>
      View details
      </Button>
    </Card>
  );
}