import React from "react";
import {
  TableCell,
  TableHeadCell,
  TableRow
} from "@baltimorecounty/dotgov-components";

const PetAttributes = props => {
  const { attributes } = props;

  var displayAttributes = [
    "Type",
    "Primary Breed",
    "Primary Color",
    "Sex",
    "Weight",
    "Age",
    "Altered",
    "Shelter Arrival Date"
  ];

  const ConvertToFriendlyNames = value => {
    if (value === "Type") {
      return "Species";
    }
    if (value === "Primary Breed") {
      return "Breed";
    }
    if (value === "Altered") {
      return "Spayed/Neutered";
    }
    if (value === "Primary Color") {
      return "Color";
    }
    return value;
  };

  const PetAttributeRows = attributes
    .filter(attribute => displayAttributes.includes(attribute.label))
    .map((item, index) => (
      <TableRow key={index}>
        <TableHeadCell>{ConvertToFriendlyNames(item.label)}</TableHeadCell>
        {item.label === "Age" ? (
          <TableCell>
            <span>
              {item.value} {attributes.find(x => x.label === "Age Unit").value}
            </span>
          </TableCell>
        ) : item.label === "Weight" ? (
          <TableCell>
            <span>
              {item.value}{" "}
              {attributes.find(x => x.label === "Weight Unit").value}
            </span>
          </TableCell>
        ) : (
          <TableCell>{item.value} </TableCell>
        )}
      </TableRow>
    ));

  return PetAttributeRows;
};

export default PetAttributes;
