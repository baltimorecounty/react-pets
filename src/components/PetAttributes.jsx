import React from "react";
import {
  TableCell,
  TableHeadCell,
  TableRow
} from "@baltimorecounty/dotgov-components";

const PetAttributes = props => {
  const { attributes } = props;

  var displayAttributes = [
    "Breed",
    "Color",
    "Weight",
    "Age",
    "Spayed/Neutered",
    "Shelter Arrival Date"
  ];

  const PetAttributeRows = attributes
    .filter(attribute => displayAttributes.includes(attribute.label))
    .map((item, index) => (
      <TableRow key={index}>
        <TableHeadCell>{item.label}</TableHeadCell>
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
