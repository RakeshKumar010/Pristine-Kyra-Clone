import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // if using react-router for navigation
import { MyContext } from "../../../App";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { contact } = useContext(MyContext);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // for redirection after form submission

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "Phone number must be numeric";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let body = `
        <b>Site : </b> Pristine Kyra Viman Nagar
        <br>
        <b>Name : </b>${formData.name}
        <br>
        <b>Phone : </b>${formData.phone}
        <br>
        <b>Email : </b>${formData.email}
        <br>

      `;

      Email.send({
        SecureToken: "65ce8895-1185-41ed-ac43-74e86d9d15e1",
        From: "guptanikhi25@gmail.com",
        To: "guptanikhi25@gmail.com",
        Subject: "Details from  Pristine Kyra Viman Nagar",
        Body: body,
      }).then((message) => {
        if (message === "OK") {
          setFormData({
            name: "",
            email: "",
            phone: "",
          });
          navigate("/thank-you");
        } else {
          alert(message);
        }
      });
    }
  };

  return (
    <section ref={contact} className=" relative mb-10  md:px-5  2xl:px-40">
      <div className="container mx-auto px-5 mt-10">
        <div className="mb-12 text-center">
          <h2>Get In Touch</h2>
        </div>

        <div className="mx-auto w-full">
          <form onSubmit={handleSubmit} className="space-y-5 text-center">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                className="border-[1px] border-gray-300 w-full p-2"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
              />
              <input
                className="border-[1px] border-gray-300 w-full p-2"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number*"
              />
            </div>
            <div className="grid md:grid-cols-2  gap-5">
              <input
                className="border-[1px] border-gray-300 w-full p-2"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail*"
              />
            </div>
            <button className="text-center px-10 mx-auto rounded-md bg-logoBlue text-white py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
