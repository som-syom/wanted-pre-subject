import React from "react";
// import Slide from "./Slide";
import "./stylesheets/SlideBanner.css";
import { img } from "./images";

function SlideBanner() {
  // const sliderRef = useRef();
  // const [currentBanner, setCurrentBanner] = useState([8, 0, 1]);
  let images = Object.keys(img).map((key) => img[key]);

  const onClickPrevBtn = () => {
    console.log("click prev");
  };
  const onClickNextBtn = () => {
    console.log("click prev");
  };

  return (
    <>
      <section className="slider-container">
        <div className="slider-images">
          {images.map((image, idx) => {
            return (
              <div className="banner-image" key={idx}>
                <img src={image} alt="banner" />
              </div>
            );
          })}
        </div>

        <button className="prev-btn" onClick={onClickPrevBtn}></button>
        <button className="next-btn" onClick={onClickNextBtn}></button>
      </section>
    </>
  );
}

export default SlideBanner;
