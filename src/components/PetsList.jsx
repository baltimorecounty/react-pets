import FilterList from "./FilterList";
import PetCard from "./PetCard";
import React from "react";
import usePets from "../hooks/usePets";

const PetsList = () => {
  const [{ petItems = [], isLoading }] = usePets("/hub/pets");

  return (
    <React.Fragment>
      <div className="container">
        {isLoading ? (
          <p>Loading Adoptable Pets...</p>
        ) : (
          <>
            <div className="row">
              {petItems.length > 0 ? (
                <FilterList
                  title="Baltimore County Adoptable Pets"
                  apiEndpoint="/hub/pets"
                  items={petItems}
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
