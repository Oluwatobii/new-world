import React from "react";
import "./ServiceProvided.scss";
import { FaLaptopCode, FaUserFriends } from "react-icons/fa";

export default function ServiceProvided() {
  return (
    <div className="service_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-65">
              <span>Service Provided</span>
              <h3>Why Hire Me?</h3>
            </div>
          </div>
        </div>
      </div>
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4 feature-card">
            <div className="feature-box">
              <div className="feature-box__icon icon-basic-world">
                <FaLaptopCode />
              </div>
              <h3 className="heading-tertiary">Full-Stack Developer</h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-1-of-4 feature-card">
            <div className="feature-box">
              <div className="feature-box__icon icon-basic-world">
                <FaLaptopCode />
              </div>
              <h3 className="heading-tertiary">Mechanical Engineering</h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-1-of-4 feature-card">
            <div className="feature-box">
              <div className="feature-box__icon icon-basic-world">
                <FaLaptopCode />
              </div>
              <h3 className="heading-tertiary">Place-Holder</h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-1-of-4 feature-card">
            <div className="feature-box">
              <div className="feature-box__icon icon-basic-world">
                <FaUserFriends />
              </div>
              <h3 className="heading-tertiary">Collaborative Development</h3>
              <p className="feature-box__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
