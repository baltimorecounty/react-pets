import { Config } from "@baltimorecounty/javascript-utilities";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import React from "react";
import usePets from "../hooks/usePets";
import { useQuery } from "react-query";

const { getValue } = Config;

const fetchPet = (key, { animalId }) =>
  fetch(`${getValue("apiRoot")}/${animalId}`).then((resp) => resp.json());

const AdoptablePetsDetails = (props) => {
  const { animalId } = props.match.params;
  const { data, error, isLoading } = useQuery("pet", { animalId }, fetchPet);

  if (!data) {
    return <p>Loading information for {animalId}...</p>;
  }

  if (error) {
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
    attributes,
    animalName,
    gender,
  } = data;

  var petsInformationAboutAdoption = window.pets.informationAbout;

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
