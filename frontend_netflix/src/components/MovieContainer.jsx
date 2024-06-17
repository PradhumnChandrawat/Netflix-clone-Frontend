import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import "./MovieContainer.css";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="container-bg">
      <div className="container-content">
        <MovieList title={"Popular Movies"} movies={movie.popularMovies} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies} />{" "}
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
