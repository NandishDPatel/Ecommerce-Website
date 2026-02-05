import { STORE_INFO } from "@/utils/constants/text";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreInfo = () => {
  return (
    <>
      <div>
        <h3 className="text-xl  mb-6">Store Information</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-teal-400 mt-1" />
            <a
              href="tel:+12345678901"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              : {STORE_INFO.PHONE}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-teal-400 mt-1" />
            <a
              href="mailto:eshoppy@mail.com"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              : {STORE_INFO.EMAIL}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-teal-400 mt-1"
            />
            <span className="text-gray-400">: {STORE_INFO.ADDRESS}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StoreInfo;
