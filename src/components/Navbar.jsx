import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/cartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItem } = useCartContext();

  return (
    <nav className="navbar shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <Link to={"/"}><div className="logo text-2xl font-bold text-blue-600">LOGO</div></Link>

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
          <Link to={"/"}>
            <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
              Home
            </li>
          </Link>
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            About Us
          </li>
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            Contact Us
          </li>
          <li className="py-2 lg:py-0 hover:text-blue-600 transition cursor-pointer">
            <Link to="/cart" className="relative">
              <IoCartOutline className="text-3xl" />
              <span className="absolute bottom-4 left-5 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {totalItem}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
