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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={PetsList} />
        <Route exact path="/pets/:animalId" component={Pet} />
      </Router>
    </React.Fragment>
  );
}

export default App;
