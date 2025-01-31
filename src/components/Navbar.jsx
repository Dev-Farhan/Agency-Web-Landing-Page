import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 md:py-7">
        <div className="font-bold text-[#1090CB] uppercase">
          <a href="/" className="md:text-xl">
            Logo
          </a>
        </div>
        <div className="text-bold lg:hidden">
          <GiHamburgerMenu color="#1090CB" onClick={() => setIsOpen(true)} />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-blue-800 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-50 text-white`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-2xl z-30"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-5 text-lg">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <button className="bg-white text-black px-4 py-3 rounded-lg">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us{" "}
              </Link>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-20">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`relative hover:text-[#1090CB] cursor-pointer ${
                  location.pathname === item.path ? "text-[#1090CB] " : ""
                }`}
              >
                {/* Green Circle for Active Route */}
                {location.pathname === item.path && (
                  <span className="absolute -left-3 top-1/5 transform -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
            <button className="bg-[#1090CB] text-white px-4 py-2 rounded-lg">
              <Link to="/contact">Contact Us</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
