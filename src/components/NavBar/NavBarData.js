import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const NavBarData = [
  {
    title: "Home",
    path: "#path_homepage",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "About Me",
    path: "#path_aboutme",
    icon: <IoIcons.IoMdHelpCircle />,
    className: "nav-text",
  },
  {
    title: "Competencies",
    path: "#path_competencies",
    icon: <IoIcons.IoMdBriefcase />,
    className: "nav-text",
  },
  {
    title: "Resume",
    path: "#path_resume",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Portfolio",
    path: "#path_portfolio",
    icon: <MdIcons.MdCode />,
    className: "nav-text",
  },
  {
    title: "Contact Me",
    path: "#path_contactme",
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text",
  },
];
