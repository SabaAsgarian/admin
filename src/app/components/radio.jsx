import * as React from 'react';
import { grey } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className='flex border-r-2 border-[#F0F0F0]'>
       <Box sx={{display:'flex',backgroundColor:'#5B5FC7',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
         <Radio color="default"
        {...controlProps('e')}
        sx={{
          color: grey[50],
          '&.Mui-checked': {
            color: grey[100],
          },
        }}
      
      
      />
      <Typography sx={{color:'white'}}>Text
        <KeyboardArrowDownIcon/>
      </Typography>
         </Box>
         
       <Box sx={{display:'flex',borderRadius:'15px',justifyContent:'center',alignItems:'center'}}>
      <Radio {...controlProps('a')}  />
      <Typography sx={{color:'black'}}>Text
       
      </Typography>
      </Box>
      <Box sx={{display:'flex',borderRadius:'15px',justifyContent:'center',alignItems:'center',}}>
      <Radio {...controlProps('b')} color="secondary" />
      <Typography sx={{color:'black',marginRight:'8px'}}>Text
       
       </Typography>
      </Box>
   
    
    </div>
  );
}