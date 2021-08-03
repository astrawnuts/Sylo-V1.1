import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import StartScreen from "./pages/StartScreen/StartScreen";
import Contacts from "./pages/Contacts/Contacts";
import NewContacts from "./pages/NewContact/NewContact";
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
          <Route path="/contacts">
           <Contacts />
          </Route>
          <Route path="/newcontact">
          <NewContacts />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
