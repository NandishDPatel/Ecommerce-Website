import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 flex items-center justify-center transition-colors"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="#"
        className="bg-sky-500 hover:bg-sky-600 text-white w-10 h-10 flex items-center justify-center transition-colors"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="#"
        className="bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 flex items-center justify-center transition-colors"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="#"
        className="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 flex items-center justify-center transition-colors"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

export default SocialIcons;
