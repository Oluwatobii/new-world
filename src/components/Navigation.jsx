import React from "react";
import "./sass/Navigation.scss";

export default function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#1" className="navigation__link">
              Home Page
            </a>
          </li>
          <li className="navigation__item">
            <a href="#2" className="navigation__link">
              Competencies
            </a>
          </li>
          <li className="navigation__item">
            <a href="#3" className="navigation__link">
              Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="#4" className="navigation__link">
              About Me
            </a>
          </li>
          <li className="navigation__item">
            <a href="#5" className="navigation__link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
