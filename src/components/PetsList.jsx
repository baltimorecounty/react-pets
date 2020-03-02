import React, { useState } from "react";
import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";
import PetAttributes from "./PetAttributes";

const PetsList = () => {
  const petsItems = ([] = PetItems);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterItems, setFilterItems] = useState([
    { type: "species", name: "Cat", checked: true },
    { type: "species", name: "Dog", checked: true },
    { type: "species", name: "Other", checked: true },
    { type: "sex", name: "Female", checked: true },
    { type: "sex", name: "Male", checked: true }
  ]);

  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const uncheckedItem = itemUpdated.filter(item => item.checked === false);
    setIsFiltering(true);
    let items = [...petsItems];
    // items = items.filter(
    //   item => item.label.toLocaleLowerCase() === "species"
    // );
    //console.log(uncheckedItem);
    // const test =  items.filter(
    //   i => i.attributes.value
    // )
    // console.log(test);
    let attributes =items.filter(i =>i.attributes);
    console.log(attributes);
    let filterAttributes = attributes.filter(j => j.id ==="ACIMP-2019-061111");
    filterAttributes= filterAttributes.find(element =>element.value ==="Other");
    
    console.log(filterAttributes);
    for (var i  in attributes){
      var test =attributes[i].attributes;
    //  console.log(test);
      let filterAttributes = test.filter(j => j.id ==="ACIMP-2019-061111");
     // console.log(filterAttributes);
     // console.log(attributes[i]);
    }
  
   // for (var key in uncheckedItem) {
  //    var items2;
   //   const { name } = uncheckedItem[key];
  // //    console.log(name);
   //   for (var key2 in items) {
    //    const { attributes } = items[key2];
        // console.log(items[key2].attributes);
        //  finalItems.push.apply(
        //   finalItems, items.filter(
        //   i => i[key2].toLocaleLowerCase() === name.toLocaleLowerCase()
        //   )
        // );
      // console.log(finalItems);
     // }
      //  console.log(petList);
      //for (var key3 in petList){
      //   const { PetAttributes } = petList[key3];
      //console.log(PetAttributes);
      // }
      // items2 = items.filter(
      //   i =>
      //     i.attributes.toLocaleLowerCase() ===
      //     name.toLocaleLowerCase()
      // );
      //  console.log(items2);
      // }
      // finalItems.push.apply(
      //   finalItems,
      //   items2.filter(
      //     i =>
      //       i.attributes[key2].value.toLocaleLowerCase() ===
      //       name.toLocaleLowerCase()
      //   )
      // );
 //   }
  //  setFilteredItems(finalItems);
    // console.log(finalItems);
  };

  const handlePetFilterChange = changeEvent => {
    setIsFiltering(false);
    const { checked, name } = changeEvent.target;
    const itemUpdated = filterItems.map(item => {
      if (item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return { ...item, checked: checked };
      return item;
    });
    //  console.log(itemUpdated);
    setFilterItems(itemUpdated);
    const checkedCount = itemUpdated.filter(item => item.checked).length;
    const isTrue =
      checkedCount === 0 || checkedCount === itemUpdated.length ? false : true;
    isTrue ? filterServiceList(itemUpdated) : setFilteredItems([]);
  };
  //console.log(filteredItems);
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
          <CategoriesFilterCollapse
            header="SEX"
            id="Popular-filter"
            onChange={handlePetFilterChange}
            items={filterItems.filter(item => item.type === "sex")}
          />
        </div>
        <div className="col-md-9 col-xs-12">
          {/* <div className="row">
            <div className="col">
              <FilterList
                items={petsItems}
                renderItem={props => <PetCard key={props.id} {...props} />}
              />
            </div>
          </div> */}
          {hasFilteredResults ? (
            <div className="row">
              <FilterList
                items={filteredItems.length > 0 ? filteredItems : petsItems}
                renderItem={props => (
                  <div key={props.id}>
                    <PetCard {...props} />
                  </div>
                )}
              />
            </div>
          ) : (
            "Sorry, no news matches your search criteria. Please change your search term and try again"
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
