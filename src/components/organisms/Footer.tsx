import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../atoms/SocialIcons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const customerImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  ];

  return (
    <footer className="bg-black text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About E-Shoppy */}
        <div>
          <div className="flex items-center mb-4 ">
            <span className="bg-teal-400 text-black font-bold text-3xl px-3 py-2">
              E
            </span>
            <span className="text-3xl font-bold ml-1 relative">-Shoppy</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            EShoppy is a software application that enables online commerce for
            merchants and consumers. Ecommerce platforms can manage web hosting,
            inventory management, payment processing, marketing, order
            fulfillment, and more.
          </p>
          <SocialIcons />
        </div>

        {/* Column 2: Our Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6">OUR INFORMATION</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/men-wear"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Men's Wear
              </Link>
            </li>
            <li>
              <Link
                to="/women-wear"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Women's Wear
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                My Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Store Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6">STORE INFORMATION</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-teal-400 mt-1" />
              <a
                href="tel:+12345678901"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                : +1 234 567 8901
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-teal-400 mt-1"
              />
              <a
                href="mailto:mail@example.com"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                : mail@example.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-teal-400 mt-1"
              />
              <span className="text-gray-400">
                : Broome St, California, USA.
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Customer Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Customer Posts</h3>
          <div className="grid grid-cols-4 gap-2">
            {customerImages.map((img, index) => (
              <div
                key={index}
                className="w-16 h-16 overflow-hidden hover:opacity-75 transition-opacity cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Customer ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="hover:cursor-pointer fixed bottom-8 right-8 bg-gray-600 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
