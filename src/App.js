import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
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
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
