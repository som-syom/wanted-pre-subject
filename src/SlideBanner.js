import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import "./stylesheets/SlideBanner.css";
import { img } from "./images";
import nextBtn from "./assets/right.svg";
import prevBtn from "./assets/left.svg";

function SlideBanner() {
  const sliderRef = useRef();
  // const [currentBanner, setCurrentBanner] = useState([8, 0, 1]);

  const [currentIndex, setCurrentIndex] = useState(1);
  let images = Object.keys(img).map((key) => img[key]);

  const calcPosition = (idx) => {
    return -11924 + 1084 * (11 - idx);
  };

  const onClickPrevBtn = () => {
    console.log("click prev");
    if (currentIndex == 1) setCurrentIndex(9);
    else setCurrentIndex(currentIndex - 1);
  };
  const onClickNextBtn = () => {
    console.log("click prev");
    if (currentIndex == 9) setCurrentIndex(1);
    else setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    sliderRef.current.style.transition = `transform .3s`;
    sliderRef.current.style.transform = `translateX(${calcPosition(
      currentIndex
    )}px)`;

    let intervalId;
    intervalId = setInterval(() => {
      if (currentIndex == 9) setCurrentIndex(1);
      else setCurrentIndex(currentIndex + 1);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, [currentIndex]);

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
