import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow
} from "@baltimorecounty/dotgov-components";

import PetAttributes from "./PetAttributes";
import PropTypes from "prop-types";
import React from "react";

const PetAttributeRows = props => {
  const { attributes, animalId } = props;

  return (
    <Table className="table-fixed">
      <TableBody>
        <TableRow key={animalId}>
          <TableHeadCell>Animal Id</TableHeadCell>
          <TableCell>{animalId}</TableCell>
        </TableRow>
        <PetAttributes attributes={attributes} />
      </TableBody>
    </Table>
  );
};

PetAttributeRows.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetAttributeRows;
