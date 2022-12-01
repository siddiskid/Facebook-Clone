import React, { useRef } from "react";
import "./Rooms.css";
import RoomsPanel from "./RoomsPanel";
import { rooms } from "./staticData";

function Rooms() {
  const scrollRef = useRef();

  const scroll = (toScroll) => {
    scrollRef.current.scrollLeft += toScroll;
  };

  return (
    <div ref={scrollRef} className="rooms">
      <div className="dummy"></div>
      <button className="scrollButtonLeft" onClick={() => scroll(-300)}>
        <img
          className="scrollImageLeft"
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-gris.png"
          alt=""
        ></img>
      </button>
      {rooms.map((item) => (
        <RoomsPanel profilePic={item.profilePic} username={item.username} />
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

export default Rooms;
