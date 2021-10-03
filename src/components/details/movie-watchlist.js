import { Fragment, useContext } from "react";
import {Button} from "@mui/material";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import localStorage from "localStorage";
import { MovieContext } from "../context/MovieContext"

export const MovieWatchlist = (props) =>{
    const { watchBtn, setWatchBtn }  = useContext(MovieContext);
    const movie = props.movie;
    const isStored = localStorage.getItem(movie.imdbID);
    
    const saveOrDeleteMovie = () => {
        if(isStored !== null){
            localStorage.removeItem(movie.imdbID);
            setWatchBtn("primary");
        }
        else{
            localStorage.setItem(movie.imdbID,JSON.stringify(movie));
            setWatchBtn("error");
        }
      };

    return(
        <Fragment>
           <Button id="watchBtn" sx={{ position:"absolute", top: "100px", right:"10px"}} variant="outlined" startIcon={<BookmarkBorderIcon/>} onClick={() => saveOrDeleteMovie()} color={watchBtn} >Watchlist</Button>
        </Fragment>
    )
}

