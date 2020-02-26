import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody } from "@baltimorecounty/dotgov-components";
import PetAttributes from "./PetAttributes";

const PetInfoSection = props => {
  const { attributes } = props;

  return (
    <div>
      <Table>
        <TableBody>
          <PetAttributes attributes={attributes} />
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
