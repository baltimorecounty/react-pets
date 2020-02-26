import React from "react";
import PetThumbnail from "./PetThumbnail";
import PetAttributesSection from "./PetAttributesSection";

const PetDetail = props => {
  const { imageUrl, imageUrlAltText, aboutMe, attributes, animalName } = props;
  return (
    <div class="container">
      <h2>{animalName}</h2>
      <div className="row">
        <div className="col-lg-8 col-md-4 col-xs-12">
          <p>{aboutMe}</p>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
          <PetThumbnail
            thumbnail={imageUrl}
            thumbnailAltText={imageUrlAltText}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-8 col-xs-12">
          <PetAttributesSection attributes={attributes} />
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
