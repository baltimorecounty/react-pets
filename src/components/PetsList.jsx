import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";

const { getValue } = Config;
const {
  pets: {
    petStatus = console.error("Please define a pet status") || "",
    workingCats,
  } = {},
} = window;

console.log(petStatus);

const PetsList = ({ filters = [] }) => (
  <div>
    {workingCats === "true" ? (
      <div>
        <h3>Information About Working Cat Adoption</h3>
        <p>
          Adopt one or several of our working cats shown below and help save
          lives today! Learn more about our
          <a href="https://www.baltimorecountymd.gov/departments/animalservices/working-cat-program.html">
            Working Cat Program
          </a>
          .
        </p>
      </div>
    ) : null}
    <FilterList
      title={`${petStatus} Pets`}
      filters={filters}
      apiEndpoint={`${getValue("apiRoot")}`}
      renderItem={(props) => <PetCard {...props} />}
      includeInputFilter={true}
      includeClearButton={true}
      searchCategory="Pets"
      inputFilterPlaceholder="Begin typing to filter the results..."
    />
  </div>
);

export default PetsList;
