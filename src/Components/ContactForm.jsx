import React from "react";
import Navbar from "./Navabar";

const ContactForm = () => {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-black flex flex-col items-center justify-center px-1 mt-0">
      <div className="text-center mt-0">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
      </div>

      <form className="bg-black mt-1 w-full max-w-md space-y-2">
        <div>
          <label className="text-white block mb-1">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full p-3 bg-white text-black rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white block mb-1">Mobile</label>
          <input
            type="tel"
            placeholder="Enter mobile"
            className="w-full p-3 bg-white text-black rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white block mb-1">Message</label>
          <textarea
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 bg-white text-black rounded-md focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500"
        >
          Submit →
        </button>
      </form>
    </div>
   </>
  );
};

export default ContactForm;
