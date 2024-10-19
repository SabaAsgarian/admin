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
import Line from './line'

import sub from './img/Chart 6.png'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { Box, Button, ButtonBase } from '@mui/material';

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
    <Card sx={{ width: '281px', height: '400px', marginTop: '4%', }}>
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
        <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: "center" }}>
          <Box sx={{ width: '80%', height: '40%', display: 'flex', justifyContent: "center" }}>
            <Image src={sub} alt='s' style={{ width: "100%", height: '50%' }} />
          </Box>
        </Box>
      </CardMedia>


      <Button sx={{ color: '#5B5FC7' }}>
        View details
      </Button>
    </Card>
  );
}