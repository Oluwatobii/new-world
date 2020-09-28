import React from "react";
import "./sass/components/Form.scss";

import emailjs from "emailjs-com";

import {
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
  FaPhone,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_twv6ynv",
        e.target,
        "user_rZ1CcETiRwZopb1zTr2Bq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="contact-me">
        <h2 className="contact-me contact-me--text">Get in touch</h2>
      </div>
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
                  <a
                    href="https://twitter.com/Darkister_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/oluwatobibello/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Oluwatobii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactform">
            <form onSubmit={sendEmail}>
              <h2>Send a Message</h2>
              <div className="formbox">
                <div className="inputbox w50">
                  <input type="text" name="firstName" required />
                  <span>First Name</span>
                </div>
                <div className="inputbox w50">
                  <input type="text" name="lasttName" required />
                  <span>Last Name</span>
                </div>
                <div className="inputbox w50">
                  <input type="text" name="emailAddress" required />
                  <span>Email Address</span>
                </div>
                <div className="inputbox w50">
                  <input type="text" name="mobileNumber" required />
                  <span>Moible No.</span>
                </div>
                <div className="inputbox w100">
                  <textarea type="text" name="message" required />
                  <span>Write your message here...</span>
                </div>
                <div className="inputbox w100">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn--dark-blue"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
