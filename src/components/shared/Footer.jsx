import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#014fa7] text-white px-6 py-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-10">
        {/* Logo */}
        <div className="md:col-span-1">
          <h1 className="text-white text-2xl font-bold">3L Tech</h1>
        </div>

        {/* Link Columns */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Product</h3>
            <ul className="space-y-1">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media + Newsletter */}
      <div className="max-w-6xl mx-auto py-10 flex flex-col  md:flex-row items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="hover:text-white text-xl"><FaFacebookF /></a>
          <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
          <a href="#" className="hover:text-white text-xl"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white text-xl"><FaYoutube /></a>
        </div>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row sm:items-center gap-4 ">
          <input
            type="email"
            placeholder="Your email address"
            className="w-[350px] md:w-[400px] flex-1 px-4 py-2 rounded-md text-black bg-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Divider */}
      <hr className="border-white mb-6 max-w-6xl mx-auto" />

      {/* Bottom Text */}
      <div className="text-center text-sm text-white">
        © 2020 - 2025 3L Technologies and Innovation. All rights reserved.
      </div>
    </footer>
  );
}
