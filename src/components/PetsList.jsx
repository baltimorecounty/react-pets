import FilterList from "./FilterList";
import PetCard from "./PetCard";
import React from "react";
import usePets from "../hooks/usePets";

const PetsList = () => {
  const apiEndpoint="/hub/pets/pets"
  const [{ response, isLoading }] = usePets(apiEndpoint);
  const { records } = response;
  return (
    <React.Fragment>
      <div className="container">
        {isLoading ? (
          <p>Loading Adoptable Pets...</p>
        ) : (
          <>
            <div className="row">
              {records.length > 0 ? (
                <FilterList
                  title="Adoptable Pets"
                  apiEndpoint={apiEndpoint}
                  items={records}
                  renderItem={props => (
                    <div key={props.animalId}>
                      <PetCard {...props} />
                    </div>
                  )}
                />
              ) : (
                "Sorry, no pets match your search criteria. Please change your search term and try again"
              )}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default PetsList;
