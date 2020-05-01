import React from "react";

const PetThumbnail = ({ thumbnail, thumbnailAltText, animalName, gender }) =>
  !thumbnail ? (
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
    <i className="fa fa-paw fa-3x"></i>
  );

export default PetThumbnail;
