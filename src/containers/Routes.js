import React from "react";

import { Route, Switch } from "react-router-dom";

// import Home from "./Home";
import Home from "./Home";
import Services from "./Services";
import Reports from "./Reports";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PPE from "./PPE";
// import TrueHome from "./TrueHome";

export default () => {
  return (
    <Switch>
      <Route
        path="/home"
        component={Home}
      />
      <Route
        exact
        path="/services"
        component={Services}
      />
      <Route
        exact
        path="/reports"
        component={Reports}
      />
      <Route
        exact
        path="/aboutus"
        component={AboutUs}
      />
      <Route
        exact
        path="/contactus"
        component={ContactUs}
      />
      <Route
        exact
        path="/ppe"
        component={PPE}
      />
      <Route
        path="*"
        component={Home}
      />
      <Route
        component={Home}
      />
    </Switch>
  );
};
