import React, { useState } from "react";
import "./MainHome.css";
import VideoCard from "../VideoCard/VideoCard";
import SlideBar from "../SlideBar/SlideBar";

export default function MainHome() {
  const [searchResult, setSearchResult] = useState([
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "this is main page",
        channelTitle: "chtit",
        publishTime: "2021-10-09T03:30:03Z",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
        publishTime: "2021-10-09T03:30:03Z",
      },
    },
  ]);

  let uniqueKey = 0;

  return (
    <div className="MainHome">
      <SlideBar />
      <div className="optionResults">
        {searchResult &&
          searchResult.map((video) => (
            <VideoCard
              key={uniqueKey++}
              thumbnail={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              publishTime={video.snippet.publishTime}
            />
          ))}
      </div>
    </div>
  );
}
