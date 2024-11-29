import { useContext } from "react";
import { IoPlay } from "react-icons/io5"; 
import { MyContext } from "../../../App";

const Video = () => {
  const { setIsPopUpOpen } = useContext(MyContext);

  return (
    <div className="bg-[#f2f6ff] py-16 px-3 ">
      <h2 className="text-center">
        Pristine Kyra Viman Nagar - Real Sample Flat Video.
      </h2>
      <div className="md:w-[600px] relative mx-auto">
        <img
          src="https://pristine-kyra-vimannagar.in/uploads/Image/Kyra_Opp_DOC_WhatsApp.pdf.png"
          alt="..."
        />
        <div className="absolute top-0 bottom-0 left-0 right-0   bg-black/50">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div onClick={()=>{
                setIsPopUpOpen(true)
            }} className="flex justify-center items-center bg-white rounded-full h-20 w-20">
              <IoPlay className="  w-12 h-12 text-gray-400 rounded-full " />
            </div>
            <h2 className="font-bold text-white">Play Now</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
