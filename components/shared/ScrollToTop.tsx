/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Logo from "/public/assets/totop.png";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });

    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showTopBtn && (
        <div
          onClick={goToTop}
          className="fixed z-40 w-12 h-12 p-1 text-yellow-400 rounded-full shadow-xl cursor-pointer bg-blackRussian md:w-16 md:h-16 right-3 bottom-3 md:right-6 md:bottom-6"
        >
          <div className="flex items-center justify-center w-full h-full border-2 border-gray-300 rounded-full">
            <img width={30} height={30} src={Logo.src} alt="toTop" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
