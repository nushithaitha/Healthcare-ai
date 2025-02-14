import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-700">
        {/* Left Section - Logo & Description */}
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eligendi ut. Amet aperiam nostrum eum, debitis officiis iure repudiandae eveniet.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Diseases</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">support@example.com</li>
            <li className="hover:text-blue-500 cursor-pointer">+91 12345 67890</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t mt-10 pt-5 text-center text-sm text-gray-600">
        <p>© 2025 Nushith Aitha. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
