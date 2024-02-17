import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let heightToHide = 400;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);

  return (
    <div className="scroll-wrapper">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
