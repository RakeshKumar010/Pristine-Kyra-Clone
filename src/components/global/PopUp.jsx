import React, { useState, useEffect, useContext } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

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
      <div className="relative z-10 w-full max-w-md">
        <form
          id="enquiry-form"
          onSubmit={handleEmailSend}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 transition-all duration-1000 ease-in-out transform "
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Enquiry Form
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                id="name"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Name"
              />
            </div>
           
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Email"
              />
            </div>
            
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Phone"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className={`w-full pl-10 pr-3 py-2 rounded-md border ${errors.message ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Message"
              />
            </div>
           
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-logoBlue hover:bg-gray-900 transition-all duration-500 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
        <IoCloseCircle onClick={() => setIsPopUpOpen(false)} className="text-white right-1/2 translate-x-1/2 cursor-pointer text-4xl absolute -top-10 md:-top-8 md:-right-8" />
      </div>
    </div>
  );
};

export default PopUp;
