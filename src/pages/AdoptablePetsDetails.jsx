import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import usePets from "../hooks/usePets";

const AdoptablePetsDetails = props => {
  const { animalId } = props.match.params;
  const [{ petItems, isLoading }] = usePets(`/hub/pets/${animalId}`);

  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName
  } = petItems;

  console.log(petItems);

  var petsInformationAboutAdoption = window.pets.informationAbout;

  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {isLoading ? (
              <p>Loading Animal Services Pets...</p>
            ) : (
              <div id="dg_main-content">
                <PetDetail
                  imageUrl={imageUrl}
                  imageUrlAltText={imageUrlAltText}
                  aboutMe={aboutMe}
                  attributes={attributes}
                  animalName={animalName}
                  animalId={animalId}
                />
              </div>
            )}
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
