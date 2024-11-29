import { useContext } from "react";
import T1Floor1 from "../../../assets/tower1/11.png";
import T1Floor2 from "../../../assets/tower1/12.png";
import T1Floor3 from "../../../assets/tower1/13.png";
import { MyContext } from "../../../App";
const data1 = [
  { img: T1Floor1, heading: "3 BHK" },
  { img: T1Floor2, heading: "3.5 BHK" },
  { img: T1Floor3, heading: "4 BHK" },
];
const UnitPlan = () => {
  const { unit } = useContext(MyContext);
  return (
    <div
      ref={unit}
      className="     bg-[#fffdf1] mx-auto pt-24  overflow-hidden py-10 md:px-5 px-3 2xl:px-40 "
    >
      <div className=" pb-10">
        <h2>Floor Plan - Pristine Kyra Viman Nagar</h2>
      </div>
      <div className="flex md:flex-row flex-col gap-10 ">
        {data1.map(({ img, heading }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col   text-white text-center text-sm md:text-xl "
            >
              <div className="  rounded-md cursor-pointer   w-full   mx-auto ">
                <img
                  src={img}
                  alt="..."
                  className="    border-[1px] border-gray-400   select-none   "
                />

                <p
                  onClick={() => setIsPopUpOpen(true)}
                  className="text-white  bg-white rounded-b-md border-logoBlue border-[1px] h-10    "
                ></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnitPlan;
