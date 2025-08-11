import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a
                href="#about"
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#training"
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Training
              </a>
            </li>

            {/* Career Dropdown */}
            <div className="relative group">
              <button
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                } font-medium focus:outline-none`}
              >
                Career
              </button>
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
                <a
                  href="#job-openings"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  ERPNext/Frappe Developer
                </a>
                <a
                  href="#internship"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  Frontend Developer
                </a>
              </div>
            </div>

            {/* Contact Dropdown */}
            <div className="relative group">
              <button
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                } font-medium focus:outline-none`}
              >
                Contact Us
              </button>
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 z-50">
                <a
                  href="#enquiry"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  Enquiry
                </a>
                <a
                  href="#tickets"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  Tickets
                </a>
                <a
                  href="#privacy"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#faq"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>

            <li>
              <a
                href="#blogs"
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#login"
                className={`${
                  scrolled
                    ? "text-gray-700 hover:text-white border hover:bg-blue-400 border-blue-400 backdrop-blur-sm px-8 py-2 rounded-full font-semibold transition-all"
                    : "text-white hover:text-gray-200 bg-white/10 border border-white/30 backdrop-blur-sm px-8 py-2 rounded-full font-semibold hover:bg-white/20 transition-all"
                }`}
              >
                <button>Login</button>
              </a>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } text-2xl`}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <ul className="space-y-6 font-medium text-gray-700">
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => setMenuOpen(false)}>
                  Products
                </a>
              </li>
              <li>
                <a href="#training" onClick={() => setMenuOpen(false)}>
                  Training
                </a>
              </li>
              <li>
                <a href="#career" onClick={() => setMenuOpen(false)}>
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#blogs" onClick={() => setMenuOpen(false)}>
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="border border-blue-400 px-6 py-2 rounded-full text-blue-500 font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
