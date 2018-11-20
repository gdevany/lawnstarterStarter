import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import "./App.css";
import Heading from "./views/Heading";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Heading />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
