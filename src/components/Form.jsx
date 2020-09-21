import React from "react";
import "./sass/Form.scss";

import {
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
  FaPhone,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Form() {
  return (
    <section className="form-section">
      <div className="form-container">
        <div className="contactinfo">
          <div>
            <div className="contactinfo--box">
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span>Montreal, QC. Canada.</span>
                </li>
                <li>
                  <span>
                    <FaEnvelopeOpenText />
                  </span>
                  <span>bellotobi10@gmail.com</span>
                </li>
                <li>
                  <span>
                    <FaPhone />
                  </span>
                  <span>+1(438)-921-2579</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="#1">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#1">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#1">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactform">
          <h2>Send a Message</h2>
          <div className="formbox">
            <div className="inputbox w50">
              <input type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="inputbox w50">
              <input type="text" name="" required />
              <span>Last Name</span>
            </div>
            <div className="inputbox w50">
              <input type="text" name="" required />
              <span>Email Address</span>
            </div>
            <div className="inputbox w50">
              <input type="text" name="" required />
              <span>Moible Number</span>
            </div>
            <div className="inputbox w100">
              <textarea type="text" name="" required />
              <span>Write your message here...</span>
            </div>
            <div className="inputbox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}