import React from "react";
import "./sass/components/HomePage.scss";
/*
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
*/

export default function HomePage() {
  return (
    <div className="body" id="path_homepage">
      <header className="header">
        <div className="header__logo-box">
          <img
            src={require("../img/logo1.png")}
            alt="logo"
            className="header__logo"
          />
        </div>

        <div className="header__text-box">
          <h2 className="primary">Hello, I'm</h2>
          <h1 className="primary--main">
            Oluwatobi A.<strong style={{ color: "#eeb238ff" }}>Bello</strong>
          </h1>
          <div className="primary--sub">
            <span>
              Web Developer. <br />
              Mechanical Engineer. <br />
              Car Enthustist. <br />
              Manchester United Supporter. <br />
            </span>
          </div>
          <div>
            <a href="#0" className="btn btn--dark-green btn--animated">
              Learn More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
