import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { Route, HashRouter as Router } from "react-router-dom";

import { Config } from "@baltimorecounty/javascript-utilities";
import Pet from "./pages/Pet";
import PetsList from "./components/PetsList";
import React from "react";

const { setConfig } = Config;

const initialPetsEndpoint = "api/hub/pets/pets";

const testApiRoot = `https://testservices.baltimorecountymd.gov/${initialPetsEndpoint}`;
const prodApiRoot = `https://services.baltimorecountymd.gov/${initialPetsEndpoint}`;

// HACK - the Config utiltiy does not account for beta.
// TODO: This will need to be addressed when we get closer to launch
const localApiRoot =
  window.location.hostname.indexOf("beta") > -1
    ? testApiRoot
    : `//localhost:54727/${initialPetsEndpoint}`;

const configValues = {
  local: {
    apiRoot: localApiRoot,
  },
  development: {
    apiRoot: testApiRoot,
  },
  staging: {
    apiRoot: testApiRoot,
  },
  production: {
    apiRoot: prodApiRoot,
  },
};

setConfig(configValues);

const filters = [
  {
    targetApiField: "status",
    value:
      window.pets.petStatus ||
      console.error("You must provide a pets.petStatus."),
  },
  {
    targetApiField: "workingcat",
    value:
      window.pets.workingCat,
  },
  {
    targetApiField: "recordsPerPage",
    value: 100,
  },
  {
    targetApiField: "petType",
    displayName: "Species",
    options: [
      { value: "dog", label: "Dog" },
      { value: "cat", label: "Cat" },
      { value: "other", label: "Other" },
    ],
  },
  {
    targetApiField: "gender",
    displayName: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "unknown", label: "Unknown" },
    ],
  },
  {
    targetApiField: "weight",
    displayName: "Size",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
];

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route
          exact
          path="/"
          component={(props) => <PetsList filters={filters} {...props} />}
        />
        <Route exact path="/pets/:animalId" component={Pet} />
      </Router>
    </React.Fragment>
  );
}

export default App;
