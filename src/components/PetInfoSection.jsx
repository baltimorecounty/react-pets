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
        item.label === "Sex" ||
        item.label === "Weight" ||
        item.label === "Weight Unit" ||
        item.label === "Age" ||
        item.label === "Age Unit" ||
        item.label === "Spayed/Neutered" ||
        item.label === "Shelter Arrival Date"
    )
    .map((item, index) =>
      !(item.label === "Weight Unit" || item.label === "Age Unit") ? (
        <TableRow key={index}>
          <TableHeadCell className="dg_pet_row_headers">
            {item.label}
          </TableHeadCell>

          {item.label === "Age" ? (
            <TableCell>{item.value} years </TableCell>
          ) : item.label === "Weight" ? (
            <TableCell>{item.value} lbs</TableCell>
          ) : (
            <TableCell>{item.value} </TableCell>
          )}
        </TableRow>
      ) : null
    );

  return (
    <div className="dg_pet_row_headers">
      <Table>
        <TableBody>
          <TableRow key={animalId}>
            <TableHeadCell>Animal ID</TableHeadCell>
            <TableCell>{animalId}</TableCell>
          </TableRow>
          {PetAttributeRows}
        </TableBody>
      </Table>
    </div>
  );
};

PetInfoSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetInfoSection;
