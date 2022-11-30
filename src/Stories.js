import React, { useRef } from "react";
import "./Stories.css";
import Panel from "./Panel";
import { stories } from "./staticData";

function Reels() {
  const scrollRef = useRef();

  const scroll = (toScroll) => {
    scrollRef.current.scrollLeft += toScroll;
  };

  return (
    <div ref={scrollRef} className="stories">
      <div className="dummy"></div>
      <button className="scrollButtonLeft" onClick={() => scroll(-300)}>
        <img
          className="scrollImageLeft"
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-gris.png"
          alt=""
        ></img>
      </button>
      {stories.map((item) => (
        <Panel profilePic={item.profilePic} imagePic={item.imagePic} />
      ))}
      <button className="scrollButtonRight" onClick={() => scroll(300)}>
        <img
          className="scrollImageRight"
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
          alt=""
        ></img>
      </button>
      <div className="dummy"></div>
    </div>
  );
}

export default Reels;
