import { Fragment } from 'react';
import styled from 'styled-components';

export const MoviePlot = (props) =>{
    const plot = props.movie.Plot;

    return(
        <Fragment>
            <Plot>{plot}</Plot>
        </Fragment>
    )
}

const Plot = styled.div`
    text-align:left
`;