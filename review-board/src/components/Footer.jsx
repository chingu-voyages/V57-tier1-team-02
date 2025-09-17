import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 py-4 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        {/* Links */}
        <div className="flex space-x-4">
          <a href="/about" className="text-sm text-gray-700 hover:underline">
            About
          </a>
          <a href="/contact" className="text-sm text-gray-700 hover:underline">
            Contact
          </a>
          <a href="/privacy" className="text-sm text-gray-700 hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-700">
          © {year} MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
