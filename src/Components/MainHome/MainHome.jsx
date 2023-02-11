import React, { useState } from "react";
import "./MainHome.css";
import VideoCard from "../VideoCard/VideoCard";
import SlideBar from "../SlideBar/SlideBar";

export default function MainHome() {
  return (
    <div className="MainHome">
      <SlideBar />
      <div className="optionResults">
        <VideoCard />
      </div>
    </div>
  );
}
