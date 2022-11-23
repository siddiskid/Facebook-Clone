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
import { useStateValue } from "./StateProvider";

// import { Link } from "react-router-dom";

function Header() {
  const [{ active }, dispatch] = useStateValue();

  const activeHome = () => {
    dispatch({
      type: "ACTIVE_HOME",
      active: "home",
    });
  };
  const activePages = () => {
    dispatch({
      type: "ACTIVE_PAGES",
      active: "pages",
    });
  };
  const activeMovie = () => {
    dispatch({
      type: "ACTIVE_MOVIE",
      active: "movie",
    });
  };
  const activeStore = () => {
    dispatch({
      type: "ACTIVE_STORE",
      active: "store",
    });
  };
  const activeGroups = () => {
    dispatch({
      type: "ACTIVE_GROUPS",
      active: "groups",
    });
  };

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
            <HomeOutlinedIcon fontSize="large" onClick={activeHome} />
          </div>
        )}
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
          <div className="header__middleIcon" onClick={activePages}>
            <PagesOutlinedIcon fontSize="large" />
          </div>
        )}
        {active === "movie" ? (
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
            <MovieOutlinedIcon fontSize="large" onClick={activeMovie} />
          </div>
        )}
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
            <StoreOutlinedIcon fontSize="large" onClick={activeStore} />
          </div>
        )}
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
            <GroupsOutlinedIcon fontSize="large" onClick={activeGroups} />
          </div>
        )}
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
      </div>
    </div>
  );
}

export default Header;
