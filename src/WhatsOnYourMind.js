import React from "react";
import "./WhatsOnYourMind.css";

function WhatsOnYourMind({ profilePic, name }) {
  return (
    <div className="whatsonyourmind">
      <div className="whatsonyourmind__input">
        <img className="inputLogo" src={profilePic} alt=""></img>
        <div className="whatsonyourmind__inputButton">
          <span className="whatsonyourmind__inputText">
            Whats on your mind, {name}?
          </span>
        </div>
      </div>
      <div className="graySlab"></div>
      <div className="whatsonyourmind__icons">
        <div className="whatsonyourmind__icon">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/live-video-1133872.png"
            alt=""
            className="whatsonyourmind__iconImage"
          ></img>
          <span className="text">Live video</span>
        </div>
        <div className="whatsonyourmind__icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/126/126806.png"
            alt=""
            className="whatsonyourmind__iconImage"
          ></img>
          <span className="text"> Photo/video </span>
        </div>
        <div className="whatsonyourmind__icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3480/3480315.png"
            alt=""
            className="whatsonyourmind__iconImage"
          ></img>
          <span className="text"> Feeling/activity </span>
        </div>
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
