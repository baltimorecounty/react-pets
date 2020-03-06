import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import React, { useState } from "react";
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
  const filterServiceList = itemUpdated => {
   
    let finalItems = [];
    const activeFilteredSpeciesTypes = itemUpdated.filter(
      item => item.checked === true
    );
    console.log(activeFilteredSpeciesTypes);
    console.log("================");
  //  for ( const item of activeFilteredSpeciesTypes){
    //  console.log(JSON.stringify(item));
    //   var test=  activeFilteredSpeciesTypes.filter( x=>x.type==="species" && x.checked===true)
    //     console.log(JSON.stringify(test));
   // }


    setIsFiltering(true);
    let items = [...PetItems];

    for (const item of items) {
      var attributesItems = item.attributes;
     // console.log(JSON.stringify(attributesItems));
    // if(attributesItems.find(x=>x.value.toLocaleLowerCase()==="dog" && x.value.toLocaleLowerCase()==="male"))
      if(attributesItems.find(x=>x.value.toLocaleLowerCase()==="dog") && attributesItems.find(x=>x.value.toLocaleLowerCase()==="male"))
      {
        console.log('test value');
        finalItems.push(item);
      }
     // for (const filterItems of activeFilteredSpeciesTypes) {
      //  let name = filterItems.name.toLocaleLowerCase();
     // if(attributesItems.find(x=>x.value.toLocaleLowerCase()==="dog") && attributesItems.find(x=>x.value.toLocaleLowerCase()==="male"))
      //  if (
       //   attributesItems.find(x => x.value.toLocaleLowerCase() === `${name}`)
      //  ) {
        //  console.log(JSON.stringify( attributesItems.find(x => x.value.toLocaleLowerCase() === `${name}`)));
      //    finalItems.push(item);
      //  }
    //  }
      setFilteredPets(finalItems);
    }
  //  console.log(finalItems);
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
    (checkedCount === 0 || checkedCount === itemUpdated.length? false: true)
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
              filter and try again"{" "}
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
