import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import App from "./components/App";
import Manager from "./components/Manager";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/manager"
        render={(props) => (
          <Header>
            <Manager props={props} />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
