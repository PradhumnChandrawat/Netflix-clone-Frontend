import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"; 

const MovieList = ({ title, movies, searchMovie = false }) => {
  return (
    <div className="movie-list-container">
      <h1
        className={`movie-title ${
          searchMovie ? "movie-title-black" : "movie-title-white"
        }`}
      >
        {title}
      </h1>
      <div className="movie-list-scroll no-scrollbar">
        <div className="movie-items">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              Id={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
