import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/men-wear", label: "Men's Wear" },
  { to: "/women-wear", label: "Women's Wear" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative group block py-3 px-4 rounded md:inline md:py-0 md:px-0 ${
      isActive ? "text-white bg-teal-600/20 md:bg-transparent" : ""
    }`;

  const underlineClass = (isActive: boolean) =>
    `absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-black flex items-center justify-between md:justify-normal px-4 md:px-6 min-h-14">
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-6 lg:gap-10 text-white mx-auto">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={linkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  <span className={underlineClass(isActive)} />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop cart */}
      <NavLink
        to="/add-to-cart"
        className="hidden md:flex items-center justify-center bg-teal-400 my-1 p-3 px-6 lg:px-8 border-b-2 border-white hover:bg-teal-500 transition-colors"
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-black text-xl hover:text-white duration-500 ease-out"
        />
      </NavLink>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-xs bg-black text-white h-full shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <span className="font-bold text-lg">Menu</span>
            <button
              type="button"
              className="p-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
          <ul className="py-4">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={linkClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span className={underlineClass(isActive)} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li className="border-t border-white/20 mt-4 pt-4 px-4">
              <NavLink
                to="/add-to-cart"
                className="flex items-center gap-3 py-3 text-teal-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
