import "./Sidebar.css";
import React from "react";
import homeIcon from "/icons/home.svg";
import subscriptionIcon from "/icons/subscription.svg";
import libraryIcon from "/icons/library.svg";
import shortsIcon from "/icons/shorts.svg";
import historyIcon from "/icons/history.svg";
import videosIcon from "/icons/videos.svg";
import moviesIcon from "/icons/movies.svg";
import clockIcon from "/icons/clock.svg";
import Opition from "./Option/Option";

export default function Sidebar(props) {
  return (
    <div
      className="Sidebar"
      style={props.status ? { width: "200px" } : { width: "100px" }}
    >
      {props.status ? (
        <div className="SidebarOpen">
          <div className="sidebar__section">
            <Opition name="Home" icon={homeIcon} />
            <Opition name="Shorts" icon={shortsIcon} />
            <Opition name="Subscription" icon={subscriptionIcon} />
          </div>
          <div className="sidebar__section">
            <Opition name="Library" icon={libraryIcon} />
            <Opition name="History" icon={historyIcon} />
            <Opition name="Your videos" icon={videosIcon} />
            <Opition name="Your movies" icon={moviesIcon} />
            <Opition name="Watch Later" icon={clockIcon} />
          </div>
        </div>
      ) : (
        <div className="SidebarClose">
          <Opition name="Home" icon={homeIcon} />
          <Opition name="Shorts" icon={shortsIcon} />
          <Opition name="Subscription" icon={subscriptionIcon} />
          <Opition name="Library" icon={libraryIcon} />
        </div>
      )}
    </div>
  );
}
