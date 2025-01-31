import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-blue-600">LOGO</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-sm text-gray-500">@Lorem</p>
          </div>

          {/* About Us Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info and Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+908 89097 890</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <FaFacebookF className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <FaInstagram className="text-pink-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <FaTwitter className="text-blue-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <FaLinkedinIn className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
          Copyright © 2021 Lorem All rights reserved
        </div>
      </motion.div>
    </footer>
  );
}
