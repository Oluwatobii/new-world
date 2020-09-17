import React from "react";
import "./HomePage.css";
/*
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
*/

export default function HomePage() {
  return (
    <div className="body">
      <header className="header">
        <div className="logo-box">
          <img src="../img/logo.jpg" alt="logo" className="logo" />
        </div>

        <div className="text-box">
          <h2 className="primary">Hello, I'm</h2>
          <h1 className="primary-main">
            Oluwatobi A.<strong style={{ color: "#eeb238ff" }}>Bello</strong>
          </h1>
          <div className="primary-sub">
            <span>
              Web Developer. <br />
              Mechanical Engineer. <br />
              Car Enthustist. <br />
              Manchester United Supporter. <br />
              Anime watcher. <br />
              &amp; Manga reader.
            </span>
          </div>
          <div>
            <a href="#0" className="btn btn-white btn-animated">
              Learn More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
