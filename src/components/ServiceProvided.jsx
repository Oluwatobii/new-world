import React from "react";
import "./sass/components/ServiceProvided.scss";

export default function ServiceProvided() {
  return (
    <body classname="service-body">
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
                src={require("../img/web-dev.jpg")}
              />
            </div>
            <div className="content">
              <h2>Full-Stack Developer</h2>
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
                src={require("../img/mech-eng.jpg")}
              />
            </div>
            <div className="content">
              <h2>Mechanical Engineer</h2>
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
                src={require("../img/cad-des.jpg")}
              />
            </div>
            <div className="content">
              <h2>CAD Designer</h2>
              <p>
                I draw cool 2D/3D CAD designs, Best believe i can design for you
                the Iron Man's helment, incase you want to join the Avengers.
              </p>
            </div>
          </section>
          <section className="card">
            <div className="imgBx">
              <img
                className="imgBx--img"
                alt="text"
                src={require("../img/colab-dev.jpg")}
              />
            </div>
            <div className="content">
              <h2>Collaborative Development</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi tempora animi, voluptates alias natus pariatur
                praesentium, iusto.
              </p>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}
