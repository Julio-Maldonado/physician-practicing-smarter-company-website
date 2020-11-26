import React from "react";

import { Route, Switch } from "react-router-dom";

// import Home from "./Home";
import Home from "./Home";
// import Resources from "./Resources";
// import TrueHome from "./TrueHome";

export default () => {
  return (
    <Switch>
      <Route
        path="/home"
        component={Home}
      />
      {/* <Route
        exact
        path="/services"
        component={Services}
      /> */}
      {/* <Route
        exact
        path="/services"
        component={Services}
      /> */}
      <Route
        path="*"
        component={Home}
      />
      <Route
        component={Home}
      />
      {/* <Route
        exact
        path="/resources"
        component={Resources}
      />
      <Route
        path="/cameron"
        render={props => <Home {...props} county={"Cameron"} />}
      />
      <Route
        path="/hidalgo"
        render={props => <Home {...props} county={"Hidalgo"} />}
      />
      <Route
        path="/starr"
        render={props => <Home {...props} county={"Starr"} />}
      />
      <Route
        path="/willacy"
        render={props => <Home {...props} county={"Willacy"} />}
      />
      <Route
        path="/home"
        component={TrueHome}
      />
      <Route
        path="*"
        component={TrueHome}
      />
      <Route
        component={TrueHome}
      /> */}
    </Switch>
  );
};
