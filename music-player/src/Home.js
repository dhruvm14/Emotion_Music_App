import React, { useState } from "react";
import App from "./App";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Protected from "./Protected"
function Home() {
  const [i, si] = useState(false);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/app" exact component={() => i ? <App /> : <Protected/>} />
          <Route
            path="/login"
            exact
            component={() => <Login i={i} si={si} />}
          />
          <Route
            path="/register"
            exact
            component={() => <Register i={i} si={si} />}
          />
          <Route component={() => <NotFound/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
