import React from "react";
import "./sass/components/Emoji.scss";

// import $ from "jquery";

export default function Emoji() {
  document.querySelector("body").addEventListener("mousemove", eyeball);

  function eyeball() {
    const eye = document.querySelectorAll(".eye");

    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      let radian = Math.atan2(
        <event className="pageX"></event> - x,
        <event className="pageY"></event> - y
      );
      let rot = radian * (180 / Math.PI) * -1 + 270;

      eye.style.transform = "rotate(" + rot + "deg)";
    });
  }
  return (
    <body className="emoji-body">
      <div className="face">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
    </body>
  );
}
