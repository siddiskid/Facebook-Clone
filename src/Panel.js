import React from "react";
import "./Panel.css";

function Panel({ profilePic, imagePic }) {
  return (
    <div className="panel">
      {profilePic ? (
        <img className="panel__profile" src={profilePic} alt=""></img>
      ) : (
        <div></div>
      )}
      <img className="panel__image" src={imagePic} alt=""></img>
    </div>
  );
}

export default Panel;
