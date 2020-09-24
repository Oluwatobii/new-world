import React, { useState } from "react";
import "../sass/components/Navigation.scss";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { NavBarData } from "./NavBarData";

export default function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
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
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
