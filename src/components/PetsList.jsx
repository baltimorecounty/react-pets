import React from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";

const PetsList = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
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
