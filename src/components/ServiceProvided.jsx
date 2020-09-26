import React from "react";
import "./sass/components/ServiceProvided.scss";

export default function ServiceProvided() {
  return (
    <div className="service-body" id="path_competencies">
      <div className="service_area">
        <div className="main-container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-65">
                <span>Service Provided</span>
                <h3>Why Hire Me?</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <section className="card">
            <div className="imgBx">
              <img
                className="imgBx--img"
                alt="text"
                src={require("../img/icons8-web-design-100.png")}
              />
              <h2>Full-Stack Developer</h2>
            </div>
            <div className="content">
              <p>
                I develop for the web, working with various stack technologies
                such as; REact, Node, MongoDB, PostgreSQL, Ruby on Rails, and
                more. This site is built on React!
              </p>
            </div>
          </section>
          <section className="card">
            <div className="imgBx">
              <img
                className="imgBx--img"
                alt="text"
                src={require("../img/icons8-engineering-100.png")}
              />
              <h2>Mechanical Engineer</h2>{" "}
            </div>
            <div className="content">
              <p>
                Master's in Mechanical Engineering from Concordia University.
                Designing that internal combustion engine won't be a problem.
              </p>
            </div>
          </section>
          <section className="card">
            <div className="imgBx">
              <img
                className="imgBx--img"
                alt="text"
                src={require("../img/icons8-design-100.png")}
              />
              <h2>CAD Designer</h2>{" "}
            </div>
            <div className="content">
              <p>
                I draw cool 2D/3D CAD designs. Should you want to join the
                Avengers and be the new iron-man, I'll help you with designing
                the Iron Man suit.
              </p>
            </div>
          </section>
          <section className="card">
            <div className="imgBx">
              <img
                className="imgBx--img"
                alt="text"
                src={require("../img/icons8-crowd-100.png")}
              />
              <h2>Collaborative Development</h2>
            </div>
            <div className="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi tempora animi, voluptates alias natus pariatur
                praesentium, iusto.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
