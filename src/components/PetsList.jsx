import FilterList from "./FilterList";
import PetCard from "./PetCard";
import { PetItems } from "../files/PetsData";
import React from "react";
import usePets from "../hooks/usePets";

const PetsList = () => {
  const [{ petsItems = [], isLoading }] = usePets();
  console.log("isLoading:" + isLoading);
   console.log("petItems:" + JSON.stringify(petsItems));
   const filters = [
    {
      targetApiField: "category.value",
      displayName: "Category",
      options: [
        { value: "stories", label: "Stories" },
        { value: "releases", label: "News Releases" }
      ]
    },
    {
      targetApiField: "author",
      displayName: "Author",
      options: [
        { value: "jeff-tompkins", label: "Jeff Thompkins" },
        { value: "marty-powell", label: "The Man" }
      ]
    },
    {
      targetApiField: "title",
      displayName: "News Title",
      options: [
        { value: "farts", label: "This is a really important news story" },
        { value: "county-executive", label: "The Man" }
      ]
    }
  ];

  return (
    <React.Fragment>
      <div className="container">
        {isLoading ? (
          <p>Loading Baltimore County News...</p>
        ) : (
          <>
            <div className="row">
              {petsItems.length > 0 ? (
                <FilterList
                title="Baltimore County Newsroom"
                apiEndpoint="/hub/pets"
                filters={filters}
                  items={petsItems}
                  renderItem={props => (
                    <div key={props.id}>
                      <PetCard {...props} />
                    </div>
                  )}
                />
              ) : (
                "Sorry, no news matches your search criteria. Please change your search term and try again"
              )}
            </div>
          </>
        )}
      </div>
      );
    </React.Fragment>
  );
};

export default PetsList;
