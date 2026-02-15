import { Link } from "react-router-dom";

const InfoLinks = () => {
  return (
    <>
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
            to="/add-to-cart"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            My Cart
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InfoLinks;
