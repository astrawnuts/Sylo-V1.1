import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import StartScreen from "./pages/StartScreen";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <img src="landingImage.png" alt="" />
      <StartScreen />
    </div>
  );
}

export default App;
