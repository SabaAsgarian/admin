"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      sx={{ 
        width: '33.33%',
        fontWeight: props.selected ? 'bolder' : 'normal',
        color: props.selected ? 'black' : 'inherit',
        textTransform: 'lowercase',
        '&::first-letter': {
          textTransform: 'uppercase',
        },
      }}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        variant="fullWidth"
        sx={{ 
          '& .MuiTabs-flexContainer': {
            justifyContent: 'space-between',
          },
          '& .Mui-selected': {
            fontWeight: 'bolder',
            color: 'black !important',
          },
          '& .MuiTab-root': {
            color: 'grey',
            textTransform: 'capitalize',
            
          },
        }}
      >
        <LinkTab label="Tabs 1" href="/" />
        <LinkTab label="Tabs 2" href="/" />
        <LinkTab label="Tabs 3" href="/" />
      </Tabs>
    </Box>
  );
}
