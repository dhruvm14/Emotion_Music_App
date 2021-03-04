import React from "react";
import App from "./App";
import HomePage from "./HomePage";
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/app" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
