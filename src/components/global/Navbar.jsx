import { SlMenu } from "react-icons/sl";
import Logo from "../../assets/logo.jpg";
import { useContext, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import PopUp from "./PopUp";
import { MyContext } from "../../App";
import Enquire from "../Enquire";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const {
    isPopUpOpen, 
    home,
    price,
    overview,
    location, 
    amenitie, 
  } = useContext(MyContext);
  const scrollToRef = (elementRef) => {
    const topSpace = 100;
    window.scrollTo({
      top: elementRef.current.offsetTop - topSpace,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-1000 bg-white ">
      <div className="flex  items-center justify-between  w-full md:px-8 px-3 2xl:px-40 py-4">
        <a href="#home" onClick={() => scrollToRef(home)}>
          {" "}
          <img src={Logo} alt="..." className="h-12 " />
        </a>
        <ul className="lg:flex gap-2 hidden  items-center  font-semibold text-black ">
          <a href="#overview" onClick={() => scrollToRef(overview)}>
            <li className="px-2  py-1 rounded-full hover:bg-black/10  transition-all duration-300    font-semibold leading-[24px]">
              Overview
            </li>
          </a>
          <a href="#amenities" onClick={() => scrollToRef(amenitie)}>
            <li className="px-2  py-1 rounded-full hover:bg-black/10  transition-all duration-300    font-semibold leading-[24px]">
              Amenities
            </li>
          </a>
          <a href="#configuration" onClick={() => scrollToRef(price)}>
            <li className="px-2  py-1 rounded-full hover:bg-black/10  transition-all duration-300    font-semibold leading-[24px] ">
              Configuration
            </li>
          </a>
          <a href="#location" onClick={() => scrollToRef(location)}>
            <li className="px-2  py-1 rounded-full hover:bg-black/10  transition-all duration-300    font-semibold leading-[24px]">
              Location
            </li>
          </a>
          <a href="#contact">
            <li className="px-2  py-1 rounded-full hover:bg-black/10  transition-all duration-300    font-semibold leading-[24px]">
              Contact
            </li>
          </a>
          <li className="flex px-2  py-1 font-semibold leading-[24px]  items-center  ">
            <MdCall /> +91 8888084100
          </li>
          <li className="text-[22px] px-2  py-1 font-[700] leading-[32px]">
            {" "}
            Pristine Kyra
          </li>
        </ul>

        {navIsOpen ? (
          <RiCloseLargeFill
            onClick={() => {
              setNavIsOpen(false);
            }}
            className="text-3xl  text-logoBlue lg:hidden block cursor-pointer"
          />
        ) : (
          <SlMenu
            onClick={() => {
              setNavIsOpen(true);
            }}
            className="text-3xl text-logoBlue lg:hidden block cursor-pointer"
          />
        )}
      </div>
      {navIsOpen ? (
        <div className="  bg-[#58c6ed] relative z-10    transition-all    duration-1000">
          <ul className="flex flex-col lg:hidden  divide-y-[1px] divide-white  text-white ">
            <a
              href="#overview"
              onClick={() => {
                setNavIsOpen(false);
                scrollToRef(overview);
              }}
            >
              <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
                Overview
              </li>
            </a>
            <a
              href="#amenities"
              onClick={() => {
                setNavIsOpen(false);
                scrollToRef(amenitie);
              }}
            >
              <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
                Amenities
              </li>
            </a>
            <a
              href="#configuration"
              onClick={() => {
                setNavIsOpen(false);
                scrollToRef(price);
              }}
            >
              <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
                Configuration
              </li>
            </a>
            <a
              href="#location"
              onClick={() => {
                setNavIsOpen(false);
                scrollToRef(location);
              }}
            >
              <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
                Location
              </li>
            </a>
            <a
              href="#contact"
              onClick={() => {
                setNavIsOpen(false);
                scrollToRef(contact);
              }}
            >
              <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
                Contact us
              </li>
            </a>

            <li className="pl-5 font-semibold  flex items-center gap-3  p-[15px_6%_16px_6%] tracking-wide">
              <MdCall /> +91 8888084100
            </li>
            <li className="pl-5 font-semibold    p-[15px_6%_16px_6%] tracking-wide">
              {" "}
              Pristine Kyra
            </li>
          </ul>
        </div>
      ) : null}
      {isPopUpOpen ? <PopUp /> : null}
      <Enquire />
    </div>
  );
};

export default Navbar;
