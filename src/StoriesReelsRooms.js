import React, { useState } from "react";
import "./StoriesReelsRooms.css";
import Stories from "./Stories";
import Reels from "./Reels";
import Rooms from "./Rooms";

function StoriesReelsRooms() {
  const [active, setActive] = useState("stories");

  return (
    <div className="storiesreelsrooms">
      <div className="storiesreelsrooms__header">
        {active === "stories" ? (
          <div
            className="storiesreelsrooms__headerItemsActive"
            onClick={() => {
              setActive("stories");
              console.log(active);
            }}
          >
            <span className="textActive">Stories</span>
            <div className="activeBar"></div>
          </div>
        ) : (
          <div
            className="storiesreelsrooms__headerItems"
            onClick={() => {
              setActive("stories");
              console.log(active);
            }}
          >
            <span className="text"> Stories </span>
          </div>
        )}
        {active === "reels" ? (
          <div
            className="storiesreelsrooms__headerItemsActive"
            onClick={() => {
              setActive("reels");
              console.log(active);
            }}
          >
            <span className="textActive">Reels</span>
            <div className="activeBar"></div>
          </div>
        ) : (
          <div
            className="storiesreelsrooms__headerItems"
            onClick={() => {
              setActive("reels");
              console.log(active);
            }}
          >
            <span className="text"> Reels </span>
          </div>
        )}

        {active === "rooms" ? (
          <div
            className="storiesreelsrooms__headerItemsActive"
            onClick={() => {
              setActive("rooms");
              console.log(active);
            }}
          >
            <span className="textActive">Rooms</span>
            <div className="activeBar"></div>
          </div>
        ) : (
          <div
            className="storiesreelsrooms__headerItems"
            onClick={() => {
              setActive("rooms");
              console.log(active);
            }}
          >
            <span className="text"> Rooms</span>
          </div>
        )}
      </div>
      <div className="storiesreelsrooms__content">
        {/* {stories.map((item) => (
          <Panel
            profilePic={item.profilePic}
            imagePic={oncontextmenu.imagePic}
          />
        ))} */}
        {active === "stories" ? <Stories /> : <div></div>}
        {active === "reels" ? <Reels /> : <div></div>}
        {active === "rooms" ? <Rooms /> : <div></div>}
      </div>
    </div>
  );
}

export default StoriesReelsRooms;
