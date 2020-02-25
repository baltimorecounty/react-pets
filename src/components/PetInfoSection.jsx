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
  const PetAttributeUnits = attributes.filter(
    item => item.label === "Age Unit" || item.label === "Weight Unit"
  );

  const PetAttributeRows = attributes
    .filter(
      item =>
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

        {item.label === "Age" ? (
          <TableCell>
            {item.value}{" "}
            {
              PetAttributeUnits.filter(item2 => item2.label === "Age Unit")[0]
                .value
            }
          </TableCell>
        ) : item.label === "Weight" ? (
          <TableCell>
            {item.value}{" "}
            {
              PetAttributeUnits.filter(
                item2 => item2.label === "Weight Unit"
              )[0].value
            }
          </TableCell>
        ) : (
          <TableCell>{item.value} </TableCell>
        )}
      </TableRow>
    ));

  return (
    <div className="dg_pet_row_headers">
      <Table>
        <TableBody>{PetAttributeRows}</TableBody>
      </Table>
    </div>
  );
};

PetInfoSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetInfoSection;
