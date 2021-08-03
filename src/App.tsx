import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import StartScreen from "./pages/StartScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
 

        <Switch>
          <Route exact path="/">
            <StartScreen />
          </Route>
          <Route path="/topics">
            <h1>hello from topics</h1>
          </Route>
          <Route path="/hello">
            <h2>hi from hello</h2>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
