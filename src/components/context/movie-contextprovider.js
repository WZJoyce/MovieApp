import { MovieContext} from './movie-context';
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';

export const MovieContextProvider = ({children}) => {
    const [movie, setMovie] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchType, setSearchType] = useState("");
    const [searchYear, setSearchYear] = useState([1980, 2000]);
    const [currentMovieId, setCurrentMovieId] = useState("");
    const [watchBtn, setWatchBtn] = useState("primary");
    const apiKey = "463e582d";
  
    useEffect(() => {
       axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchName}&type=${searchType}`).then(
           res => setSearchResult(res.data)
       )
    },[searchName, searchType]);
  
    useEffect(() => {
      if(currentMovieId !== ""){
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${currentMovieId}`).then(
            res => {setMovie(res.data)
              if(localStorage.getItem(currentMovieId)!== null)
                  { setWatchBtn("error")
                }
                else{
                  setWatchBtn("primary")
                }
            }
        )
      }
    },[currentMovieId]);

    return (
        <MovieContext.Provider value={{movie, setMovie, setSearchType, setSearchName, searchResult, setCurrentMovieId, currentMovieId, searchYear, setSearchYear, watchBtn, setWatchBtn}}>
            {children}
        </MovieContext.Provider>
    )
}