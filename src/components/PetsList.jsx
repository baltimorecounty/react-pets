import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import React from "react";

const PetsList = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-9 col-xs-12">
          {PetItems ? (
            <div className="col">
              <FilterList
                items={PetItems}
                renderItem={props => (
                  <div key={props.id}>
                    <PetCard {...props} />
                  </div>
                )}
              />
            </div>
          ) : (
            <p>
              "Sorry, no pets match your filter criteria. Please change your
              filter and try again"
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
