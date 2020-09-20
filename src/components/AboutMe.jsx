import React from "react";
import "./sass/AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About Me</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Designing With Passion While Exploring The World.
          </h3>
          <p className="paragraph">
            Over the years I’ve been passionate about different things – both
            professionally and personally. This probably isn't surprising
            considering my background is primarily in areas of mechanical
            engineering, but i’ve always had the curious mind of what web
            development (programming) entails and as a result, i found myself
            learning javascript further delve into this new world of programming
            and software development.
          </p>

          <a href="#1" className="btn-text">
            Download Resume &darr;
          </a>
        </div>
        <div className="col-1-of-2"></div>
      </div>
      <div className="brief-info">
        <section className="card-aboutme-list">
          <article className="card-aboutme">
            <header className="card-aboutme-header">
              <img
                className="card-aboutme-pic"
                alt=""
                src={require("../img/logo1.png")}
              />
            </header>
            <div className="info">
              <p>0+</p>
              <h2>Total Projects</h2>
            </div>
          </article>
          <article className="card-aboutme">
            <header className="card-aboutme-header">
              <img
                className="card-aboutme-pic"
                alt=""
                src={require("../img/logo1.png")}
              />
            </header>
            <div className="info">
              <p>0+</p>
              <h2>On-Going Projects</h2>
            </div>
          </article>
          <article className="card-aboutme">
            <header className="card-aboutme-header">
              <img
                className="card-aboutme-pic"
                alt=""
                src={require("../img/logo1.png")}
              />
            </header>
            <div className="info">
              <p>0+</p>
              <h2>Somn Else</h2>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
