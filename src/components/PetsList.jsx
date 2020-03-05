import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import React, { useState } from "react";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";

const PetsList = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterItems, setFilterItems] = useState([
    { type: "species", name: "Cat", checked: true },
    { type: "species", name: "Dog", checked: true },
    { type: "species", name: "Other", checked: true }
  ]);
  //TODO: These codes are only for april demo purpose only, once we have our service these code will be removed.
  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const checkedspeciesType = itemUpdated.filter(
      item => item.checked === true && item.type === "species"
    );
    setIsFiltering(true);
    let items = [...PetItems];
    let attributes = items.filter(i => i.attributes);
    for (var i in attributes) {
      var attributesItems = attributes[i].attributes;
      for (var j in checkedspeciesType) {
        let type = checkedspeciesType[j].type.toLocaleLowerCase();
        let name = checkedspeciesType[j].name.toLocaleLowerCase();
        if (
          attributesItems.find(
            x =>
              x.label.toLocaleLowerCase() === `${type}` &&
              x.value.toLocaleLowerCase() === `${name}`
          )
        ) {
          finalItems.push(attributes[i]);
        }
      }
      setFilteredItems(finalItems);
    }
  };

  const handlePetFilterChange = changeEvent => {
    setIsFiltering(false);
    const { checked, name } = changeEvent.target;
    const itemUpdated = filterItems.map(item => {
      if (item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return { ...item, checked: checked };
      return item;
    });
    setFilterItems(itemUpdated);
    const checkedCount = itemUpdated.filter(item => item.checked).length;
    const isTrue =
      checkedCount === 0 || checkedCount === itemUpdated.length ? false : true;
    isTrue ? filterServiceList(itemUpdated) : setFilteredItems([]);
  };
  const hasFilteredResults = !(isFiltering && filteredItems.length === 0);

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
        </div>
        <div className="col-md-9 col-xs-12">
          {hasFilteredResults ? (
            <div className="col">
              <FilterList
                items={filteredItems.length > 0 ? filteredItems : PetItems}
                renderItem={props => (
                  <div key={props.id}>
                    <PetCard {...props} />
                  </div>
                )}
              />
            </div>
          ) : (
            "Sorry, no pets match your search criteria. Please change your search term and try again"
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
