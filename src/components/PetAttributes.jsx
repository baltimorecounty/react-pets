import {
  TableCell,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";

import { ConvertToFriendlyNames } from "../utilities/ConvertToFriendlyNames";
import React from "react";

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

  const PetAttributeRows = attributes
    .filter(
      (attribute) =>
        displayAttributes.includes(attribute.label) && attribute.value
    )
    .map((item, index) => {
      const { value: weightUnit = "" } = attributes.find(
        (x) => x.label === "Weight Unit"
      );
      const { value: ageUnit = "" } = attributes.find(
        (x) => x.label === "Age Unit"
      );

      console.log(item.value);
      console.log(weightUnit);

      return (
        <TableRow key={index}>
          <TableHeadCell>{ConvertToFriendlyNames(item.label)}</TableHeadCell>
          {item.label === "Age" && ageUnit && (
            <TableCell>
              <span>{`${item.value} ${ageUnit}`}</span>
            </TableCell>
          )}
          {item.label === "Weight" && weightUnit && (
            <TableCell>
              <span>{`${item.value} ${weightUnit}`}</span>
            </TableCell>
          )}
          {item.label.indexOf("Weight") === -1 &&
            item.label.indexOf("Age") === -1 && (
              <TableCell>{item.value} </TableCell>
            )}
        </TableRow>
      );
    });

  return PetAttributeRows;
};

export default PetAttributes;
