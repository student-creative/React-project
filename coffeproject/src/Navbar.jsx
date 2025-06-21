import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white" data-aos="fade-down">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-white">KOPPE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold items-center">
          <li>
            <Link to="/" className="text-white hover:text-orange-500 transition duration-200 no-underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-orange-500 transition duration-200 no-underline">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-orange-500 transition duration-200 no-underline">Services</Link>
          </li>
          <li>
            <Link to="/menu" className="text-white hover:text-orange-500 transition duration-200 no-underline">Menu</Link>
          </li>

          <li className="relative flex flex-col items-center">
            <button onClick={toggleDropdown} className="text-white hover:text-orange-500 transition duration-200 focus:outline-none">Pages</button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-black bg-opacity-90 rounded-md shadow-md px-6 py-3 z-50 flex flex-col items-center w-48">
                <Link to="/pages/Reservation" className="text-white py-2 w-full text-center hover:bg-orange-500 rounded-md transition no-underline" onClick={() => setDropdownOpen(false)}>Reservation</Link>
                <Link to="/pages/Testimonial" className="text-white py-2 w-full text-center hover:bg-orange-500 rounded-md transition no-underline" onClick={() => setDropdownOpen(false)}>Testimonial</Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="text-white hover:text-orange-500 transition duration-200 no-underline">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-4 font-semibold text-white">
          <Link to="/" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Services</Link>
          <Link to="/menu" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Menu</Link>

          <button onClick={toggleDropdown} className="block w-full text-left text-white hover:text-orange-400 focus:outline-none">
            Pages
          </button>

          {dropdownOpen && (
            <div className="pl-4 space-y-2">
              <Link to="/pages/Reservation" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Reservation</Link>
              <Link to="/pages/Testimonial" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Testimonial</Link>
            </div>
          )}

          <Link to="/contact" className="block text-white hover:text-orange-400 no-underline" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
