import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ResultsPage.css";
import VideoCard from "../VideoCard/VideoCard";
import SlideBar from "../SlideBar/SlideBar";
import InfiniteScroll from "react-infinite-scroll-component";
import convertedData from "../../data.json";

function ResultsPage() {
  const { id } = useParams();

  const [Results, setResults] = useState([]);
  const [pageData, setPageData] = useState([]);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    // const fetchedData = await fetch(
    // `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
    //   import.meta.env.VITE_API_KEY
    // }&type=video&q=&maxResults=10`
    // );
    // const convertedData = await fetchedData.json();
    // setResults(
    //   Results == []
    //     ? convertedData.items
    //     : Results.items.concat(convertedData.items)
    // );
    // setLoaded(true);

    /**
     * test
     */
    setResults(convertedData.items);
    setPageData(convertedData.pageInfo);
    setLoaded(true);
    // setResults(convertedData.items);
  };

  function getMoreResult() {
    setResults((prevResult) => {
      console.log(prevResult);
      return [...prevResult, ...convertedData.items];
    });
    console.log(Results);
  }

  let uniqueKey = 0;
  return (
    <div className="ResultsPage">
      <SlideBar />
      {loaded && (
        <InfiniteScroll
          dataLength={uniqueKey} //This is important field to render the next data
          next={getMoreResult}
          hasMore={true}
          // loader={<h4>Loading...</h4>}
          height={600}
        >
          <div className="results flex">
            {Results &&
              Results.map((video) => (
                <VideoCard
                  key={uniqueKey++}
                  thumbnail={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  publishTime={video.snippet.publishTime}
                />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default ResultsPage;
