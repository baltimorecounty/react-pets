import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import usePet from "../hooks/usePet";

const AdoptablePetsDetails = (props) => {
  const { animalId } = props.match.params;
  const [{ hasError, animal, isLoading }] = usePet(
    animalId,
    window.pets.petStatus
  );

  if (!animal) {
    return <p>Loading information for {animalId}...</p>;
  }

  if (hasError) {
    return (
      <p>
        We could not load information for {animalId}. Please try again in a few
        minutes.
      </p>
    );
  }

  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes = [],
    animalName,
    gender,
  } = animal;

  var petsInformationAboutAdoption = ReactHtmlParser(
    window.pets.informationAbout.replace("{animalId}", animalId)
  );

  return (
    <div className="dg_internal-template">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {isLoading ? (
              <p>Loading Adoptable Pets...</p>
            ) : (
              <div id="dg_main-content">
                <PetDetail
                  imageUrl={imageUrl}
                  imageUrlAltText={imageUrlAltText}
                  aboutMe={aboutMe}
                  attributes={attributes}
                  animalName={animalName}
                  animalId={animalId}
                  gender={gender}
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
