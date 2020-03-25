import React, { useState } from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";

import CategoriesFilterCollapse from "./CategoriesFilterCollapse";
import usePets from "../hooks/usePets";

const PetsList = () => {
  const [filteredPets, setFilteredPets] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterItems, setFilterItems] = useState([
    { type: "type", name: "Cat", checked: false },
    { type: "type", name: "Dog", checked: false },
    { type: "type", name: "Other", checked: false },
    { type: "sex", name: "Female", checked: false },
    { type: "sex", name: "Male", checked: false },
    { type: "sex", name: "Unknown", checked: false }
  ]);
  //TODO: These codes are only for april demo purpose only, once we have our service these code will be removed.

  const [{ response, isLoading }] = usePets("/hub/pets");

  const { records } = response;

  const attributesItemsCheck = (attributesItems, type, name) => {
    return attributesItems.find(
      x =>
        x.label.toLocaleLowerCase() === `${type}` &&
        x.value.toLocaleLowerCase() === `${name}`
    );
  };

  const attributeLabelValue = (activeFiltered, howManySelected) => {
    let type =
      howManySelected === 1 ? activeFiltered.type.toLocaleLowerCase() : "none";
    let name =
      howManySelected === 1 ? activeFiltered.name.toLocaleLowerCase() : "none";
    return [type, name];
  };

  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const activeFilteredSpeciesTypes = itemUpdated.filter(
      item => item.checked === true && item.type === "type"
    );
    const activeFilteredSexTypes = itemUpdated.filter(
      item => item.checked === true && item.type === "sex"
    );
    let howManySelected = 0;
    let type2 = "none";
    let name2 = "none";
    var returnValues;
    if (activeFilteredSpeciesTypes.length) {
      howManySelected = activeFilteredSexTypes.length;
      returnValues = attributeLabelValue(
        activeFilteredSexTypes[0],
        howManySelected
      );
    } else {
      howManySelected = activeFilteredSpeciesTypes.length;
      returnValues = attributeLabelValue(
        activeFilteredSpeciesTypes[0],
        howManySelected
      );
    }
    type2 = returnValues[0];
    name2 = returnValues[1];

    setIsFiltering(true);
    let items = [...records];
    for (const item of items) {
      var attributesItems = item.attributes;

      for (const item2 of activeFilteredSpeciesTypes.length > 0
        ? activeFilteredSpeciesTypes
        : activeFilteredSexTypes) {
        let type = item2.type.toLocaleLowerCase();
        let name = item2.name.toLocaleLowerCase();
        if (
          attributesItemsCheck(attributesItems, type, name) &&
          (howManySelected !== 1
            ? true
            : attributesItemsCheck(attributesItems, type2, name2))
        ) {
          finalItems.push(item);
        }
      }
    }
    setFilteredPets(finalItems);
  };

  const handlePetFilterChange = changeEvent => {
    setIsFiltering(false);
    const { checked, name } = changeEvent.target;
    const itemUpdated = filterItems.map(item => {
      return item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        ? { ...item, checked: checked }
        : item;
    });
    setFilterItems(itemUpdated);
    const checkedCount = itemUpdated.filter(item => item.checked).length;
    (checkedCount === 0 || checkedCount === itemUpdated.length
    ? false
    : true)
      ? filterServiceList(itemUpdated)
      : setFilteredPets([]);
  };

  const hasFilteredResults = !(isFiltering && filteredPets.length === 0);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3 col-xs-12">
          <CategoriesFilterCollapse
            header="SPECIES"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "type")}
          />
          <CategoriesFilterCollapse
            header="SEX"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "sex")}
          />
        </div>
        {isLoading ? (
          <p>Loading Adoptable Pets...</p>
        ) : (
          <div className="col-md-9 col-xs-12">
            {hasFilteredResults ? (
              <div className="col">
                <FilterList
                  items={filteredPets.length > 0 ? filteredPets : records}
                  renderItem={props => (
                    <div key={props.animalId}>
                      <PetCard {...props} />
                    </div>
                  )}
                />
              </div>
            ) : (
              <p>
                {" "}
                "Sorry, no pets match your filter criteria. Please change your
                filter and try again"
              </p>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PetsList;
