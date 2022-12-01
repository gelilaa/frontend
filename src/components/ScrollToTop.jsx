import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons";
export const ScrollToTop=()=> {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll">
      {isVisible && (
        <div
          onClick={scrollToTop}
        >
         <IconContext.Provider value={{ className: "icons" }}>
          <FaArrowUp />
        </IconContext.Provider>
        </div>
      )}
    </div>
  );
}
