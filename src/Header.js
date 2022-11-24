import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PagesIcon from "@mui/icons-material/Pages";
import PagesOutlinedIcon from "@mui/icons-material/PagesOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import StoreIcon from "@mui/icons-material/Store";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

function Header({ active }) {
  return (
    <div className="header">
      {/* Left side of the header */}
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        ></img>
        <div className="header__leftSearch">
          <SearchIcon fontSize="medium" className="header__leftSearchIcon" />
          <input
            className="header__leftSearchInput"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>
      {/* Middle part of the header */}
      <div className="header__middle">
        <Link className="link" to="/">
          {active === "home" ? (
            <div className="header__middleActive">
              <HomeIcon
                color="primary"
                fontSize="large"
                className="header__middleIconActive"
              />
              <div className="header__middleActiveBar"></div>
            </div>
          ) : (
            <div className="header__middleIcon">
              <HomeOutlinedIcon fontSize="large" />
            </div>
          )}
        </Link>
        <Link className="link" to="pages">
          {active === "pages" ? (
            <div className="header__middleActive">
              <PagesIcon
                color="primary"
                fontSize="large"
                className="header__middleIconActive"
              />
              <div className="header__middleActiveBar"></div>
            </div>
          ) : (
            <div className="header__middleIcon">
              <PagesOutlinedIcon fontSize="large" />
            </div>
          )}
        </Link>
        <Link className="link" to="watch">
          {active === "watch" ? (
            <div className="header__middleActive">
              <MovieIcon
                color="primary"
                fontSize="large"
                className="header__middleIconActive"
              />
              <div className="header__middleActiveBar"></div>
            </div>
          ) : (
            <div className="header__middleIcon">
              <MovieOutlinedIcon fontSize="large" />
            </div>
          )}
        </Link>
        <Link className="link" to="store">
          {active === "store" ? (
            <div className="header__middleActive">
              <StoreIcon
                color="primary"
                fontSize="large"
                className="header__middleIconActive"
              />
              <div className="header__middleActiveBar"></div>
            </div>
          ) : (
            <div className="header__middleIcon">
              <StoreOutlinedIcon fontSize="large" />
            </div>
          )}
        </Link>
        <Link className="link" to="groups">
          {active === "groups" ? (
            <div className="header__middleActive">
              <GroupsIcon
                color="primary"
                fontSize="large"
                className="header__middleIconActive"
              />
              <div className="header__middleActiveBar"></div>
            </div>
          ) : (
            <div className="header__middleIcon">
              <GroupsOutlinedIcon fontSize="large" />
            </div>
          )}
        </Link>
      </div>
      {/* Right side of the header */}
      <div className="header__right">
        <div className="header__rightIcon">
          <MenuIcon fontSize="medium" />
        </div>
        <div className="header__rightIcon">
          <ChatIcon fontSize="medium" />
        </div>
        <div className="header__rightIcon">
          <NotificationsIcon fontSize="medium" />
        </div>
        <div className="header__rightIcon">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
            alt=""
            className="header__rightProfilePic"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
