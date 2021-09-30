import { Fragment } from "react";
import { MoviePoster } from "./movie-poster";
import styled from 'styled-components';
import React from 'react';

export const MovieHeader = (movie) => {
    console.log(movie)
    movie = movie.movie
    return (
        <Fragment>
            <MoviePoster movie={movie}></MoviePoster>
            <MainPanel>
                <Title>{movie.Title}</Title>
                <Subtitle>
                    <Rated>{movie.Rated}</Rated>
                    <Year>{movie.Year}</Year>
                    <Genre>{movie.Genre}</Genre>
                    <Runtime>{movie.Runtime}</Runtime>
                </Subtitle>
                <Actors>{movie.Actors}</Actors>
            </MainPanel>   
        </Fragment>
    )
}

const MainPanel = styled.div``;

const Title = styled.h1`
    font-size: 2.0em;
    text-align: center;`;

const Subtitle = styled.div``;

const Rated = styled.div``;

const Year = styled.div``;

const Genre = styled.div``;

const Runtime = styled.div``;

const Actors = styled.div``;
