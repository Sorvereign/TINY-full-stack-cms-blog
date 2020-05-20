import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CreatePosts from "./CreatePosts";
import EditPosts from "./EditPosts";
import DeletePosts from "./DeletePosts";

export default function Dashboard() {
  return (
    <Switch>
      <Route path="/dashboard" component={HomePage} />
      <Route path="/create" component={CreatePosts} />
      <Route path="/edit" component={EditPosts} />
      <Route path="/delete" component={DeletePosts} />
    </Switch>
  );
}
