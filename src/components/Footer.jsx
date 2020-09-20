import React from "react";
import "./Footer.scss";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={require("../img/logo1.png")}
          alt="Full logo"
          className="footer__logo"
        />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  <FaEnvelopeOpenText />
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  <FaTwitter />
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="footer__item">
                <a href="#1" className="footer__link">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#1" className="footer__link--text">
              Oluwatobi A. Bello
            </a>{" "}
            for his portfolio website. Copyright &copy; by Oluwatobi A. Bello.
            You are 100% allowed to use this webpage for both personal and
            commercial use. A credit to the original author, Oluwatobi A. Bello,
            is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
