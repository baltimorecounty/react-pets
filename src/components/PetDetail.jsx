import PetAttributeRows from "./PetAttributeRows";
import PetThumbnail from "./PetThumbnail";
import React from "react";

const PetDetail = (props) => {
  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName,
    animalId,
    gender,
  } = props;

  return (
    <div className="container">
      <h2>{animalName}</h2>
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <p>{aboutMe}</p>
        </div>
        <div className="col-md-4 col-xs-12">
          <PetThumbnail
            thumbnail={imageUrl}
            thumbnailAltText={imageUrlAltText}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PetAttributeRows
            attributes={attributes}
            animalId={animalId}
            gender={gender}
          />
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
