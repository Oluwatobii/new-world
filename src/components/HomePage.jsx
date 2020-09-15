import React from "react";
import "./HomePage.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
    <div className="slider_area">
      <div className="single_slider  d-flex align-items-center slider_bg_1">
        <div className="shap_pattern d-none d-lg-block">
          <img src="img/about/grid.png" alt="" />

          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="slider_text text-center">
                  <h3>Hello, I'm</h3>
                  <h1>Oluwatobi A. Bello</h1>
                  <span>Car Enthustist. </span>
                  <span>Manchester United Supporter. </span>
                  <span>Web Developer. </span>
                  <span>Mechanical Engineer. </span>
                  <span>Anime watcher. </span>
                  <span>Manga reader. </span>
                </div>
              </div>
            </div>
            <div className="social_links">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHome} />
                  <a href="#0">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#1">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#2">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
