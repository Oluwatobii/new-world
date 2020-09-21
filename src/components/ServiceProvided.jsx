import React from "react";
import "./sass/components/ServiceProvided.scss";

export default function ServiceProvided() {
  return (
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tempora animi, voluptates alias natus pariatur praesentium, iusto,
              aut nisi aspernatur incidunt ut quasi vero ipsam magnam explicabo
              nostrum itaque reprehenderit.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tempora animi, voluptates alias natus pariatur praesentium, iusto,
              aut nisi aspernatur incidunt ut quasi vero ipsam magnam explicabo
              nostrum itaque reprehenderit.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tempora animi, voluptates alias natus pariatur praesentium, iusto,
              aut nisi aspernatur incidunt ut quasi vero ipsam magnam explicabo
              nostrum itaque reprehenderit.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              tempora animi, voluptates alias natus pariatur praesentium, iusto,
              aut nisi aspernatur incidunt ut quasi vero ipsam magnam explicabo
              nostrum itaque reprehenderit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
