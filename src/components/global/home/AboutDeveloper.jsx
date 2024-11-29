import React, { useContext } from "react";
import { MyContext } from "../../../App";
import { IoCall } from "react-icons/io5";
import Logo from '../../../assets/logo.jpg'
const AboutDeveloper = () => {
  const { setIsPopUpOpen } = useContext(MyContext);
  return (
    <section className=" bg-[#fffdf1]   flex justify-center items-center">
      <div className="  mx-auto   md:px-12 lg:px-20">
        <div className="   rounded-lg px-3 py-8 md:p-12 flex flex-col items-center text-center">
          <h2>About Pristine Properties</h2>
          <img src={Logo} alt="..." className="mb-10 w-52" />
          <p className="text-gray-700 text-center mb-6">
            <span className="  uppercase">
              A Profound Legacy. A Farsighted Vision. A Steadfast Mission of
              'Crafting Delightful Spaces'...
            </span>
            <br />
            <br />
            Founded in 1984, Pristine Properties is one of Pune’s most trusted
            and admired realty brands. Since inception, it has been an
            incredible journey of growth, learning, and innovation. For over 38
            years, the company has built landmark projects across various
            prominent and emerging localities. Mr. Pritam Goyal, the honourable
            Managing Director of the company, inherited profound wisdom from his
            respectable father, Mr. Ishwarchand Goyal, the Founder and Chairman
            who believes in upholding the value of ‘Trustism’. Trustism embodies
            a commitment to integrity, transparency, and excellence.
          </p>

          <p className="text-center">
            <span className="font-semibold text-gray-800">Site Address:</span>{" "}
            Next to Symbiosis International School, Off. Airport Road, Viman
            Nagar, Pune 411014. Corporate Address: 501/502, Fortune House,
            Prabhat Road, Erandwane, Pune – 411004.
          </p>
          <p className="text-center font-semibold text-gray-800">
            This project has been registered via MAHARERA Registration no.
            P52100055515. Available at website: http://maharera.mahaonline.gov.in
            under registered projects.
          </p>
          <h1 className="text-[24px] font-[500] leading-[34px]">
            Marketed By :{" "}  
            <span className="font-[700]">
              {" "}
              Props<span className="text-red-500">Mart</span>
            </span>
          </h1>

          <div className=" flex flex-wrap justify-center gap-5  mt-16 w-full">
            <div className="flex items-center md:gap-3 flex-wrap ">
              <h3 className=" font-[700] text-gray-800 ">Project Enquiry -</h3>
              <IoCall />

              <a href="tel:+9699089259" className=" ">
                +91 9699089259
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;
