import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import SiteFooter from "../components/SiteFooter";
import { PetItems } from "../files/PetsData";
import {
  Breadcrumbs,
  BreadCrumbLinkItem,
  PageHeader,
  SiteHeader
} from "@baltimorecounty/dotgov-components";

const AdoptablePetsDetails = props => {
  console.log(props);

  const { animalName = "Bubbles", animalId } = props.match.params;

  const SelectedPet = PetItems.filter(item => item.animalId === animalId);

  const { imageUrl, imageUrlAltText, aboutMe, attributes } = SelectedPet[0];

  const breadCrumbs = () => (
    <Breadcrumbs>
      <BreadCrumbLinkItem text="Departments" link="/departments/health" />
      <BreadCrumbLinkItem text="Animal Services" link="/departments/health" />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text="Adoptable Pets"
        link="/departments/health"
      />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text={animalName}
        link="/departments/health"
      />
    </Breadcrumbs>
  );
  return (
    <div className="dg_internal-template">
      <SiteHeader
        heading="Baltimore County"
        subHeading="Government"
        status="Beta"
      />
      <PageHeader Breadcrumbs={breadCrumbs} />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div id="dg_main-content">
              <PetDetail
                data={SelectedPet}
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
      <SiteFooter />
    </div>
  );
};

export default AdoptablePetsDetails;
