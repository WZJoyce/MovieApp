import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { useContext, useCallback } from 'react';
import { MovieItem } from './movie-item';
import { MovieContext } from '../context';
import { ListItemButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export const MovieList = () => {
  const { searchResult, searchYear, loadingList, error, setClickLoadBtn, clickLoadBtn } = useContext(MovieContext);
  const movies = searchResult.search;
  const filteredMovies = movies.filter(m => m.Year.substring(0, 4) <= searchYear[1] && m.Year.substring(0, 4) >= searchYear[0]);
  const { currentMovieId, setCurrentMovieId } = useContext(MovieContext);

  const onMovieItemSelected = useCallback((imdbId) => {
    setCurrentMovieId(imdbId)
  }, []);

  if (loadingList) {
    return <CircularProgress />
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 540,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <ListSubheader sx={{ textAlign: 'left' }}>{searchResult?.total || 0} RESULTS</ListSubheader>
      {filteredMovies.map((movie) => (
        <ListItemButton key={movie.imdbID} selected={currentMovieId === movie.imdbID} divider={true}
          onClick={() => onMovieItemSelected(movie.imdbID)}>
          <MovieItem movie={movie}></MovieItem>
        </ListItemButton>
      ))}
      {
        (searchResult?.total || 0) !== 0 ? <ListItemButton onClick={() => setClickLoadBtn(!clickLoadBtn)}>Load More</ListItemButton> : null
      }
    </List>
  );
}

