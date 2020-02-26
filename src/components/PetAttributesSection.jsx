import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody } from "@baltimorecounty/dotgov-components";
import PetAttributes from "./PetAttributes";

const PetAttributesSection = props => {
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

PetAttributesSection.propTypes = {
  /** List of Attributes to display. */
  attributes: PropTypes.array.isRequired
};

export default PetAttributesSection;
