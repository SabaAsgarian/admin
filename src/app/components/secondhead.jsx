"use client"

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';


import Link from 'next/link';
import Image from 'next/image';


import { styled as muiStyled } from '@mui/material/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MuiAppBar from '@mui/material/AppBar';
import a from './img/Subtract.png'
import b from './img/Title.png'
import LaunchIcon from '@mui/icons-material/Launch';
// New styled component for the header
const HeaderContainer = muiStyled(Box)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',


}));

// New styled component for WhatsApp support










export default function PrimarySearchAppBar() {













    return (
        <>
  
            <HeaderContainer sx={{height: { xs: '160px', sm: '160px', md: '80px', lg: '100px' }, position: 'fixed', top: '6%' }} > {/* Adjust height for xs, sm, and md */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '5%', width: '50%' }}>
                    <Image src={a} alt='secondlogo' style={{ width: '32px', height: '32px', marginRight: '2%' }} />
                    <Image src={b} alt='title' style={{
                        width: '80px', height: '48px',
                    }} />
                    <Box sx={{ display: "flex", marginLeft: '2%' }}>
                        <Box sx={{ borderBottom: '2px solid #4F52B2', height: '100%', width: '40px' }}>
                            <Typography sx={{ fontSize: '14px', marginRight: '9px', color: 'black', fontWeight: 'bolder' }}>Home </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px', marginLeft: '4px', marginRight: '6px', color: '#424242' }}>Timeline</Typography>
                        <Typography sx={{ fontSize: '14px', marginRight: '6px', color: '#424242' }}>Chat</Typography>
                        <Typography sx={{ fontSize: '14px', marginRight: '6px', color: '#424242' }}>Assigned to you</Typography>
                    </Box>
                </Box>

                <Box sx={{display:'flex',width:'64px',height:'32px',marginRight:'2%'}}>
                    <LaunchIcon sx={{marginRight:'4px'}}/>
                    <MoreHorizIcon/>
                </Box>
            </HeaderContainer>
       

        </>
    );
}

























