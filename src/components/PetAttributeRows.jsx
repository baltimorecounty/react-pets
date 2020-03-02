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
  const { attributes, id } = props;

  return (
    <Table>
      <TableBody>
        <TableRow key={id}>
          <TableHeadCell>Animal ID</TableHeadCell>
          <TableCell>{id}</TableCell>
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
