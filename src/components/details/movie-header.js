import React, { Fragment } from 'react';
import { MoviePoster } from './movie-poster';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { MovieWatchlist } from './movie-watchlist';

export const MovieHeader = (props) => {
    const movie = props.movie;

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <MoviePoster movie={movie}></MoviePoster>
                </Grid>
                <Grid item xs={8} textAlign="left" sx={{ alignSelf: 'flex-end' }}>
                    <MovieWatchlist movie={movie}></MovieWatchlist>
                    <Title>{movie.Title}</Title>
                    <Subtitle>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                bgcolor: 'background.paper',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box><Rated disabled>{movie.Rated}</Rated></Box>
                            <Box><Year>{movie.Year}</Year>
                                <span>&#183;</span>
                            </Box>
                            <Box>
                                <Genre>{movie.Genre}</Genre>
                                <span>&#183;</span>
                            </Box>
                            <Box >
                                <Runtime>{movie.Runtime}</Runtime>
                            </Box>
                        </Box>
                    </Subtitle>
                    <Actors>{movie.Actors}</Actors>
                </Grid>
            </Grid>
        </Fragment>
    )
}

const Title = styled.h1`
    font-size: 3.0em;
`;

const Subtitle = styled.span`
`;

const Rated = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
`;

const Year = styled.span`
    margin-left: 20px;
    margin-right: 5px
`;

const Genre = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;

const Runtime = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;

const Actors = styled.div`
    margin-top:20px
`;
