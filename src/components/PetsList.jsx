import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import React from "react";

const PetsList = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <FilterList
              items={PetItems}
              renderItem={props => <PetCard key={props.id} {...props} />}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
