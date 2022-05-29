import React, { useState } from "react";
import NavButton from "./NavButton";
import NavlinkComponent from "./NavLink";

const NavbarSection = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="w-full h-full">
        <nav className="lg:hidden relative z-50">
          <div className="flex py-2 justify-between items-center px-6">
            <div>
              <img src="/logo-black.png" alt="logo" className="w-16 py-4" />
            </div>
            <div className="visible flex items-center">
              <button
                id="open"
                onClick={() => setMenu(!menu)}
                className={` ${
                  menu ? "hidden" : ""
                } focus:outline-none focus:ring-2 focus:ring-black`}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg"
                  alt="menu"
                />
              </button>
              <div
                id="list"
                className={` ${
                  menu ? "" : "hidden"
                } p-6 border-r bg-white absolute rounded top-0 left-0 right-0 shadow m-4 mt-24`}
              >
                <div className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <NavlinkComponent href="/">Home</NavlinkComponent>
                </div>

                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <NavButton href="/">Order Now</NavButton>
                </li>
              </div>
              <div className="xl:hidden">
                <button
                  id="close"
                  className={` ${
                    menu ? "" : "hidden"
                  } close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
                  onClick={() => setMenu(!menu)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg"
                    alt="close"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <nav className="f-f-l relative z-10">
          <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
            <div>
              <img src="/logo-black.png" className="w-16 py-4" alt="logo" />
            </div>
            <div className="flex items-center text-white text-base font-medium">
              <ul className="flex items-center pr-3 xl:pr-12">
                <li className="cursor-pointer hover:text-gray-300 ease-in">
                  <NavlinkComponent href="/">Simple Ideas</NavlinkComponent>
                </li>
              </ul>
              <NavButton href="/">Order Now</NavButton>
            </div>
          </div>
        </nav>
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
};

export default NavbarSection;
