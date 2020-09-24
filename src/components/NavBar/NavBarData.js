import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const NavBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "About Me",
    path: "/reports",
    icon: <IoIcons.IoMdHelpCircle />,
    className: "nav-text",
  },
  {
    title: "Competencies",
    path: "/products",
    icon: <IoIcons.IoMdBriefcase />,
    className: "nav-text",
  },
  {
    title: "Resume",
    path: "/team",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Portfolio",
    path: "/messages",
    icon: <MdIcons.MdCode />,
    className: "nav-text",
  },
  {
    title: "Contact Me",
    path: "/support",
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text",
  },
];
