import React from "react";
import "./Bookmark.css";

function Bookmark({ icon, text, type }) {
  return (
    <div className="bookmark">
      <img src={icon} alt="" className="bookmark__icon"></img>
      <div className="bookmark__text">{text}</div>
    </div>
  );
}

export default Bookmark;
