import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="top-0 left-0 w-full z-50 lg:px-15 px-1">
      <div className="flex flex-row items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-3 lg:pt-5">
        <a
          className={`block no-underline font-bold text-n-5 transition-all duration-300  ${
            openNavigation ? "ms-3" : ""
          }`}
          href="/"
        >
          ohhEarl<span className="text-n-1 font-extrabold text-2xl">.</span>
        </a>
        <nav
          className={`overflow-hidden transition-all duration-300 ease-in-out -6 ${
            openNavigation
              ? "h-[100rem] bg-n-6 opacity-100 z-50"
              : "max-h-0 opacity-0"
          } absolute top-[5rem] left-0 right-0 lg:static lg:mx-auto lg:flex lg:max-h-[none] lg:opacity-100`}
        >
          <div className="z-1 flex flex-col ps-7 justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`${
                  item.url === pathName.pathname ? "text-n-1" : "text-n-3"
                } block py-5 poppins text-xl font-semibold transition-colors hover:text-n-1 cursor-pointer px-3 py-2 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="/get-in-touch"
          className="hidden lg:flex rounded-full bg-n-4 p-2.5 xl:mr-5"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-n-6 h-[1rem]" />
        </a>
        <button
          className={"ml-auto lg:hidden button h-10"}
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
