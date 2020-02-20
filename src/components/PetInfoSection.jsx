import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow
} from "@baltimorecounty/dotgov-components";

const PetInfoSection = props => {
  const { attributes } = props;
  const attributesToDisplay = attributes.filter(item => {
    return (
      item.label === "Breed" ||
      item.label === "Color" ||
      item.label === "Weight" ||
      item.label === "Age" ||
      item.label === "Altered" ||
      item.label === "Arrival Date"
    );
  });

  const PetAttributeRows = attributesToDisplay.map(item => {
    return (
      <TableRow>
        <TableHeadCell>{item.label}</TableHeadCell>
        <TableCell>{item.value}</TableCell>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableBody>{PetAttributeRows}</TableBody>
    </Table>
  );
};

PetInfoSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetInfoSection;
