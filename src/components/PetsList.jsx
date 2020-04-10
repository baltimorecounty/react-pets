import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";

const { getValue } = Config;

const PetsList = ({ filters = [] }) => (
  <FilterList
    title="Adoptable Pets"
    filters={filters}
    apiEndpoint={`${getValue("apiRoot")}?status=Adoptable&recordsPerPage=1000`}
    renderItem={(props) => <PetCard {...props} />}
  />
);

export default PetsList;
