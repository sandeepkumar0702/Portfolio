import React, { useState } from "react";
import Navbar from "./Navabar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", mobile: "", message: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      setFormData({ email: "", mobile: "", message: "" });
      setErrors({ email: "", mobile: "", message: "" });
    } else {
      toast.error("Please fill all fields correctly!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-2 py-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        <form className="w-full max-w-md space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email"
              className={`w-full p-3 bg-white text-black rounded-md focus:outline-none
              }`}
            />
            {errors.email && (
              <p className="text-red-700 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-white block mb-1">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile"
              className={`w-full p-3 bg-white text-black rounded-md focus:outline-none
              }`}
            />
            {errors.mobile && (
              <p className="text-red-700 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label className="text-white block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className={`w-full p-3 bg-white text-black rounded-md focus:outline-none
              }`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-md font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500"
          >
            Submit →
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
