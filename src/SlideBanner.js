import React, { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import "./stylesheets/SlideBanner.css";
import { img } from "./images";
import nextBtn from "./assets/right.svg";
import prevBtn from "./assets/left.svg";

function SlideBanner() {
  const sliderRef = useRef();
  const [winX, setWinX] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imageX, setImageX] = useState(1060);

  let images = Object.keys(img).map((key) => img[key]);

  const calcPosition = (idx) => {
    if (winX > 1200) return -11924 + 1084 * (11 - idx) + (winX - 1088) / 2;
    else return -(imageX * 11 + 24 * 11) + (imageX + 24) * (11 - idx) + 36;
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

  const resizeWindow = () => {
    setWinX(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(${calcPosition(
      currentIndex
    )}px)`;
    sliderRef.current.style.transition = `all 0.5s ease-in-out`;
    const intervalId = setInterval(() => {
      if (!sliderRef.current) return;
      if (currentIndex === 9) {
        setTimeout(() => {
          sliderRef.current.style.transition = `all 0s`;
          sliderRef.current.style.transform = `translateX(${calcPosition(
            currentIndex + 1
          )}px)`;
          setCurrentIndex(1);
        }, 501);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);

    return () => clearTimeout(intervalId);
  }, [currentIndex, winX, imageX, onClickPrevBtn, onClickNextBtn]);

  useEffect(() => {
    if (winX < 1200) {
      setImageX(winX - 96);
    } else {
      setImageX(1060);
    }
  }, [winX]);

  return (
    <>
      <section className="slider-container">
        <div className="slider-images" ref={sliderRef}>
          {images.map((image, idx) => {
            return (
              <Slide
                image={image}
                idx={idx}
                key={idx}
                currentIndex={currentIndex}
                imageX={imageX}
              />
            );
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
