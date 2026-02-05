// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("/");
//   const handleClick = (link: string) => {
//     setActive(link);
//   };

//   return (
//     <nav className="bg-black flex items-center px-6">
//       {/* Nav Links */}

//       <ul className="flex gap-10 text-white mx-auto">
//         <li className="relative group" onClick={() => handleClick("/")}>
//           <Link to="/" onClick={() => handleClick("/")}>
//             Home
//           </Link>
//           <span
//             className={`absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${active === "/" ? "w-full" : "w-0 group-hover:w-full"}`}
//           ></span>
//         </li>
//         <li className="relative group" onClick={() => handleClick("/men-wear")}>
//           <Link to="/men-wear">Men&apos;s Wear</Link>
//           <span
//             className={`absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${active === "/men-wear" ? "w-full" : "w-0 group-hover:w-full"}`}
//           ></span>
//         </li>
//         <li
//           className="relative group"
//           onClick={() => handleClick("/women-wear")}
//         >
//           <Link to="/women-wear">Women&apos;s Wear</Link>
//           <span
//             className={`absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${active === "/women-wear" ? "w-full" : "w-0 group-hover:w-full"}`}
//           ></span>
//         </li>
//         <li className="relative group" onClick={() => handleClick("/about")}>
//           <Link to="/about">About</Link>
//           <span
//             className={`absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${active === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}
//           ></span>
//         </li>
//         <li className="relative group" onClick={() => handleClick("/contact")}>
//           <Link to="/contact">Contact</Link>
//           <span
//             className={`absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${active === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}
//           ></span>
//         </li>
//       </ul>

//       {/* Cart Icon */}
//       <Link to="/add-to-cart">
//         <div className="bg-teal-400 my-1 p-3 px-8 border-b-2 border-white hover:cursor-pointer">
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             className="text-black text-xl hover:text-white duration-500 ease-out"
//           />
//         </div>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative group ${
      isActive ? "text-white" : ""
    }`;

  const underlineClass = (isActive: boolean) =>
    `absolute -bottom-2 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in-out ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <nav className="bg-black flex items-center px-6">
      <ul className="flex gap-10 text-white mx-auto">
        {[
          { to: "/", label: "Home" },
          { to: "/men-wear", label: "Men's Wear" },
          { to: "/women-wear", label: "Women's Wear" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map(({ to, label }) => (
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

      <NavLink to="/add-to-cart">
        <div className="bg-teal-400 my-1 p-3 px-8 border-b-2 border-white">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-black text-xl hover:text-white duration-500 ease-out"
          />
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;