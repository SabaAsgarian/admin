"use client"
import React, { useEffect, useState } from 'react'

import { Box, Typography, Grid } from '@mui/material'
import Tree from './components/tree'
import Cardone from './components/cardone'
import Cardtwo from './components/cardtwo'
import Cardthree from './components/cardThree'
import Cardfour from './components/cardfour'
import Cardfive from './components/cardfive'
import Cardsix from './components/cardsix'
import loading from './components/img/loading.gif'
import './globals.css'
import Image from 'next/image'
export default function page() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Your page initialization code here
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <>
                <div className="bg-wheat w-full h-[100vh]  text-center">
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Image src={loading} alt="Loading" />
                        <h1 className='font-extrabold animate-bounce'>LOADING...</h1>
                    </Box>
                </div>
            </>
        )
    }
    return (
        <div>
            <Box sx={{ width: '100%', height: '150vh', display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                <Box sx={{ position: 'fixed', top: '25%', left: '5%', width: '17%', height: '85%', borderRight: '1px solid #F0F0F0', display: { xs: 'none', lg: 'flex' } }}>
                    <Tree />
                </Box>
                <Box sx={{ width: { xs: '80%',sm:'90%',md:'95%', lg: '75%' }, height: '85%', }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Cardone />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Cardtwo />
                        </Grid>
                        <Grid item xs={12} sm={6}  md={4}lg={4}>
                            <Cardthree />
                        </Grid>
                        <Grid item xs={12} sm={6}  md={4}lg={4}>
                            <Cardfour />
                        </Grid>
                        <Grid item xs={12} sm={6}  md={4}lg={4}>
                            <Cardfive />
                        </Grid>
                        <Grid item xs={12} sm={6}  md={4}lg={4}>
                            <Cardsix />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}
