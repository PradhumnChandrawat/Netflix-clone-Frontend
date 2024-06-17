import React from "react";
import "./SearchMovie.css";
import MovieList from "./MovieList";

const SearchMovie = () => {
  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="search-button">search</button>
          </div>
        </form>
      </div>

      <MovieList />
    </>
  );
};

export default SearchMovie;
