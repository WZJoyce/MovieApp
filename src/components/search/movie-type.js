import React, {useContext} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import { grey } from '@mui/material/colors';
import { MovieContext} from '../context/movie-context';

export const MovieType= () => {
  const { setSearchType } = useContext(MovieContext);
  const [value, setValue] = React.useState('any');
  
  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.value === 'any' ? setSearchType(''): setSearchType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Type>TYPE</Type>
      <RadioGroup row aria-label="type" name="row-radio-buttons-group" value={value}
        onChange={handleChange}>
        <FormControlLabel value="any" control={<Radio sx={{
          color: grey[50],
          '&.Mui-checked': {
            color: grey[50],
          },
        }}/>} label="Any"  disableTypography={true}/>
        <FormControlLabel value="movie" control={<Radio sx={{
          color: grey[50],
          '&.Mui-checked': {
            color: grey[50],
          },
        }}/>} label="Movie" disableTypography={true}/>
        <FormControlLabel value="series" control={<Radio sx={{
          color: grey[50],
          '&.Mui-checked': {
            color: grey[50],
          },
        }}/>} label="Series" disableTypography={true}/>
        <FormControlLabel value="episode" control={<Radio sx={{
          color: grey[50],
          '&.Mui-checked': {
            color: grey[50],
          },
        }}/>} label="Episodes" disableTypography={true}/> 
      </RadioGroup>
    </FormControl>

  );
}

const Type = styled.div`
   text-align:left;
`;