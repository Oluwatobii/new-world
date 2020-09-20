import React from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
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
                <ul>
                  <li>Interviews can be booked between Monday and Friday.</li>
                  <li>A user can edit the details of an existing interview.</li>
                  <li>A user can cancel an existing interview.</li>
                  <li>
                    A user is shown an error if an interview cannot be saved or
                    deleted.
                  </li>
                  <li>
                    The list of days informs the user how many slots are
                    available for each day.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__stack-box">
                  <p className="card__stack-only">Stack</p>
                  <p className="card__stack-value">PERN</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  View Source Code
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
                <ul>
                  <li>Create student and tutor profile</li>
                  <li>
                    Search and view the list of tutors based on features
                    (Location, Ratings, $/hour, Curriculum/Topics).
                  </li>
                  <li>View Tutor Profile (no. of reviews, ratings, etc...)</li>
                  <li>Add ratings and comments</li>
                  <li>
                    Communicating with tutor (Direct-Messaging in the app)
                  </li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__stack-box">
                  <p className="card__stack-only">Stack</p>
                  <p className="card__stack-value">PERN</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  View Source Code
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
                <ul>
                  <li>User can create quizzes</li>
                  <li>User can make their quiz unlisted</li>
                  <li>
                    User can see a list of public quizzes and attempt a quiz
                  </li>
                  <li>User can see the results of their recent attempt</li>
                  <li>User can share a link to the result of their attempt</li>
                </ul>
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
                <a href="#popup" className="btn btn--white">
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#1" className="btn btn--blue">
          More Folio
        </a>
      </div>
    </section>
  );
}
