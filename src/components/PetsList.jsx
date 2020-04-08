import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PetCard from "./PetCard";
import React from "react";

const { getValue } = Config;

const PetsList = () => {
  const filters = [
    {
      targetApiField: "petType",
      displayName: "Species",
      options: [
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
        { value: "other", label: "Other" },
      ],
    },
    {
      targetApiField: "gender",
      displayName: "Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "unknown", label: "Unknown" },
      ],
    },
  ];

  return (
    <FilterList
      title="Adoptable Pets"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PetCard {...props} />}
    />
  );
};

export default PetsList;
