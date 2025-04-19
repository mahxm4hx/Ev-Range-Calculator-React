import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} EV Range Calculator. All rights reserved.
        </div>

        {/* Right Side - Links or Info */}
        <div className="flex space-x-4 text-sm">
          <a
            href="/Home"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Home
          </a>
          <a
            href="/About"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            About
          </a>
          <a
            href="/Contact"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
