import { Fragment } from "react"
import styled from 'styled-components'

export const MoviePlot = (movie) =>{
    return(
        <Fragment>
            <Plot>{movie.Plot}</Plot>
        </Fragment>
    )
}

const Plot = styled.div``;