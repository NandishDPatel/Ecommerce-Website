import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTopBtn = () => {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className="z-100 hover:cursor-pointer fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-700 text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg outline-none border-0"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="border-0" />
      </button>
    </>
  );
};

export default ScrollToTopBtn;
