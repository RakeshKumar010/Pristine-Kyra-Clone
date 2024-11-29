import React, { useContext } from "react";
import { MyContext } from "../../../App";

const HeaderDetails = () => {
  const { setIsPopUpOpen } = useContext(MyContext);
  return (
    <div className="border-b border-black">
      <div className="w-full md:px-8 px-3 2xl:px-40  mx-auto text-black  ">
        <div
          className="  grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5  md:divide-x-[2px] divide-logoBlue p-5 cursor-pointer  "
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <p  className="text-center leading-[24px]  text-gray-600  m-0">
            <strong className="block text-xl font-semibold leading-[24px] text-black ">3 & 4 BHK Homes</strong>
            Configuration
          </p>
          <p  className="text-center leading-[24px]  text-gray-600  m-0">
            <strong className="block text-xl font-semibold leading-[24px] text-black ">₹ 3.70 Cr* onwards</strong> Starting
            Price
          </p>
          <p  className="text-center leading-[24px]  text-gray-600  m-0">
            <strong className="block text-xl font-semibold leading-[24px] text-black ">Viman Nagar, Pune</strong> Location
          </p>

          <p  className="text-center leading-[24px]  text-gray-600  m-0">
            <strong className="block text-xl font-semibold leading-[24px] text-black ">Dec 2027</strong> Possession
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
