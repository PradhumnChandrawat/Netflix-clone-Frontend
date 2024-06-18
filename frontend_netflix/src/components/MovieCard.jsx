import React from "react";
import "./MovieCard.css";
import { TMDB_IMG_Url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, Id }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(Id));
    dispatch(setOpen(true));
  };

  return (
    <div className="card-container" onClick={handleOpen}>
      <img src={`${TMDB_IMG_Url}/${posterPath}`} alt="movie-banner" />
      <div className="card-overlay">
        <p>More Info</p>
      </div>
    </div>
  );
};

export default MovieCard;
