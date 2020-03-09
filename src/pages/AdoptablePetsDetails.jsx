import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import { PetItems } from "../files/PetsData";

const AdoptablePetsDetails = props => {
  const { id } = props.match.params;
  const selectedPet = PetItems.find(item => item.id === id);
  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName
  } = selectedPet;

  var petsInformationAboutAdoption = window.pets.informationAbout;

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
                id={id}
              />
            </div>
            {petsInformationAboutAdoption ? (
              <div>
                <h3>Information About Adoption</h3>
                <p>{petsInformationAboutAdoption}</p>
              </div>
            ) : null}
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
