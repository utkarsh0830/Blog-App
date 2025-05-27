import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        <ul className="flex justify-center gap-6 mt-4 text-sm">
          <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
