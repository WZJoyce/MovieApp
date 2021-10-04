import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { Fragment } from "react";
import styled from 'styled-components';
import { MovieContext} from '../context';

function valuetext(value) {
  return `${value}`;
}

export const MovieYear= () => {
  const { setSearchYear, searchYear } = useContext(MovieContext);

  const handleChange = (event, newValue) => {
    setSearchYear(newValue);
  };

  return (
    <Fragment>
    <Box sx={{ width: 300 }}>
        <Year>YEAR</Year>
         <Stack spacing={2} direction="row" alignItems="center">
        <span>1970</span>
      <Slider
        getAriaLabel={() => 'Movie Year'}
        value={searchYear}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max = {2021}
        min = {1970}
        sx={{color:'grey.400', 
        '&.css-1yo1jo6-MuiStack-root':{
          marginTop: '10px',
        },
      }}/>
      <span>2021</span>
      </Stack>
    </Box>
    </Fragment>
  );
}

const Year = styled.div`
   text-align:left;
   margin-bottom:10px;
`;