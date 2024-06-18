import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieById(movieId, true);

  const movieTrailer = useSelector((store) => store.movie.backgroundTeaser);

  if (!movieTrailer || !movieTrailer.key) {
    return <div>Loading trailer...</div>;
  }

  const iframeStyles = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };

  return (
    <>
      <div style={iframeStyles}>
        <iframe
          style={iframeStyles}
          src={`https://www.youtube.com/embed/${movieTrailer.key}?si=xZjmegVgHhJDLW3B&autoplay=1&mute=1`}
          title="YouTube video player"
          allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
