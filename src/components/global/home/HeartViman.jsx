import React, { useContext } from "react";
import { MyContext } from "../../../App";

const HeartViman = () => {
  const { setIsPopUpOpen } = useContext(MyContext);
  return (
    <div className="flex md:flex-row flex-col my-16 ">
      <div className="bg-[#f2f6ff] md:w-[30vw] p-7">
        <h2>IN THE HEART OF VIMAN NAGAR , AN EXCLUSIVE WORLD UNTO ITSELF. </h2>
        <p>
          Set in an enviable location, Prisrine Kyra boasts the ultimate
          landscape of society, culture, and commerce. Luxury hotels and malls,
          prestigious schools and renowned hospitals, even the international
          airport; everything revolves around you.
        </p>
        <p>
          There is no better place than the coveted IT powerhouse around the
          corner, to network with like-minded CEOs, CXOs, and other head
          honchos. And with the upcoming metro station a short drive away, the
          rest of Pune will never be out of reach.
        </p>
        <button
          onClick={() => setIsPopUpOpen(true)}
          className="bg-logoBlue   text-white  py-[6px] rounded-[4px] hover:bg-black px-9 "
        >
          <span className="relative  font-semibold z-10">Enquire Now</span>
        </button>
      </div>
      <img
        src="https://pristine-kyra-vimannagar.in/uploads/Image/Kyra_Brochure_WhatsApp.pdf_(4)1.png"
        alt="..."
        className="md:w-[70vw]"
      />
    </div>
  );
};

export default HeartViman;
