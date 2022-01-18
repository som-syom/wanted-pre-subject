import React from "react";
import { PropTypes } from "prop-types";
import { text } from "./images";
import GoIcon from "./assets/goto.svg";

function Slide({ image, idx, currentIndex }) {
  let activeBanner = "banner-wrap";
  let activeText = "banner-text";
  if (currentIndex === idx) {
    activeBanner += " activeBanner";
    activeText += " activeBanner";
  }
  return (
    <>
      <div className={activeBanner} key={idx}>
        <div className="banner-image">
          <img src={image} alt="banner" />
        </div>
        <div className={activeText}>
          <h2 className="banner-text__h2">{text[idx].h2}</h2>
          <h3 className="banner-text__h3">{text[idx].h3}</h3>
          <hr className="banner-text__hr"></hr>
          <a href="/" className="banner-text__go">
            <span className="banner-text__go__text">바로가기</span>
            <img
              src={GoIcon}
              alt="바로가기"
              className="banner-text__go__icon"
            />
          </a>
        </div>
      </div>
    </>
  );
}

Slide.propTypes = {
  image: PropTypes.node.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Slide;
