import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";

import {
  initGA,
  // PageView,
  Event,
} from "./Tracking";

function App() {
  initGA(process.env.REACT_APP_THING);
  // PageView();
  return (
    <Layout Event={Event}>
      <Switch>
        <Route path="/">
          <MainContainer Event={Event} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
