import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
} from "@baltimorecounty/dotgov-components";
import { FormatDate } from "../utilities/DateFunctions";
import PetAttributes from "./PetAttributes";
import PropTypes from "prop-types";
import React from "react";

const PetAttributeRows = (props) => {
  const { attributes, animalId, gender, petType, dateAdoptedRedeemed } = props;

  return (
    <Table className="table-fixed">
      <TableBody>
        <TableRow key={animalId}>
          <TableHeadCell>Animal ID</TableHeadCell>
          <TableCell>{animalId}</TableCell>
        </TableRow>
        <TableRow key={petType}>
          <TableHeadCell>Species</TableHeadCell>
          <TableCell>{petType}</TableCell>
        </TableRow>
        <TableRow key={gender}>
          <TableHeadCell>Gender</TableHeadCell>
          <TableCell>{gender}</TableCell>
        </TableRow>
        <PetAttributes attributes={attributes} />
        <TableRow key={dateAdoptedRedeemed}>
          <TableHeadCell>Shelter Arrival Date</TableHeadCell>
          <TableCell>{FormatDate(dateAdoptedRedeemed)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

PetAttributeRows.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired,
};

export default PetAttributeRows;
