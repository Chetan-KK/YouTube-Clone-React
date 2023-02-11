import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  return (
    <div className="Video">
      <div className="video__thumbnail">
        <img src={props.thumbnail} alt="" className="video__thumbnail__img" />
      </div>
      <div className="video__title">{props.title}</div>
      <div className="channel__name">{props.channelTitle}</div>
    </div>
  );
}

export default VideoCard;
