import React from "react";
import PortfolioPopUp from "./PortfolioPopUp";
import "./sass/components/Portfolio.scss";

export default function Portfolio() {
  return (
    <div id="path_portfolio">
      <section className="section-portfolio" id="section-portfolio">
        <div className="u-center-text u-margin-bottom-big">
          <h3 className="section_title">Portfolio</h3>
          <h2 className="heading-secondary">
            Some of the projects i've done here...
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Scheduler
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    A React application that allows users to book and cancel
                    interviews on selected days of the week.
                  </p>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__stack-box">
                    <p className="card__stack-only">Stack</p>
                    <p className="card__stack-value">PERN</p>
                  </div>
                  <a href="#popup1" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Tutorama
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    The Tutorama App makes it easy for students to instantly
                    connect with expert tutors for in-person lessons
                  </p>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__stack-box">
                    <p className="card__stack-only">Stack</p>
                    <p className="card__stack-value">PERN</p>
                  </div>
                  <a href="#popup2" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    QuizApp
                  </span>
                </h4>
                <div className="card__details">
                  <p>
                    An app that lets you create quizzes and share them between
                    friends. The creator of the quiz can view and share all the
                    results at the end of the quiz.
                  </p>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__stack-box">
                    <p className="card__stack-only">Stack</p>
                    <p className="card__stack-value card__stack-value--value-3">
                      Vanila JavaScript (EJS) + PostgreSQL
                    </p>
                  </div>
                  <a href="#popup3" className="btn btn--white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="u-center-text u-margin-top-huge">
          <a href="#1" className="btn btn--blue">
            More Folio
          </a>
        </div> */}
      </section>
      <PortfolioPopUp />
    </div>
  );
}

/*
<div className="port-container">
          <div className="port-card">
            <div className="port-imgBx" data-text="Scheduler">
               <img
                src={require("../img/port-1.jpg")}
                alt="port"
                className="port-img"
              /> 
              &nbsp;
            </div>
            <div className="port-content">
              <div>
                <h3>Scheduler</h3>
                <p>
                  A React application that allows users to book and cancel
                  interviews on selected days of the week.
                </p>
                <a href="#popup1" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="port-card">
            <div className="port-imgBx" data-text="Tutorama">
              <img
                src={require("../img/port-2.jpg")}
                alt="port"
                className="port-img"
              />
            </div>
            <div className="port-content">
              <div>
                <h3>Tutorama</h3>
                <p>
                  The Tutorama App makes it easy for students to instantly
                  connect with expert tutors for in-person lessons
                </p>
                <a href="#popup2" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="port-card">
            <div className="port-imgBx" data-text="Jungle Rails">
              <img
                src={require("../img/port-4.jpg")}
                alt="port"
                className="port-img"
              />
            </div>
            <div className="port-content">
              <div>
                <h3>Jungle Rails</h3>
                <p>
                  Inheriting an existing app called Jungle and using existing
                  code style and approach to fix occurring bugs and also
                  implement new features.
                </p>
                <a href="#popup3" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="port-card">
            <div className="port-imgBx" data-text="QuizApp">
              <img
                src={require("../img/port-3.jpg")}
                alt="port"
                className="port-img"
              />
            </div>
            <div className="port-content">
              <div>
                <h3>QuizApp</h3>
                <p>
                  An app that lets you create quizzes and share them between
                  friends. The creator of the quiz can view and share all the
                  results at the end of the quiz.
                </p>
                <a href="#popup3" className="btn btn--white">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
*/
