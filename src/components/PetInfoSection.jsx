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
  const { attributes, animalId } = props;
  const PetAttributeRows = attributes
    .filter(
      item =>
        item.label === "Species" ||
        item.label === "Breed" ||
        item.label === "Color" ||
        item.label === "Weight" ||
        item.label === "Age" ||
        item.label === "Spayed/Neutered" ||
        item.label === "Shelter Arrival Date"
    )
    .map((item, index) => (
      <TableRow key={index}>
        <TableHeadCell>{item.label}</TableHeadCell>
        <TableCell>{item.value}</TableCell>
      </TableRow>
    ));

  return (
    <Table>
      <TableBody>
        <TableRow key={animalId}>
          <TableHeadCell>Animal ID</TableHeadCell>
          <TableCell>{animalId}</TableCell>
        </TableRow>
        {PetAttributeRows}
      </TableBody>
    </Table>
  );
};

PetInfoSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetInfoSection;
