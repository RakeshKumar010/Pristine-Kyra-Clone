import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScroll = () => {
    const halfPageHeight = document.documentElement.scrollHeight / 2;
    if (window.scrollY > halfPageHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-5 bottom-16 right-2 bg-logoBlue/90 text-white p-5 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollButton;
