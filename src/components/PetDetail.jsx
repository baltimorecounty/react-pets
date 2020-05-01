import PetAttributeRows from "./PetAttributeRows";
import PetThumbnail from "./PetThumbnail";
import { ReturnFormattedDate } from "../utilities/DateFunctions";
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
    dateAdoptedRedeemed,
    petType,
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
            animalName={animalName}
            gender={gender}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PetAttributeRows
            attributes={attributes}
            animalId={animalId}
            gender={gender}
            dateAdoptedRedeemed={ReturnFormattedDate(dateAdoptedRedeemed)}
            petType={petType}
          />
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
