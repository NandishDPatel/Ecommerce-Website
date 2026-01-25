import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlock,
  faPenToSquare,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../atoms/SocialIcons";

const Topbar = () => {
  return (
    <>
      <nav className="bg-black py-1">
        <ul className="list-none flex flex-wrap justify-center items-center gap-2 md:gap-6">
          <li>
            <a
              href="/signin"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              aria-label="Sign In"
            >
              <FontAwesomeIcon icon={faUnlock} className="text-teal-400" />
              <span>Sign In</span>
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              aria-label="Sign Up"
            >
              <FontAwesomeIcon icon={faPenToSquare} className="text-teal-400" />
              <span>Sign Up</span>
            </a>
          </li>
          <li>
            <a
              href="tel:+16833452093"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              aria-label="Contact Phone"
            >
              <FontAwesomeIcon icon={faPhone} className="text-teal-400" />
              <span>+1 (683) 345-2093</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:eshoppy@mail.com"
              className="text-white no-underline hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-400" />
              <span>eshoppy@mail.com</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap items-center sm:justify-between justify-center px-2 py-1">
        {/* Search */}
        <div className="sm:flex items-center ps-2 block hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full border px-4 py-2 rounded-l outline-none"
            id="#search"
          />
          <button className="bg-teal-400 px-4 py-2 rounded-r text-white">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Logo */}
        <div className="header-logo flex items-center sm:mx-auto text-3xl font-bold relative">
          <span className="bg-black text-white p-2 mt-2 mr-0">E</span>
          <span>-Shoppy</span>
          <FontAwesomeIcon
            className="header-cart text-xs text-teal-400"
            icon={faCartShopping}
          />
        </div>

        <SocialIcons/>
        
      </div>
    </>
  );
};

export default Topbar;
