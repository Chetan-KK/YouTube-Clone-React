import React, { useState } from "react";
import "./Header.css";
import menuIcon from "/icons/menu.svg";
import searchIcon from "/icons/search.svg";
import micIcon from "/icons/mic.svg";
import clearIcon from "/icons/clear.svg";
import videoPlusIcon from "/icons/video-plus.svg";
import notificationIcon from "/icons/notification.svg";
import YouTubeLogo from "/YouTubeLogo.png";
import userIcon from "/userIcon.jpg";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const [clearBut, setclearBut] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    e.target.value == "" ? setclearBut(false) : setclearBut(true);
  };
  function handleClear() {
    setSearch("");
    setclearBut(false);
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/${e.target[0].value}`);
  };

  return (
    <div className="flex Header">
      <div className="flex header__side header__left">
        <img
          src={menuIcon}
          className="normal_icon normal_icon_menuIcon"
          alt=""
        />
        <img className="header__mainLogo" src={YouTubeLogo} alt="" />
      </div>
      <form className="flex header__form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="header__searchBar"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
        />
        <img
          src={searchIcon}
          className="normal_icon header__searchInnerIcon"
          alt=""
        />
        {clearBut && (
          <img
            src={clearIcon}
            className="normal_icon header__clearIcon"
            onClick={handleClear}
            alt=""
          />
        )}
        <button type="submit" className="header__searchButton">
          <img src={searchIcon} alt="" className="header__searchIcon" />
        </button>
        <img src={micIcon} className="normal_icon" alt="" />
      </form>
      <div className="flex header__side header__right">
        <img src={videoPlusIcon} alt="" className="normal_icon" />
        <img src={notificationIcon} alt="" className="normal_icon" />
        <img className="header__userIcon" src={userIcon} alt="" />
      </div>
    </div>
  );
}
