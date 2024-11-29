import { Link } from "react-router-dom";
import ReraQr from "../../assets/img/reraqr.png";
import FooterContact from "./home/FooterContact";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-full max-w-container bg-[#f2f6ff]">
        <div className="border-t border-slate-900/5 py-10  md:px-5 px-3 2xl:px-40">
          <div className="flex flex-col justify-center items-center gap-1 text-center">
            <span className="text-blue-500"> Pristine Kyra</span>
            <img
              src={ReraQr}
              alt="..."
              className="bg-white h-32 p-1  mx-auto rounded-md"
            />

            <span className="text-blue-500">P52100055515</span>
          </div>
          <p className="text-[14px] leading-[24px] text-center pb-3 pt-10">
            <span className="font-semibold text-gray-800 "> Disclaimer :</span>{" "}
            The information provided on this website is intended exclusively for
            informational purposes and should not be construed as an offer of
            services. This site is managed by a RERA authorized real estate
            agent namely Prashant Lande ( Prop Mart ) . The pricing information
            presented on this website is subject to alteration without advance
            notification, and the assurance of property availability cannot be
            guaranteed. The images showcased on this website are for
            representational purposes only and may not accurately reflect the
            actual properties. We may share your data with Real Estate
            Regulatory Authority (RERA) registered Developers for further
            processing as necessary. Additionally, we may send updates and
            information to the mobile number or email address registered with
            us. All rights reserved. The content, design, and information on
            this website are protected by copyright and other intellectual
            property rights. Any unauthorized use or reproduction of the content
            may violate applicable laws. For accurate and up-to-date information
            regarding services, pricing, availability, and any other details, it
            is recommended to contact us directly through the provided contact
            information on this website. Thank you for visiting our website.
          </p>

          <p className="text-gray-800 text-center">Privacy Policy</p>
        </div>
        <div className="bg-logoBlue py-3 flex-wrap flex gap-2  items-center justify-center text-center   ">
          <p className="m-0 text-sm leading-[24px] text-white ">
            © Copyright 2024 Botmedia Digital Marketing.
          </p>
          <p className="m-0 text-white md:block hidden"> |</p>
          <p className="m-0 text-sm leading-[24px] text-white"> Disclaimer </p>
          <p className="m-0 text-white md:block hidden"> |</p>
          <p className="m-0 text-sm leading-[24px] text-white">
            {" "}
            Maha RERA Registration No: Agent - A52100038894
          </p>
        </div>
      </footer>
      <FooterContact />
    </>
  );
};

export default Footer;
