import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ResultsPage.css";
import VideoCard from "../VideoCard/VideoCard";
import SlideBar from "../SlideBar/SlideBar";
import ytdata from "../../data.json";

function ResultsPage() {
  const { id } = useParams();

  const [searchResult, setSearchResult] = useState([]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    // const fetchedData = await fetch(
    //   // `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBoeHA85SvdflIGhBNqNJLoEjg6bYZPJsE&type=video&q=${id}&maxResults=10`
    //   ytdata
    // );
    // const convertedData = await fetchedData.json();
    // setSearchResult(convertedData.items);
    // setLoaded(true);
    // console.log(searchResult);
    setSearchResult(ytdata.items);
    console.log(ytdata);
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
              publishTime={video.snippet.publishTime}
            />
          ))}
      </div>
    </div>
  );
}

export default ResultsPage;
