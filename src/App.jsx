import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainHome from "./Components/MainHome/MainHome";
import { Route, Routes } from "react-router-dom";
import ResultsPage from "./Components/ResultsPage/ResultsPage";
import HomeResultsPage from "./Components/HomeResultsPage/HomeResultsPage";

function App() {
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    // const fetchedData = await fetch(
    //   "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBoeHA85SvdflIGhBNqNJLoEjg6bYZPJsE&type=video&q=javascript&maxResults=10"
    // );
    // const convertedData = await fetchedData.json();
    // setData(convertedData);
    // setLoaded(true);
  };

  const [data, setData] = useState([]);

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="App">
      <Header />
      <section className="main__section flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/Home/:id" element={<HomeResultsPage />} />
          <Route path="/:id" element={<ResultsPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
