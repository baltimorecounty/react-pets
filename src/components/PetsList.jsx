import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";

const { getValue } = Config;
const {
  pets: {
    petStatus = console.error("Please define a pet status") || "",
    workingCats,
    informationAbout,
  } = {},
} = window;

const PetsList = ({ filters = [] }) => (
  <div>
    {workingCats === "true" ? (
      <div dangerouslySetInnerHTML={{ __html: informationAbout }}></div>
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
