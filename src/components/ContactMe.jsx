import React from "react";
import Form from "./Form";
import "./sass/ContactMe.scss";

export default function ContactMe() {
  return (
    <div className="main-container">
      <div className="banner-text">
        <Form />
      </div>
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
