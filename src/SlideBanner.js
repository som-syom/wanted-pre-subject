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
  const [isChange, setIsChange] = useState(true);
  const imageCount = 13;

  let images = Object.keys(img).map((key) => img[key]);

  const calcPosition = (idx) => {
    if (winX > 1200)
      return -14092 + 1084 * (imageCount - idx) + (winX - 1088) / 2;
    else
      return (
        -(imageX * imageCount + 24 * imageCount) +
        (imageX + 24) * (imageCount - idx) +
        36
      );
  };

  const onClickPrevBtn = () => {
    console.log("click prev");
    setIsChange(true);
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = `all 0s`;
        sliderRef.current.style.transform = `translateX(${calcPosition(9)}px)`;
        setIsChange(false);
        setCurrentIndex(9);
      }, 501);
    }
  };
  const onClickNextBtn = () => {
    console.log("click prev");
    setIsChange(true);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 11) {
      setTimeout(() => {
        sliderRef.current.style.transition = `all 0s`;
        sliderRef.current.style.transform = `translateX(${calcPosition(3)}px)`;
        setIsChange(false);
        setCurrentIndex(3);
      }, 501);
    }
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
    if (isChange) {
      sliderRef.current.style.transform = `translateX(${calcPosition(
        currentIndex
      )}px)`;
      sliderRef.current.style.transition = `all 0.5s ease-in-out`;
    }
    const intervalId = setInterval(() => {
      if (!sliderRef.current) return;
      setIsChange(true);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === 11) {
        setTimeout(() => {
          setIsChange(false);
          setCurrentIndex(3);
          sliderRef.current.style.transition = `all 0s`;
          sliderRef.current.style.transform = `translateX(${calcPosition(
            3
          )}px)`;
        }, 501);
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

  // const [isDrag, setIsDrag] = useState(false);
  // const [startX, setStartX] = useState();

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
