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
          <p>Loading Baltimore County News...</p>
        ) : (
          <>
            <div className="row">
              {petItems.length > 0 ? (
                <FilterList
                  title="Baltimore County Newsroom"
                  apiEndpoint="/hub/pets"
                  items={petItems}
                  renderItem={props => (
                    <div key={props.animalId}>
                      <PetCard {...props} />
                    </div>
                  )}
                />
              ) : (
                "Sorry, no news matches your search criteria. Please change your search term and try again"
              )}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default PetsList;
