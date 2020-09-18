import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import ServiceProvided from "./components/ServiceProvided";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ServiceProvided />
      <AboutMe />
    </div>
  );
}

export default App;
