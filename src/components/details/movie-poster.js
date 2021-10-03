import { Fragment } from "react";
import styled from 'styled-components';

export const MoviePoster = (props) =>{
    const poster = props.movie.Poster;

    return(
        <Fragment>
            <Poster src={poster}></Poster>
        </Fragment>
    )
    

}

const Poster = styled.img`
max-width:100%`;