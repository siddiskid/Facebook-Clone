import React from "react";
import "./Homepage.css";
import HomepageLeft from "./HomepageLeft";
import HomepageMiddle from "./HomepageMiddle";
import HomepageRight from "./HomepageRight";

function Homepage() {
  return (
    <div className="homepage">
      <HomepageLeft />
      <HomepageMiddle />
      <HomepageRight />
    </div>
  );
}

export default Homepage;
