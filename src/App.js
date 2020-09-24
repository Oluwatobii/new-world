import React from "react";
import "./App.css";

import Navigation from "./components/NavBar/Navigation";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import ServiceProvided from "./components/ServiceProvided";
import DownloadResume from "./components/DownloadResume";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <AboutMe />
      <ServiceProvided />
      <DownloadResume />
      <Portfolio />
      <ContactMe />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
