import React, { useState } from "react";
import "../sass/components/Navigation.scss";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { NavBarData } from "./NavBarData";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const timeout = { enter: 800, exit: 400 };

  const [inProp, setInProp] = useState(false);
  return (
    <TransitionGroup component="div">
      <CSSTransition in={inProp} timeout={timeout} className="my-node">
        <div className="nav-container">
          <div className="navbar">
            <a href="#1" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <a href="#1" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </a>
              </li>
              {NavBarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <a href={item.path} onClick={() => setInProp(true)}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
