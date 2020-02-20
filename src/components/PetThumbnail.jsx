import React from "react";

const PetThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <img className="dg_image left" src={thumbnail} alt={thumbnailAltText} />
  ) : (
    <i className="far fa-newspaper fa-3x dg_news_icon"></i>
  );

export default PetThumbnail;
