import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieById(movieId);

  const movieTeaser = useSelector((store) => store.movie.Movieteaser);

  return (
    <>
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <iframe
          style={{
            width: "100vw",
            height: "100vh",
          }}
          src={`https://www.youtube.com/embed/${movieTeaser.key}?si=xZjmegVgHhJDLW3B&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
