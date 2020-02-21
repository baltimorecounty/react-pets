import React, { useState } from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import usePets from "../hooks/usePets";
import { PetItems } from "../files/PetsData";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";
import { Alert } from "@baltimorecounty/dotgov-components";

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
        <div className="col-md-3 col-xs-12">
          <CategoriesFilterCollapse
            header="SPECIES"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item=>(item.type==="species"))}
          />
          <CategoriesFilterCollapse
            header="SEX"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item=>(item.type==="sex"))}
          />
         
          <CategoriesFilterCollapse
            header="SIZE"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item=>(item.type==="size"))}
          />
        </div>
        <div className="col-md-9 col-xs-12">
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
        </div>
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default PetsList;
