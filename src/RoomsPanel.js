import React from "react";
import "./RoomsPanel.css";

function RoomsPanel({ profilePic, username }) {
  return (
    <div className="roomspanel">
      <img className="logo" src={profilePic} alt=""></img>
      <div className="userName">{username}</div>
      <button className="sayHiButton">
        <span className="buttonText">Say hi</span>
      </button>
    </div>
  );
}

export default RoomsPanel;
