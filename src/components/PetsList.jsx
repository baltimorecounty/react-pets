import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";

const { getValue } = Config;
const petStatus = window.pets.petStatus;

const PetsList = ({ filters = [] }) => (
  <FilterList
    title={`${petStatus} Pets`}
    filters={filters}
    apiEndpoint={`${getValue(
      "apiRoot"
    )}?status=${petStatus}&recordsPerPage=1000`}
    renderItem={(props) => <PetCard {...props} />}
  />
);

export default PetsList;
