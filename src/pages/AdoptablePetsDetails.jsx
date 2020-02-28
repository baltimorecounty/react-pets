import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import PetsBreadCrumbs from "../components/PetsBreadCrumbs";
import { PetItems } from "../files/PetsData";
import PetBreadCrumbs from "../components/PetsBreadCrumbs";

const AdoptablePetsDetails = props => {
  const { id: animalId } = props.match.params;
  const selectedPet = PetItems.find(item => item.animalId === animalId);
  const {
    imageUrl,
    imageUrlAltText,
    aboutMe,
    attributes,
    animalName
  } = selectedPet;

  return (
    <div className="dg_internal-template">
      <div className="container">
       <div className="row">
         <div className="col">
           <div className="dg_breadcrumbs">
             <PetBreadCrumbs/>
           </div>
         </div>
       </div>
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
