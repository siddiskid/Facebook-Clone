import React, { useState } from "react";
import Bookmark from "./Bookmark";
import "./HomepageLeft.css";
import { bookmarksFirst, bookmarksSecond, Shortcuts } from ".//staticData";

function HomepageLeft() {
  const [more, setMore] = useState("false");

  return (
    <div className="homepageLeft">
      <div className="homepageLeft__bookmarks">
        <div className="filler"></div>
        {bookmarksFirst.map((item) => (
          <Bookmark icon={item.icon} text={item.text} />
        ))}
        {more === "true"
          ? bookmarksSecond.map((item) => (
              <Bookmark icon={item.icon} text={item.text} />
            ))
          : ""}
        <div
          className="homepafeLeft__seeMoreButton"
          onClick={() => {
            if (more === "true") {
              setMore("false");
            } else {
              setMore("true");
            }
          }}
        >
          <img
            src={
              more === "true"
                ? "https://cdn-icons-png.flaticon.com/512/60/60564.png"
                : "https://cdn-icons-png.flaticon.com/512/25/25623.png"
            }
            alt=""
            className="homepafeLeft__seeMoreButtonImage"
          ></img>
          <div className="homepafeLeft__seeMoreButtonText">
            {more === "false" ? "See More" : "See less"}
          </div>
        </div>
      </div>
      <div className="grayBar"></div>
      <div className="homepageLeft__shortcuts">
        <div className="shortcutsText">Your Shortcuts</div>
        {Shortcuts.map((item) => (
          <Bookmark icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default HomepageLeft;
