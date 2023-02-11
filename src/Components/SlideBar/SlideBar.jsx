import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SlideBar.css";

function SlideBar() {
  const [slidebarOptions, setSlidebarOptions] = useState([
    "All",
    "Music",
    "css",
    "Computer Programming",
    "Mixes",
    "Gaming",
    "Bhajan Music",
    "Beats",
    "Live",
    "Rockstar Games",
    "Chetan Khulage",
  ]);

  return (
    <div className="SlideBar flex">
      {slidebarOptions.map((option) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "slideBar__option active" : "slideBar__option"
          }
          to={`/Home/${option}`}
          key={option}
        >
          {option}
        </NavLink>
      ))}
    </div>
  );
}

export default SlideBar;
