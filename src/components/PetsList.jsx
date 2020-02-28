import React, { useState } from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";

const PetsList = () => {
  const [filterItems, setFilterItems] = useState([
    { type: "species", name: "Cat", checked: true },
    { type: "species", name: "Dog", checked: true },
    { type: "species", name: "Other", checked: true },
    { type: "sex", name: "Female", checked: true },
    { type: "sex", name: "Male", checked: true },
    { type: "size", name: "Small", checked: true },
    { type: "size", name: "Medium", checked: true },
    { type: "size", name: "Large", checked: true }
  ]);
  const handlePetFilterChange = changeEvent => {
    console.log("filter--check");
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3 col-xs-12">
          <CategoriesFilterCollapse
            header="SPECIES"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "species")}
          />
          <CategoriesFilterCollapse
            header="SEX"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "sex")}
          />

          <CategoriesFilterCollapse
            header="SIZE"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "size")}
          />
        </div>
        <div className="col-md-9 col-xs-12">
          <div className="row">
            <div className="col">
              <FilterList
                items={PetItems}
                renderItem={props => <PetCard key={props.id} {...props} />}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
