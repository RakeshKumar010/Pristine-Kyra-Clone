import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/logo.jpg";
import sideicon from "../../assets/side-icons.png";
import { IoCall, IoClose, IoCloseCircle } from "react-icons/io5";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidCarWash } from "react-icons/bi";
import { LiaCheckCircleSolid } from "react-icons/lia";

const PopUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { setIsPopUpOpen } = useContext(MyContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const form = document.getElementById("enquiry-form");
      if (form) {
        const rect = form.getBoundingClientRect();
        if (rect.top < 0) {
          form.classList.add("fixed");
        } else {
          form.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "Phone number must be numeric";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let body = `
        <b>Site : </b>Pristine Kyra Viman Nagar
        <br>
        <b>Name : </b>${formData.name}
        <br>
        <b>Email : </b>${formData.email}
        <br>
        <b>Phone : </b>${formData.phone}
        <br>
        <b>Message : </b>${formData.message}
        <br>
      `;
      Email.send({
        SecureToken: "fb8ca823-ba7c-4ebf-a072-bfb263221e6c",
        From: "guptanikhi25@gmail.com",
        To: "guptanikhi25@gmail.com",
        Subject: "Details from Pristine Kyra Viman Nagar",
        Body: body,
      }).then((message) => {
        if (message === "OK") {
          setIsPopUpOpen(false);
          navigate("/thank-you");
        } else {
          alert("Form not submitted!");
        }
      });
    }
  };

  return (
    <div className="fixed z-50 top-0 pt-5 right-0 left-0 bottom-0 bg-black/50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 h-fit md:rounded-none rounded-md bg-logoBlue">
        <div className="flex md:w-auto w-[90vw] md:rounded-none rounded-md  md:flex-row flex-col-reverse ">
          <div className="flex ">
            <div className="lg:block hidden">
              <img src={sideicon} alt="..." className=" w-24" />
            </div>
            <form
              id="enquiry-form"
              onSubmit={handleEmailSend}
              className="bg-white shadow-md md:w-96 w-full  md:rounded-none rounded-b-md px-8 md:pt-6 py-3  transition-all duration-1000 ease-in-out transform "
            >
              <div className="flex flex-col  justify-center items-center gap-5">
                <img src={Logo} alt="..." className="w-24 md:block hidden" />
                <p className="md:text-[15.36px] text-[13px] font-semibold text-start text-nowrap text-gray-800">
                  Register Here And Avail The{" "}
                  <span className="text-red-500"> Best Offers!!</span>
                </p>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    className={`w-full pl-3 pr-3 py-2 placeholder:text-gray-500 placeholder:text-sm border-b ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label="Name"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className={`w-full pl-3 pr-3 py-2 placeholder:text-gray-500 placeholder:text-sm border-b ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label="Email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile number*"
                    className={`w-full pl-3 pr-3 py-2 placeholder:text-gray-500 placeholder:text-sm border-b ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label="Phone"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mb-4 flex gap-2 items-start  justify-start">
                <input
                  type="checkbox"
                  name="check-box"
                  id="check-box"
                  className="h-8 w-8 rounded-md opacity-50"
                />
                
                <label htmlFor="check-box" className="text-[11px] text-gray-600 opacity-50">
                  I consent to the use of my provided data in accordance with
                  the{" "}
                  <a
                    href="https://pristine-kyra-vimannagar.in/User/privacy"
                    target="_blank"
                    contenteditable="false"
                    style={{ cursor: "pointer" }}
                  >
                    privacy policy
                  </a>{" "}
                </label>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-logoBlue hover:bg-gray-900 mb-10 transition-all duration-500 text-white w-fit font-bold py-[5px] px-10 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="text-white  md:rounded-none rounded-t-md  md:pr-14 py-5">
            <p className="md:text-[20px] text-[18px] pt-1 md:pt-0   md:pl-3 leading-[24px] font-bold text-center md:text-start text-white">
              Get Information  <span className="md:block"> On Availabilities</span>
            </p>
            <div className="pl-10 md:pl-3">
            {[" Available units", " Payment Plan", "Floor Plans"].map(
              (value, index) => {
                return (
                  <div key={index} className="flex mb-3 md:mb-5 gap-1 text-xl items-center">
                    <LiaCheckCircleSolid />
                    <p className="text-white m-0 text-base leading-[24px]">{value}</p>
                  </div>
                );
              }
            )}
            </div>
          </div>
        </div>
        <IoClose
          onClick={() => setIsPopUpOpen(false)}
          className="text-white  cursor-pointer font-bold text-2xl absolute  top-2 right-2"
        />
        <p className="md:flex hidden items-center  justify-center text-white my-3 gap-3">
          <IoCall /> +91 9699089259{" "}
        </p>
      </div>
    </div>
  );
};

export default PopUp;
