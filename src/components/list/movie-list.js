import * as React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { useContext } from "react"
import { MovieItem } from './movie-item';
import { MovieContext } from "../context/MovieContext";
import { Divider } from "@mui/material";
import { ListItemButton } from '@mui/material';

export const MovieList = () =>{
  const { searchResult, searchYear }  = useContext(MovieContext);
  const movies = searchResult?.Search || [];
  const filteredMovies = movies.filter( m => m.Year <= searchYear[1] && m.Year >= searchYear[0]);
  const { currentMovieId,setCurrentMovieId } = useContext(MovieContext);
  
  const onMovieItemSelected = (imdbId) => {
    setCurrentMovieId(imdbId)
  };

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
            <ListSubheader sx={{textAlign: 'left'}}>{searchResult?.totalResults || 0} RESULTS</ListSubheader>
            {filteredMovies.map((movie) => (
              <ListItemButton key={movie.imdbID}  selected={currentMovieId === movie.imdbID} divider={true} 
              onClick={() => onMovieItemSelected(movie.imdbID)}>
                <MovieItem movie={movie}></MovieItem>
              </ListItemButton>        
            ))}
         
    </List>
  );
}

