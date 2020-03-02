import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell
} from "@baltimorecounty/dotgov-components";
import PetAttributes from "./PetAttributes";

const PetAttributesSection = props => {
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

PetAttributesSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetAttributesSection;
