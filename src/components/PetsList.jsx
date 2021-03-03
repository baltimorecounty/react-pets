import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const { getValue } = Config;
const {
  pets: {
    petStatus = console.error("Please define a pet status") || "",
    workingCats,
    informationAbout,
    informationHeader,
  } = {},
} = window;

const PetsList = ({ filters = [] }) => (
  <div>
    {workingCats === "true" ? (
      <div>
        <h3>{ReactHtmlParser(informationHeader)}</h3>
        <div>{ReactHtmlParser(informationAbout)}</div>
      </div>
    ) : null}
    <FilterList
      title={`${petStatus} Pets`}
      filters={filters}
      apiEndpoint={`${getValue("apiRoot")}`}
      renderItem={(props) => <PetCard {...props} />}
      includeInputFilter={true}
      includeClearButton={true}
      includeDateFilter={false}
      searchCategory="Pets"
      inputFilterPlaceholder="Begin typing to filter the results..."
    />
  </div>
);

export default PetsList;
