import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Site Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Event Explorer</h2>
          <p className="text-sm text-gray-400">
            Delivering trusted services with quality and care. Join us for a seamless experience.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-gray-300 transition duration-200">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300 transition duration-200">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tasnimul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
