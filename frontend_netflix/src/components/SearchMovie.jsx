import React, { useState } from "react";
import "./SearchMovie.css";
import MovieList from "./MovieList";
import axios from "axios";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { SEARCH_MOVIES_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const SearchMovie = () => {
  const [searchText, setSearchText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const dispatch = useDispatch();
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    try {
      const res = await axios.get(
        `${SEARCH_MOVIES_URL}${searchText}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchText, movies }));
    } catch (error) {
      console.log(error);
    }
    setSearchText("");
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={submitHandler} className="search-form">
          <div className="search-box">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="search-button">search</button>
          </div>
        </form>
      </div>

      {hasSearched ? (
        searchedMovie && searchedMovie.length > 0 ? (
          <MovieList
            title={movieName}
            searchMovie={true}
            movies={searchedMovie}
          />
        ) : (
          <h1>Movie Not Found!!</h1>
        )
      ) : null}
    </>
  );
};

export default SearchMovie;
