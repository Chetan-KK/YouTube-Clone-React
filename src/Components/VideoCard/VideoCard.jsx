import React, { useEffect } from "react";
import "./VideoCard.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

function VideoCard(props) {
  //format time in years and months format
  const timeAgo = new TimeAgo("en-US");
  const publishDate = timeAgo.format(new Date(props.publishTime));

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    // const fetchedData = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${import.meta.env.VITE_API_KEY}&chart=mostPopular&regionCode=IN&type=video&maxResults=10`)
  };

  return (
    <div className="Video">
      <div className="video__thumbnail">
        <img src={props.thumbnail} alt="" className="video__thumbnail__img" />
      </div>
      <div className="video__description flex">
        <div className="channel_logo_side">
          <img src={props.thumbnail} className="channel_logo" alt="" />
        </div>
        <div className="desc_side">
          <div className="video__title">{props.title}</div>
          <div className="channel__name">{props.channelTitle}</div>
          <span className="video__views">290k</span>
          <span className="video__publishDate">{publishDate}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
