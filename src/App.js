import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import ServiceProvided from "./components/ServiceProvided";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <ServiceProvided />
      <Portfolio />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
