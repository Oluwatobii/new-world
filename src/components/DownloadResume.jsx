import React from "react";
import "./sass/components/DownloadResume.scss";

export default function DownloadResume() {
  return (
    <div className="resume-body" id="path_resume">
      <header className="resume-header">
        <div className="header__text-box">
          <h1 className="resume-primary--main">Download My Resume!</h1>

          <div className="resume-btn">
            <a href="#1" className="btn btn--blue">
              Download Resume &darr;
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
