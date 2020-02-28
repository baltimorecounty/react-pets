import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import { PetItems } from "../files/PetsData";

const AdoptablePetsDetails = props => {
  const { id: animalId } = props.match.params;
  const selectedPet = PetItems.filter(item => item.animalId === animalId);
  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName
  } = selectedPet[0];

  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div id="dg_main-content">
              <PetDetail
                imageUrl={imageUrl}
                imageUrlAltText={imageUrlAltText}
                aboutMe={aboutMe}
                attributes={attributes}
                animalName={animalName}
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <PetSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptablePetsDetails;
