import { Fragment } from "react"
import styled from 'styled-components'

export const MoviePoster = (movie) =>{
    console.log(movie.Poster)

    return(
        <Fragment>
            <Poster src={movie.movie.Poster}></Poster>
        </Fragment>
    )
    

}

const Poster = styled.img``;