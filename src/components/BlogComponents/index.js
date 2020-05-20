import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import Posts from "./Posts";

export default function Blog() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/post/:id" component={Posts} />
    </Switch>
  );
}
