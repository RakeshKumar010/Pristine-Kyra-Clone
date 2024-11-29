import React, { useContext } from "react";
import { MyContext } from "../App";

const Enquire = () => {
  const { setIsPopUpOpen } = useContext(MyContext);
  const phone = "919699089259";
  const message = `I'm interested in Pristine Kyra Viman Nagar, Pune`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  return (
    <div
      onClick={() => setIsPopUpOpen(true)}
      className="flex cursor-pointer hover:scale-105 transition-all duration-1000 fixed  -right-[65px] text-sm py-2 top-1/2 justify-center bg-logoBlue text-white px-7 items-center   -rotate-90"
    >
      Request Site Visit
    </div>
  );
};

export default Enquire;
