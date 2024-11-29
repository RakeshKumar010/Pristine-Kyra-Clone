import React, { useContext } from "react";
import { MyContext } from "../../../App";
import { pricingDetails } from "../../../data";

const Price = () => {
  const { price, setIsPopUpOpen } = useContext(MyContext);

  return (
    <div
      ref={price}
      className="bg-[#fffdf1] mx-auto  py-10 md:px-5 px-3 2xl:px-40  text-center"
    >
      <h2 className="mb-10">
        Configuration Details - Pristine Kyra Viman Nagar
      </h2>
      <div className="overflow-x-auto rounded-md">
        <table className="w-full   md:text-base text-sm   rounded-md">
          <thead className="w-full bg-logoBlue text-white ">
            <tr className="w-full h-10">
              <td className=" text-xs md:text-base h-16 px-3">Configuration</td>
              <td className=" text-xs md:text-base h-16 px-3">
                <span className="md:inline-block hidden"> Carpet</span> Area
              </td>
              <td className=" text-xs md:text-base h-16 px-3">Price</td>
              <td className=" text-xs md:text-base h-16 px-3">
                Price <span className="hidden md:inline"> Breakup</span>
              </td>
            </tr>
          </thead>
          <tbody className="w-full text-center">
            {pricingDetails.map((detail, index) => (
              <tr
                key={index}
                className={`h-16 px-3 border-logoBlue  ${
                  index === pricingDetails.length - 1 ? "" : "border-b-[1px] "
                }  text-[#4c5052]`}
              >
                <td className=" text-xs md:text-base  hover:bg-logoBlue/10 text-nowrap p-1 transition-all duration-1000">
                  {detail.typology}
                </td>
                <td className=" text-xs md:text-base  hover:bg-logoBlue/10   p-1 transition-all duration-1000">
                  {detail.area}
                </td>
                <td className=" text-xs md:text-base  hover:bg-logoBlue/10 text-nowrap p-1 transition-all duration-1000">
                  {detail.price}
                </td>
                <td className=" text-xs md:text-base  transition-all duration-1000 px-1">
                  <button
                    onClick={() => setIsPopUpOpen(true)}
                    className="bg-logoBlue px-1 md:px-9 relative overflow-hidden group text-white    py-[5px] rounded "
                  >
                    <div className="absolute transition-all duration-700  rounded-[100%] -top-5 -bottom-5  -left-5 -right-5 group-hover:translate-y-0  translate-y-full bg-logoColor"></div>
                    <span className="relative font-semibold z-10">
                      <span className="hidden  md:inline"> Price</span> Breakup
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Price;
