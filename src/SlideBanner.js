import React, { useEffect, useRef } from "react";
import Slide from "./Slide";
import "./stylesheets/SlideBanner.css";
import { img } from "./images";
import nextBtn from "./assets/right.svg";
import prevBtn from "./assets/left.svg";

function SlideBanner() {
  const sliderRef = useRef();
  // const [currentBanner, setCurrentBanner] = useState([8, 0, 1]);
  let images = Object.keys(img).map((key) => img[key]);

  const onClickPrevBtn = () => {
    console.log("click prev");
  };
  const onClickNextBtn = () => {
    console.log("click prev");
  };

  useEffect(() => {
    sliderRef.current.style.transform = "translate3d(-100px, 0px, 0px";
  }, []);

  return (
    <>
      <section className="slider-container">
        <div className="slider-images" ref={sliderRef}>
          {images.map((image, idx) => {
            return <Slide image={image} idx={idx} key={idx} />;
          })}
        </div>
      </section>
      <button className="prev-btn" onClick={onClickPrevBtn}>
        <img src={prevBtn} alt="prev" />
      </button>
      <button className="next-btn" onClick={onClickNextBtn}>
        <img src={nextBtn} alt="next" />
      </button>
    </>
  );
}

export default SlideBanner;
