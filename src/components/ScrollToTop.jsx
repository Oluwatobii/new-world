import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

import "./sass/components/ScrollToTop.scss";

export default function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 55) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      onClick={scrollToTop}
      color="secondary"
      size="large"
      aria-label="scroll back to top"
      className="scroll-to-top"
    >
      <FaArrowUp className="icon" />
    </div>
  );
}
