import React from 'react'
import Header from './components/head'
import SecondHeader from './components/secondhead'
import { Box } from '@mui/material'
import Tree from './components/tree'
import Cardone from './components/cardone'
import Cardtwo from './components/cardtwo'
import Cardthree from './components/cardThree'
import Cardfour from './components/cardfour'
import Cardfive from './components/cardfive'
import Cardsix from './components/cardsix'
export default function page() {
  return (
    <div>

      <Box sx={{  width: '100%', height: '150vh', display: 'flex', justifyContent: 'end', alignItems: 'end', }}>
        <Box sx={{position:'fixed',top:'25%',left:'5%', width: '17%', height: '85%', borderRight: '1px solid #F0F0F0',display:{xs:'none',lg:'flex'} }}>
          <Tree />
        </Box>
        <Box
            sx={{
                width:{xs:'79%',sm:'70%',md:'100%',lg:'75%'},
               
                height: '85%',
                marginLeft: '2%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                    width: '100%',
                    gap:{xs:'0px',lg:'10px'},
                }}
            >
                <Box sx={{ marginTop:'2%', width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardone />
                </Box>
                <Box sx={{ marginTop:'2%',  width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardtwo />
                </Box>
                <Box sx={{ marginTop:'2%',  width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardthree />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                    width: '100%',
                    gap: '10px',
                }}
            >
                <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardfour />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardfive />
                </Box>
                <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>
                    <Cardsix />
                </Box>
            </Box>
        </Box>
        </Box>
    </div>
  )
}
