import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";
import "./VideoPlayer.css";

const VideoPlayer = ({ Id }) => {
  useMovieById(Id, false);
  const movieTrailer = useSelector((store) => store.movie.Movieteaser);

  if (!movieTrailer || !movieTrailer.key) {
    return <div>Loading trailer...</div>;
  }

  return (
    <>
      <div className="fullScreenContent">
        <iframe
          className="fullScreenIframe"
          src={`https://www.youtube.com/embed/${movieTrailer.key}?si=xZjmegVgHhJDLW3B&autoplay=1&mute=1`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
