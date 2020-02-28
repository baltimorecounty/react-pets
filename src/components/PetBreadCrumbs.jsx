import React from "react";
import {
  Breadcrumbs,
  BreadCrumbLinkItem
} from "@baltimorecounty/dotgov-components";

const PetBreadCrumbs = props => {
  const { animalName } = props;
  console.log(props);
  return (
    <Breadcrumbs>
      <BreadCrumbLinkItem
        text="Departments"
        link="/departments/animalservices"
      />
      <BreadCrumbLinkItem
        text="Animal Services"
        link="/departments/animalservices"
      />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text="Adoptable Pets"
        link="/animalservices/adoption.html"
      />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text={animalName}
        link="/animalservices/adoption.html"
      />
    </Breadcrumbs>
  );
};

export default PetBreadCrumbs;
