import React from "react";
import {
  Breadcrumbs,
  BreadCrumbLinkItem
} from "@baltimorecounty/dotgov-components";

const PetBreadCrumbs = props => {
  const { animalName } = props;

  return (
    <Breadcrumbs>
      <BreadCrumbLinkItem text="Departments" link="/departments/health" />
      <BreadCrumbLinkItem text="Animal Services" link="/departments/health" />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text="Adoptable Pets"
        link="/animalservices/adoption.html"
      />
      <BreadCrumbLinkItem
        className="breadcrumb-last"
        text={animalName}
        link="/departments/health"
      />
    </Breadcrumbs>
  );
};

export default PetBreadCrumbs;