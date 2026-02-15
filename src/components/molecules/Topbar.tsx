import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlock,
  faPenToSquare,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../atoms/SocialIcons";
import { useState } from "react";
import LoginPopup from "../templates/LoginPopup";

const Topbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="bg-black py-1.5 md:py-1">
        <ul className="list-none flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 px-2">
          <li>
            <button
              className="text-white hover:cursor-pointer no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
              name="Sign In"
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faUnlock} className="text-teal-400 flex-shrink-0" />
              <span>Sign In</span>
            </button>
          </li>
          <li>
            <button
              className="text-white hover:cursor-pointer no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
              name="Sign Up"
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} className="text-teal-400 flex-shrink-0" />
              <span>Sign Up</span>
            </button>
          </li>
          <li>
            <a
              href="tel:+16833452093"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
              aria-label="Contact Phone"
            >
              <FontAwesomeIcon icon={faPhone} className="text-teal-400 flex-shrink-0" />
              <span className="hidden sm:inline">+1 (683) 345-2093</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:eshoppy@mail.com"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 flex-shrink-0" />
              <span className="hidden md:inline">eshoppy@mail.com</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap items-center justify-between sm:justify-between gap-2 px-3 sm:px-4 py-2 md:py-1">
        {/* Search - hidden on small mobile */}
        <div className="hidden sm:flex items-center flex-1 min-w-0 max-w-[200px] md:max-w-none">
          <input
            type="text"
            placeholder="Search"
            className="w-full border px-3 py-2 rounded-l outline-none text-sm"
            id="search"
          />
          <button type="button" className="bg-teal-400 px-3 py-2 rounded-r text-white flex-shrink-0">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Logo - centered on mobile when search hidden */}
        <div className="header-logo flex items-center flex-shrink-0 text-2xl sm:text-3xl font-bold relative order-first sm:order-none sm:mx-auto">
          <span className="bg-black text-white p-1.5 sm:p-2 mt-1 sm:mt-2 mr-0">E</span>
          <span className="whitespace-nowrap">-Shoppy</span>
          <FontAwesomeIcon
            className="header-cart text-xs text-teal-400"
            icon={faCartShopping}
          />
        </div>

        <SocialIcons />
      </div>

      {showModal && (
        <LoginPopup showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Topbar;
