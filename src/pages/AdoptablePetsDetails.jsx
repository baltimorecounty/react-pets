import React from "react";
import PetDetail from "../components/PetDetail";
import PetSidebar from "../components/PetSidebar";
import SiteFooter from "../components/SiteFooter";
import {
  Breadcrumbs,
  BreadCrumbLinkItem,
  PageHeader,
  SiteHeader
} from "@baltimorecounty/dotgov-components";

const ExamplePetDetails = {
  id: "12345",
  dateAdoptedRedeemed: "12/25/19",
  imageUrl: "https://baltimorecountymd.gov/sebin/b/d/AdoptAPetTestImage.png",
  imageUrlAltText: "Bubbles is a dog",
  animalName: "Bubbles",
  aboutMe:
    "I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles I blow bubbles",
  accellaId: "ACC-12345",
  animalId: "ACIMP-2019-061111",
  status: "Alive and Kicking",
  url:
    "https://beta.baltimorecountymd.gov/pets/ACIMP-2019-061111?status=adoptable",
  attributes: [
    {
      label: "Species",
      value: "Dog"
    },
    {
      label: "Breed",
      value: "PIT BULL TERRIER"
    },
    {
      label: "Color",
      value: "WHITE"
    },
    {
      label: "Secondary Color",
      value: "BRINDLE"
    },
    {
      label: "Sex",
      value: "Male"
    },
    {
      label: "Weight",
      value: "106.0"
    },
    {
      label: "Weight Unit",
      value: "lb"
    },
    {
      label: "Age",
      value: "5"
    },
    {
      label: "Age Unit",
      value: "Years"
    },

    {
      label: "Spayed/Neutered",
      value: "Yes"
    },
    {
      label: "Shelter Arrival Date",
      value: "12/25/2019"
    }
  ]
};

const AdoptablePetsDetails = props => {
  const { animalName = "Bubbles" } = props;
  const { imageUrl, imageUrlAltText, aboutMe, attributes } = ExamplePetDetails;

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
                data={ExamplePetDetails}
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
