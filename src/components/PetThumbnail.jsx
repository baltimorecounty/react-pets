import React from "react";

const PetThumbnail = ({ thumbnail, animalName, gender }) =>
  thumbnail ? (
    <img
      style={{ maxWidth: "100%" }}
      src={thumbnail}
      alt={`This is ${animalName}, this ${gender} is adoptable `}
    />
  ) : (
    <i className="far fa-newspaper fa-3x dg_news_icon"></i>
  );

export default PetThumbnail;
