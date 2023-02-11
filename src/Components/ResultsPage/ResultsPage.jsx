import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ResultsPage.css";
import VideoCard from "../VideoCard/VideoCard";
import SlideBar from "../SlideBar/SlideBar";

function ResultsPage() {
  const { id } = useParams();

  const [searchResult, setSearchResult] = useState([
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
    {
      snippet: {
        thumbnails: { high: { url: "img" } },
        title: "tit",
        channelTitle: "chtit",
      },
    },
  ]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    // const fetchedData = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBoeHA85SvdflIGhBNqNJLoEjg6bYZPJsE&type=video&q=${id}&maxResults=10`
    // );
    // const convertedData = await fetchedData.json();
    // setSearchResult(convertedData.items);
    // setLoaded(true);
    // console.log(searchResult);
  };

  let uniqueKey = 0;
  return (
    <div className="ResultsPage">
      <SlideBar />
      <div className="results flex">
        {searchResult &&
          searchResult.map((video) => (
            <VideoCard
              key={uniqueKey++}
              thumbnail={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
            />
          ))}
      </div>
    </div>
  );
}

export default ResultsPage;
