import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MovieDetails } from '../components/details';
import { MovieSearch } from '../components/search';
import { MovieList } from '../components/list';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Search = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item elevation={0} sx={{ p: 0 }}>
            <MovieSearch></MovieSearch>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item elevation={0}>
            <MovieList></MovieList>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item elevation={0}>
            <MovieDetails></MovieDetails>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}