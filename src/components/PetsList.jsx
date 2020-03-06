import React, { useState } from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";

const PetsList = () => {
  const [filteredPets, setFilteredPets] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterItems, setFilterItems] = useState([
    { type: "species", name: "Cat", checked: false },
    { type: "species", name: "Dog", checked: false },
    { type: "species", name: "Other", checked: false },
    { type: "sex", name: "Female", checked: false },
    { type: "sex", name: "Male", checked: false }
  ]);
  //TODO: These codes are only for april demo purpose only, once we have our service these code will be removed.

  const attributesItemsCheck = (attributesItems, type, name) => {
    return attributesItems.find(
      x =>
        x.label.toLocaleLowerCase() === `${type}` &&
        x.value.toLocaleLowerCase() === `${name}`
    );
  };

  const sexTypeCheck = (
    attributesItems,
    howManySexTypeSelected,
    activeFilteredSexTypes
  ) => {
    return howManySexTypeSelected === 2
      ? true
      : howManySexTypeSelected === 1
      ? attributesItems.find(
          x =>
            x.label.toLocaleLowerCase() ===
              activeFilteredSexTypes.type.toLocaleLowerCase() &&
            x.value.toLocaleLowerCase() ===
              activeFilteredSexTypes.name.toLocaleLowerCase()
        )
      : false;
  };

  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const activeFilteredSpeciesTypes = itemUpdated.filter(
      item => item.checked === true && item.type === "species"
    );
    const activeFilteredSexTypes = itemUpdated.filter(
      item => item.checked === true && item.type === "sex"
    );
    //===================================================
    let checkedLength = activeFilteredSexTypes.length;
    let howManySexTypeSelected =
      checkedLength === 2 ? 2 : checkedLength === 0 ? 0 : 1;

    //==================================================
    setIsFiltering(true);
    let items = [...PetItems];

    for (const item of items) {
      var attributesItems = item.attributes;
      for (const filterSpeciesItem of activeFilteredSpeciesTypes) {
        let type = filterSpeciesItem.type.toLocaleLowerCase();
        let name = filterSpeciesItem.name.toLocaleLowerCase();
     
        if (
          attributesItemsCheck(attributesItems, type, name) &&
          sexTypeCheck(
            attributesItems,
            howManySexTypeSelected,
            activeFilteredSexTypes[0]
          ) ) {
     
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
            items={filterItems.filter(item => item.type === "species")}
          />
          <CategoriesFilterCollapse
            header="SEX"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "sex")}
          />
        </div>
        <div className="col-md-9 col-xs-12">
          {hasFilteredResults ? (
            <div className="col">
              <FilterList
                items={filteredPets.length > 0 ? filteredPets : PetItems}
                renderItem={props => (
                  <div key={props.id}>
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
      </div>
    </React.Fragment>
  );
};

export default PetsList;
