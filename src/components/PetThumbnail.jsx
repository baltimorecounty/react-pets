import React from "react";

const PetThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <img style={{ maxWidth: "100%",paddingRight:"40px", paddingLeft:"20px"} } src={thumbnail} alt={thumbnailAltText} />
  ) : (
    <i className="far fa-newspaper fa-3x dg_news_icon"></i>
  );

export default PetThumbnail;
