import { Fragment } from "react"
import styled from 'styled-components'

export const MovieRatings = (movie) =>{
    movie = movie.movie
    return(
        <Fragment>
           <Rating>
                <Value>{movie.Ratings[0].Value}</Value>
                <Source>{movie.Ratings[0].Source}</Source>   
            </Rating>
            <Rating>
                <Value>{movie.Ratings[1].Value}</Value>
                <Source>{movie.Ratings[1].Source}</Source>   
            </Rating>
            <Rating>
                <Value>{movie.Ratings[2].Value}</Value>
                <Source>{movie.Ratings[2].Source}</Source>   
            </Rating> 
        </Fragment>
    )
}

const Rating = styled.div``;

const Value = styled.div``;

const Source = styled.div``;
