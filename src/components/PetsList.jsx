import React from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import usePets from "../hooks/usePets";
import { PetItems } from "../files/PetsData";
import { Alert } from "@baltimorecounty/dotgov-components";

const PetsList = () => {
  //const [{ hasError, isLoading }] = usePets();

  // if (hasError) {
  //   return (
  //     <Alert className="status" type="error">
  //       <p>
  //         Unable to retrieve the list of Baltimore County adoptable pets. Please
  //         try again in a couple of minutes.
  //       </p>
  //     </Alert>
  //   );
  // }

  return (
    <React.Fragment>
      {/* {isLoading ? (
        <p>Loading Baltimore County Adoptable Pets...</p>
      ) : ( */}
      <div className="row">
        <FilterList
          items={PetItems}
          renderItem={props => (
            <div className="d-flex col-12" key={props.id}>
              <PetCard {...props} />
            </div>
          )}
        />
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default PetsList;
