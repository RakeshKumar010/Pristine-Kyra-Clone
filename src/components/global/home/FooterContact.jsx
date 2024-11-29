import { PiWhatsappLogoThin } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { useContext, useState } from "react";
import { MyContext } from "../../../App";

const FooterContact = ( ) => {
    const { setIsPopUpOpen } = useContext(MyContext);
  const phone = "919699089259";
  const message = `I'm interested in Pristine Kyra Viman Nagar, Pune`;
  const encodedMessage = encodeURIComponent(message);
  const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  return (
    <>
      <div className="flex justify-between z-10 md:justify-around py-2 px-6 border-2 sticky bottom-0 right-0 left-0 bg-white lg:hidden">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <PiWhatsappLogoThin className="text-" />
          <span className="text-sm ">WHATSAPP</span>
        </a>
        <div
          className="flex flex-col items-center"
          onClick={() => {
            setIsPopUpOpen(true);
          
          }}
        >
          <PiNotebookLight className="text-" />
          <span className="text-sm ">CONTACT US</span>
        </div>
        <a href={`tel:${phone}`} className="flex flex-col items-center">
          <IoCallOutline className="text-" />
          <span className="text-sm ">CALL UP</span>
        </a>
      </div>
    </>
  );
};

export default FooterContact;
