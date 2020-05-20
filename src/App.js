import React from "react";
import { Route, Switch } from "react-router-dom";

import DashboardSignIn from "./components/DashboardComponents/SignIn";
import Blog from "./components/BlogComponents";
import Posts from "./components/BlogComponents/Posts";
import Dashboard from "./components/DashboardComponents";

import CreatePosts from "./components/DashboardComponents/CreatePosts";
import EditPosts from "./components/DashboardComponents/EditPosts";
import DeletePosts from "./components/DashboardComponents/DeletePosts";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route path="/post/:id" component={Posts} />
      <Route path="/sign" component={DashboardSignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create" component={CreatePosts} />
      <Route path="/edit" component={EditPosts} />
      <Route path="/delete" component={DeletePosts} />
    </Switch>
  );
}

export default App;
