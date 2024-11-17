import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="logo text-2xl font-bold text-blue-600">
          LOGO
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="hamburger block lg:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:static bg-white w-full lg:w-auto left-0 top-full lg:flex lg:gap-8 items-center text-gray-700 text-lg p-6 lg:p-0 shadow-md lg:shadow-none transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            Home
          </li>
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            About Us
          </li>
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
