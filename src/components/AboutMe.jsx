import React from "react";
import "./sass/components/AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="section-about">
      <div className="about-container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-65">
              <span>About Me</span>
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">Get to know me better...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-2 about-me">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Designing With Passion While Exploring The World.
          </h3>
          <p className="paragraph">
            Over the years I’ve been passionate about different things – both
            professionally and personally. This probably isn't surprising
            considering my background is primarily in areas of mechanical
            engineering, but i’ve always had the curious mind of what web
            development (programming) entails and as a result, i found myself
            further delving into this new world of programming and software
            development.
          </p>
        </div>
        <div className="col-1-of-2">
          <img
            className="placeholder-img"
            alt="text"
            src={require("../img/placeholder.jpg")}
          />
        </div>
      </div>
    </section>
  );
}
