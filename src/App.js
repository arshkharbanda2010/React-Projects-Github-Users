import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route exact={true} path="/login">
          <Login />
        </Route>
        <Route exact={true} path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
