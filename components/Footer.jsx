import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between mb-6">
          {/* Company Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Company</h5>
            <ul>
              <li>
                <Link to="/AboutMe" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="" className="hover:underline">Careers</Link>
              </li>
              <li>
                <Link to="/AboutMe" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Customer Service</h5>
            <ul>
              <li>
                <Link to="" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="" className="hover:underline">Returns</Link>
              </li>
              <li>
                <Link to="" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="" className="hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="" className="text-white hover:text-gray-400" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="" className="text-white hover:text-gray-400" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="" className="text-white hover:text-gray-400" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Food Ordering Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
