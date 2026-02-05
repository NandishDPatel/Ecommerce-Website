import SocialIcons from "../atoms/SocialIcons";
import { FOOTER_TEXT } from "../../utils/constants/text";

const AboutEshoppy = () => {
  return (
    <>
      <div>
        <div className="flex items-center mb-4 ">
          <span className="bg-teal-400 text-white text-3xl px-3 py-2">E</span>
          <span className="text-3xl ml-1 relative">-Shoppy</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
          {FOOTER_TEXT.ABOUT}
        </p>
        <SocialIcons />
      </div>
    </>
  );
};

export default AboutEshoppy;
