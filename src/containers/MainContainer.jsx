import React from "react";
import { Route, Switch } from "react-router";

import About from "../screens/About/About";
import Engagements from "../screens/Engagements/Engagements";
// import Home from "../screens/Home/Home";
import Media from "../screens/Media/Media";
import Gallery from "../screens/Gallery/Gallery";
import Contact from "../screens/Contact/Contact";
import NewHome from "../screens/Home/NewHome/NewHome";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/engagements">
        <Engagements/>
      </Route>

      <Route path="/media">
        <Media />
      </Route>

      <Route path="/gallery">
        <Gallery />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/">
        <NewHome />
      </Route>
    </Switch>
  );
}
