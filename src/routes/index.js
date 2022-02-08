import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Store from "../pages/store";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
