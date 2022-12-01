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
          <span className="text">Live video</span>
        </div>
        <div className="whatsonyourmind__icon">
          <span className="text"> Photo/video </span>
        </div>
        <div className="whatsonyourmind__icon">
          <span className="text"> Feeling/activity </span>
        </div>
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
