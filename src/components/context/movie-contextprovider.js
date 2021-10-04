import React from 'react';
import axios from "axios";
import { MovieContext } from './movie-context';
import { useEffect, useState } from 'react';
import { config } from '../../config'

export const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [searchResult, setSearchResult] = useState({search:[],total:""});
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchYear, setSearchYear] = useState([1980, 2000]);
  const [currentMovieId, setCurrentMovieId] = useState("");
  const [watchBtn, setWatchBtn] = useState("primary");
  const [loadingList, setLoadingList] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState({name:"", type:"", page:1});
  const [clickLoadBtn, setClickLoadBtn] = useState(0);

  useEffect(() => {
    setLoadingList(true);
    if(currentPage.name === searchName && currentPage.type === searchType && searchName !== "" ){
      console.log("try")
      axios.get(`${config.baseUrl}?apikey=${config.apiKey}&s=${searchName}&type=${searchType}&page=${currentPage.page+1}`).then(
        res => {
          const result = (searchResult.search).concat(res.data.Search);
          setSearchResult({search:result, total:res.data.totalResults});
          setCurrentPage({name:searchName, type:searchType, page:currentPage.page+1})
          setLoadingList(false);
          setError(null);
        }
      ).catch((error) => {
        setLoadingList(false);
        setError(error.message);
      })
    }else{
      axios.get(`${config.baseUrl}?apikey=${config.apiKey}&s=${searchName}&type=${searchType}&page=1`).then(
        res => {
          console.log("try2")
          setSearchResult({search:(res.data?.Search || []), total:(res.data?.totalResults || "")});
          setCurrentPage({name:searchName, type:searchType, page:1})
          setLoadingList(false);
          setError(null);
        }
      ).catch((error) => {
        setLoadingList(false);
        setError(error.message);
      }) 
    }
  }, [searchName, searchType, clickLoadBtn]);

  useEffect(() => {
    if (currentMovieId !== "") {
      axios.get(`${config.baseUrl}?apikey=${config.apiKey}&i=${currentMovieId}`).then(
        res => {
          setMovie(res.data);
          if (localStorage.getItem(currentMovieId) !== null) {
            setWatchBtn("error")
          }
          else {
            setWatchBtn("primary")
          }
        }
      )
    }
  }, [currentMovieId]);

  return (
    <MovieContext.Provider value={{ movie, setMovie, setSearchType, setSearchName, searchResult, setCurrentMovieId, currentMovieId, searchYear, setSearchYear, watchBtn, setWatchBtn,loadingList, error, clickLoadBtn, setClickLoadBtn}}>
      {children}
    </MovieContext.Provider>
  )
}