import React from "react";
import "./sass/components/Footer.scss";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer__logo-box">
        <img
          src={require("../img/logo.png")}
          alt="Full logo"
          className="footer__logo"
        />
      </div> */}
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#path_contactme" className="footer__link">
                  <FaEnvelopeOpenText />
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://twitter.com/Darkister_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.linkedin.com/in/oluwatobibello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://github.com/Oluwatobii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://github.com/Oluwatobii"
              className="footer__link--text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oluwatobi A. Bello
            </a>{" "}
            for his portfolio website. Copyright &copy; by Oluwatobi A. Bello.
            You are allowed to use this webpage for both personal and commercial
            use. Of course, a credit to the original author, Oluwatobi A. Bello,
            is highly appreciated! View the source code for this website{" "}
            <a
              href="https://github.com/Oluwatobii/new-world"
              className="footer__link--text"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
