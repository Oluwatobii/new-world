import React from "react";
import "./sass/components/HomePage.scss";


export default function HomePage() {
  return (
    <div className="body" id="path_homepage">
      <header className="header">
        <div className="header__logo-box">
        <a href="/">
          <img
            src={require("../img/logo-1-1.png")}
            alt="logo"
            className="header__logo"
          />
        </a>
        </div>

        <div className="header__text-box">
          <h2 className="primary">Hello, I'm</h2>
          <h1 className="primary--main">
            Oluwatobi A.<strong style={{ color: "#e58e26" }}>Bello</strong>
          </h1>
          <div className="primary--sub">
            <span>
              Web Developer. <br />
              Mech. Engr. <br />
              Car Enthusiast. <br />
              Man Utd Fan. <br />
            </span>
          </div>
          <div>
            <a
              href="#path_aboutme"
              className="btn btn--dark-green btn--animated"
            >
              Come on in
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
