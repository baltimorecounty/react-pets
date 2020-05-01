import React from "react";
import {
  TableCell,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";
import { ConvertToFriendlyNames } from "../utilities/ConvertToFriendlyNames";
const PetAttributes = (props) => {
  const { attributes } = props;

  var displayAttributes = [
    "Primary Breed",
    "Primary Color",
    "Sex",
    "Weight",
    "Age",
    "Altered",
  ];

  //TODO: Possibly needs to be added to the service. But for now this is where this lives

  const PetAttributeRows = attributes
    .filter((attribute) => displayAttributes.includes(attribute.label))
    .map((item, index) => (
      <TableRow key={index}>
        <TableHeadCell>{ConvertToFriendlyNames(item.label)}</TableHeadCell>
        {item.label === "Age" ? (
          <TableCell>
            <span>
              {item.value}{" "}
              {attributes.find((x) => x.label === "Age Unit").value}
            </span>
          </TableCell>
        ) : item.label === "Weight" ? (
          <TableCell>
            <span>
              {item.value}
              {attributes.find((x) => x.label === "Weight Unit").value}
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
