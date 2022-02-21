import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";

import {
  initGA,
  // PageView,
  Event,
} from "./Tracking";

import ReactPixel from "react-facebook-pixel";
// const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init(
  process.env.REACT_APP_META_CODE,
  // advancedMatching,
  options
);

// ReactPixel.pageView(); // For tracking page view
// ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
// ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
// ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
// ReactPixel.trackSingleCustom('PixelId', event, data); // For tracking custom events.

function App() {
  // console.log("META", process.env.REACT_APP_META_CODE);
  // console.log("GOOGLE", process.env.REACT_APP_THING);
  initGA(process.env.REACT_APP_THING);
  ReactPixel.pageView();
  // PageView();
  useEffect(() => {
    ReactPixel.pageView();
  }, []);

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
