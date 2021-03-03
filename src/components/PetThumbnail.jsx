import React from "react";

const PetThumbnail = ({ thumbnail, thumbnailAltText, animalName, gender }) =>
  thumbnail ? (
    <img
      className="dg_image"
      src={thumbnail}
      alt={
        thumbnailAltText
          ? thumbnailAltText
          : `This is ${animalName}, this ${gender} is adoptable `
      }
    />
  ) : (
    <i className="fa fa-paw fa-3x"></i>
  );

export default PetThumbnail;
