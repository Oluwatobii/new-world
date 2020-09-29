import React, { Fragment } from "react";
import "./sass/components/PortfolioPopUp.scss";

export default function PortfolioPopUp() {
  return (
    <Fragment>
      <div className="popup" id="popup1">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src={require("../img/scheduler.gif")}
              alt="Tour pic"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Scheduler
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Current Functionalities
            </h3>

            <ul className="popup__text">
              <li>Interviews can be booked between Monday and Friday.</li>
              <li>A user can edit the details of an existing interview.</li>
              <li>A user can cancel an existing interview.</li>
              <li>
                A user is shown an error if an interview cannot be saved or
                deleted.
              </li>
              <li>
                The list of days informs the user how many slots are available
                for each day.
              </li>
            </ul>
            <div className="popup-btn">
              <a
                href="https://github.com/Oluwatobii/scheduler"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--1"
              >
                View Source Code
              </a>
              <a
                href="https://upbeat-hawking-a45e1b.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--2"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="popup" id="popup2">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src={require("../img/tutorama.gif")}
              alt="Tour pic"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Tutorama
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Current Functionalities
            </h3>

            <ul className="popup__text">
              <li>Create student and tutor profile</li>
              <li>
                Search and view the list of tutors based on features (Location,
                Ratings, $/hour, Curriculum/Topics).
              </li>
              <li>View Tutor Profile (no. of reviews, ratings, etc...)</li>
              <li>Add ratings and comments</li>
              <li>Communicating with tutor (Direct-Messaging in the app)</li>
            </ul>
            <div className="popup-btn popup-btn--2">
              <a
                href="https://github.com/Oluwatobii/Tutorama"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--1"
              >
                View Source Code
              </a>
              {/* <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--2"
              >
                Visit Website
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="popup" id="popup3">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src={require("../img/quizapp.gif")}
              alt="Tour pic"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">QuizApp</h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Current Functionalities
            </h3>

            <ul className="popup__text">
              <li>User can create quizzes</li>
              <li>User can make their quiz unlisted</li>
              <li>User can see a list of public quizzes and attempt a quiz</li>
              <li>User can see the results of their recent attempt</li>
              <li>User can share a link to the result of their attempt</li>
            </ul>
            <div className="popup-btn popup-btn--2">
              <a
                href="https://github.com/Oluwatobii/QuizApp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--1"
              >
                View Source Code
              </a>
              {/* <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--blue btn--2"
              >
                Visit Website
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
