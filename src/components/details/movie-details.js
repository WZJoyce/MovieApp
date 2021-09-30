import axios from "axios"
import { useEffect, useState } from "react"
import { Fragment } from "react"
import { MovieHeader } from "./movie-header"
import { MoviePlot } from "./movie-plot"
import { MovieRatings } from "./movie-ratings"

export const MovieDetails = () =>{
    const [movie, setMovie] = useState(null)
    const apiKey = "463e582d"
     useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=tt3896198`).then(
            res => setMovie(res.data)
        )
    },[]) 
    if(movie == null){
        return null
    }
    else{
        return (
            <Fragment>
                <MovieHeader movie={movie} />
                <MoviePlot movie={movie} />
                <MovieRatings movie={movie} />
            </Fragment>
        )
    }
}
