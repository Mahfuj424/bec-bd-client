"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaNewspaper,
  FaGraduationCap,
  FaUserTie,
  FaFileAlt,
  FaUniversity,
  FaLaptopCode,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const date = new Date();
  const currentYear = date.getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-[#0f1033] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About BEC */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <div className="flex items-center mb-4">
              <Image
                src="/logo/logo.png"
                alt="Bangladesh Engineers Council Logo"
                width={120}
                height={80}
                className="rounded-md"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Bangladesh Engineers Council (BEC), is an association in
              Bangladesh that represents professional engineers.
            </p>
            <Link
              href="/about"
              className="text-green-500 hover:text-green-400 flex items-center text-sm"
            >
              Read More <FaArrowRight className="ml-1 text-xs" />
            </Link>

            <div className="flex space-x-3 mt-6">
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaFacebookF size={14} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaInstagram size={14} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter size={14} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaEnvelope size={14} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedinIn size={14} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Important Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6 relative">
              IMPORTANT LINKS
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaGlobe className="mr-2 text-green-600" />
                  Bangladesh Computer Council
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaUniversity className="mr-2 text-green-600" />
                  Institution of Engineering Bangladesh
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaLaptopCode className="mr-2 text-green-600" />
                  Bangladesh Hi-Tech Park Authority
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaLaptopCode className="mr-2 text-green-600" />
                  Information Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaGlobe className="mr-2 text-green-600" />
                  Bangladesh National Portal
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6 relative">
              CONTACT US
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-600 mt-1 mr-3" />
                <p className="text-gray-300 text-sm">
                  Moulana Bhasani Road, Dhaka 1212
                </p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-green-600 mt-1 mr-3" />
                <p className="text-gray-300 text-sm">becinfo@gmail.com</p>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-green-600 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300 text-sm">01711505391 (Office)</p>
                  <p className="text-gray-300 text-sm">01832363937 (Office)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter (replacing Location) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6 relative">
              NEWSLETTER
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-600 -mb-2"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates on the latest news,
              events, and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>

            <div className="mt-4">
              <h4 className="text-white font-medium mb-2">Quick Links:</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaCalendarAlt className="mr-1 text-green-600" />
                  Events
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaNewspaper className="mr-1 text-green-600" />
                  News
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaGraduationCap className="mr-1 text-green-600" />
                  Training
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaUserTie className="mr-1 text-green-600" />
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaFileAlt className="mr-1 text-green-600" />
                  Publications
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-green-500 flex items-center text-sm"
                >
                  <FaUniversity className="mr-1 text-green-600" />
                  Resources
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src="/footer/payment.png"
                  alt="Visa"
                  width={200}
                  height={30}
                />
              </div>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              Copyright {currentYear} ©BEC | All Right Reserved | Designed &
              Developed By{" "}
              <Link
                href="https://www.linkedin.com/in/mahfujalam1"
                target="_blank"
                className="text-green-500 hover:text-green-400"
              >
                Mahfuj Alam
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
