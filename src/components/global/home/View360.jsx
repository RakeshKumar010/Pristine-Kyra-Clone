import { useContext } from "react";
import RoundView1 from "../../../assets/slider/gallery_img4.jpg";
import RoundView2 from "../../../assets/slider/gallery_img5.jpg";
import { MyContext } from "../../../App";

const View360 = () => {
  const { view, setIsPopUpOpen } = useContext(MyContext);

  return (
    <div ref={view} className="  md:px-10 px-7 pt-24">
      <div className="text-center">
        <h2 className="text-logoBlue text-xl md:text-2xl text-center font-semibold">
          360° Views - Pristine Kyra Viman Nagar
        </h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="border rounded-md  border-yellow-950 p-3 md:p-10 text-center">
          <img
            src={RoundView1}
            alt="..."
            className="w-96 rounded-md h-40 md:h-80"
          />
          <p className="">Explore Interior Virtual Tour</p>
          <p
            onClick={() => setIsPopUpOpen(true)}
            className="text-white rounded-md overflow-hidden relative group  bg-logoBlue mb-2 py-2 px-6 block  cursor-pointer border-logobg-logoBlue border transition-all duration-1000 "
          >
            <div className="absolute transition-all duration-700  rounded-[100%] -top-7 -bottom-7  -left-7 -right-7 group-hover:translate-y-0  translate-y-full bg-logoColor"></div>
            <span className="relative z-10">Click to View</span>
          </p>
        </div>
        <div className="border rounded-md  border-yellow-950 p-3 md:p-10 text-center">
          <img
            src={RoundView2}
            alt="..."
            className="w-96 rounded-md h-40 md:h-80"
          />
          <p className="">Explore Exterior Virtual Tour</p>
          <p
            onClick={() => setIsPopUpOpen(true)}
            className="text-white rounded-md overflow-hidden relative group block  cursor-pointer bg-logoBlue py-2 px-6  border-logobg-logoBlue border transition-all duration-1000 "
          >
            <div className="absolute transition-all duration-700  rounded-[100%] -top-7 -bottom-7  -left-7 -right-7 group-hover:translate-y-0  translate-y-full bg-logoColor"></div>
            <span className="relative z-10">Click to View</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default View360;
