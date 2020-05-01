import React from "react";

const PetThumbnail = ({ thumbnail, thumbnailAltText, animalName, gender }) =>
  thumbnail ? (
    <img
      style={{ maxWidth: "100%" }}
      src={thumbnail}
      alt={
        thumbnailAltText
          ? thumbnailAltText
          : `This is ${animalName}, this ${gender} is adoptable `
      }
    />
  ) : (
    <i className="far fa-newspaper fa-3x dg_news_icon"></i>
  );

export default PetThumbnail;
