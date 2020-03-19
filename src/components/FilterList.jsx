import React from "react";
import PropTypes from "prop-types";
import usePets from "../hooks/usePets";
import { Alert } from "@baltimorecounty/dotgov-components";

const FilterList = ({
  title = "",
  as: As = React.Fragment,
  items = [],
  renderItem = props => <As {...props} />,
  filters = [],
  apiEndpoint,
  ...props
}) => {
  const [{ hasError, petItems = [], isLoading }] = usePets(apiEndpoint);

  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of {title}. Please try again in a couple
          of minutes.
        </p>
      </Alert>
    );
  }

  return (
    <>
      <div className="row filter-list">
        {isLoading ? (
          <p>Loading {title}...</p>
        ) : (
          <>
            <div className="col-9">
              <As {...props}>{petItems.map(renderItem)}</As>
            </div>
          </>
        )}
      </div>
    </>
  );
};

FilterList.propTypes = {
  /** render the components container as this type of thing, can be another component or a string if it's a basic html element */
  as: PropTypes.any,
  /** list of data items to display */
  items: PropTypes.array,
  /** function that renders a component passed through*/
  renderItem: PropTypes.func.isRequired
};

export default FilterList;
