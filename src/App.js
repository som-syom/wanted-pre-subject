import React from "react";
import NaviBar from "./NaviBar";
import SlideBanner from "./SlideBanner";
import "./stylesheets/App.css";

function App() {
  return (
    <>
      <div className="all-container">
        <NaviBar />
        <SlideBanner />
      </div>
    </>
  );
}

export default App;
