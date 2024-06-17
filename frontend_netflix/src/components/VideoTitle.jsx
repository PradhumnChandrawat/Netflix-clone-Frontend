import React from "react";
import { CiPlay1, CiCircleInfo } from "react-icons/ci";
import "./VideoTitle.css";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="overview">{overview}</p>
      </div>
      <div className="button-container">
        <button className="play-button">
          <CiPlay1 size="24px" />
          <span>Play</span>
        </button>
        <button className="info-button">
          <CiCircleInfo size="24px" />
          <span>Watch more</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
