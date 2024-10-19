import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function GaugeValueRangeNoSnap() {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }} sx={{ marginTop:'3%'}}>
            <Gauge
            
            width={218} height={90}
                value={72}
                startAngle={-90}
                endAngle={90}
                sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: '20px',
                        transform: 'translate(1px, -10px)',
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#00B7C3',
                      },
                     
                }}
                text={
                    ({ value, valueMax }) => `${value}% `
                }
            />
         
        </Stack>
    );
}
