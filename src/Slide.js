import React from "react";
// import { PropTypes } from "prop-types";

function Slide(BannerImage) {
  return (
    <>
      <div className="banner-image">
        <img src={BannerImage} alt="banner" />
      </div>
    </>
  );
}

// Slide.propTypes = {
//   BannerImage: PropTypes.node.isRequired,
// };

export default Slide;
