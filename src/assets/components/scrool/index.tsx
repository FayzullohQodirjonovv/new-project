import  { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <div
      className={`fixed bottom-10 z-50 transition-all duration-1000 ${
        isVisible ? "right-10 opacity-100" : "right-[-200px] opacity-0"
      }`}
    >
       <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:-translate-y-1 z-50"
        >
          <BsArrowUp size={20} />
        </button>
    </div>
  );
};

export default ScrollToTop;
