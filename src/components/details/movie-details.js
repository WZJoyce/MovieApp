import { useContext } from "react";
import { Fragment } from "react";
import { MovieHeader } from "./movie-header";
import { MoviePlot } from "./movie-plot";
import { MovieRatings } from "./movie-ratings";
import { Divider } from "@mui/material";
import { MovieContext } from "../context/movie-context";

export const MovieDetails = () =>{
    const context = useContext(MovieContext);
    const movie = context.movie;

    if(movie == null)
        return null
    else
        return (
            <Fragment>
                <MovieHeader movie={movie} />
                <Divider flexItem style={{marginTop:"20px", marginBottom:"20px" }}/>
                <MoviePlot movie={movie} />
                <Divider flexItem style={{marginTop:"20px", marginBottom:"20px" }}/>
                <MovieRatings movie={movie} />
            </Fragment>
        )
     
    
}

