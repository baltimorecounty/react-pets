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
      const { value: weight = "" } = attributes.find(
        (x) => x.label === "Weight Unit"
      );
      const { value: age = "" } = attributes.find(
        (x) => x.label === "Age Unit"
      );

      return (
        <TableRow key={index}>
          <TableHeadCell>{ConvertToFriendlyNames(item.label)}</TableHeadCell>
          {item.label === "Age" && age && (
            <TableCell>
              <span>
                {item.value} {age}
              </span>
            </TableCell>
          )}
          {item.label === "Weight" && weight && (
            <TableCell>
              <span>
                {item.value} {weight}
              </span>
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
