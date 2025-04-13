import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>

          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">Case Studies</li>
            <li className="hover:text-gray-400 cursor-pointer">Testimonials</li>
            <li className="hover:text-gray-400 cursor-pointer">Recent Work</li>
            <li className="hover:text-gray-400 cursor-pointer">Get in Touch</li>
          </ul>

          <button
            className="md:hidden bg-gray-700 px-4 py-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-2  w-full text-center py-1">
            <li className="py-1 hover:bg-gray-700">Home</li>
            <li className="py-1 hover:bg-gray-700">Case Studies</li>
            <li className="py-1 hover:bg-gray-700">Testimonials</li>
            <li className="py-1 hover:bg-gray-700">Recent Work</li>
            <li className="py-1 hover:bg-gray-700">Get in Touch</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
