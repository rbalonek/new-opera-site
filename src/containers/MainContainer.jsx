import React from "react";
import { Route, Switch } from "react-router";

import About from "../screens/About/About";
import Engagements from "../screens/Engagements/Engagements";
import Home from "../screens/Home/Home";
import Media from "../screens/Media/Media";
import Gallery from "../screens/Gallery/Gallery";
import Contact from "../screens/Contact/Contact";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route path="/about">
        <About Event={props.Event} />
      </Route>

      <Route path="/engagements">
        <Engagements Event={props.Event} />
      </Route>

      <Route path="/media">
        <Media Event={props.Event} />
      </Route>

      <Route path="/gallery">
        <Gallery Event={props.Event} />
      </Route>

      <Route path="/contact">
        <Contact Event={props.Event} />
      </Route>

      <Route path="/">
        <Home Event={props.Event} />
      </Route>
    </Switch>
  );
}
