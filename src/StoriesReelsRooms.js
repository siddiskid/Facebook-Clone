import React, { useRef, useState } from "react";
import "./StoriesReelsRooms.css";
import Story from "./Story";

function StoriesReelsRooms() {
  const [active, setActive] = useState("stories");
  const scrollRef = useRef();

  const scroll = (toScroll) => {
    scrollRef.current.scrollLeft += toScroll;
  };

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
      <div ref={scrollRef} className="storiesreelsrooms__content">
        <div className="filler"> </div>
        <button className="scrollButtonLeft" onClick={() => scroll(-300)}>
          <img
            className="scrollImageLeft"
            src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-gris.png"
            alt=""
          ></img>
        </button>
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />
        <Story className="story" />

        <button className="scrollButtonRight" onClick={() => scroll(300)}>
          <img
            className="scrollImageRight"
            src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
            alt=""
          ></img>
        </button>
        <div className="filler"> </div>
      </div>
    </div>
  );
}

export default StoriesReelsRooms;
