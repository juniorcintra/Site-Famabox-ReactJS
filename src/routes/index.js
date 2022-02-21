import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Transferencia from "../pages/Transferencia";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/transferencia" exact component={Transferencia} />
    </Switch>
  );
}
