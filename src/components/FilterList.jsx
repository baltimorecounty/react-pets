import React, { useState } from "react";
import PropTypes from "prop-types";
import usePets from "../hooks/usePets";
import { Button, Alert } from "@baltimorecounty/dotgov-components";
import FilterCollapse from "./CategoriesFilterCollapse";
const FilterList = ({
  title = "",
  as: As = React.Fragment,
  items = [],
  renderItem = props => <As {...props} />,
  filters = [],
  apiEndpoint,
  ...props
}) => {
  console.log('here');
  console.log(apiEndpoint);
  const [
    {
      hasError,
      petsItems = [],
      isLoading,
      loadMoreEndPoint,
      //newsRoomTotalRecords,
      executeLoadMore,
      
    },
  //  {  setPetsEndPoint,setPetsFilters,setExecuteLoadMore }
  ] = usePets(apiEndpoint);
 
  const [activeFilters, setActiveFilters] = useState({});
  // if (hasError) {
  //   return (
  //     <Alert className="status" type="error">
  //       <p>
  //         Unable to retrieve the list of {title}. Please try again in a couple
  //         of minutes.
  //       </p>
  //     </Alert>
  //   );
  // }

  return (
    <>
      <div className="row filter-list">
        {isLoading ? (
          <p>Loading {title}...</p>
        ) : (
          <>
          <div className="col-3">
              {filters.map(filter => {
                return (
                  <FilterCollapse
                    header={filter.displayName}
                    id={filter.targetApiField.toLowerCase()}
                  //  onChange={handleFilterChange}
                    items={filter.options}
                  />
                );
              })}
            </div>
            <div className="col-9">
           
              <As {...props}>{petsItems.map(renderItem)}</As>
      
>
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
