import React from "react";
import "./MovieCard.css";
import { TMDB_IMG_Url } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="card-container">
      <img src={`${TMDB_IMG_Url}/${posterPath}`} alt="movie-banner" />
      <div className="card-overlay">
        {/* Additional movie details or actions can go here */}
        <p>More Info</p>
      </div>
    </div>
  );
};

export default MovieCard;
