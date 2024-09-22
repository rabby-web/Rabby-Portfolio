"use client";

import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
// import {
//   AiOutlineHome,
//   AiOutlineInfoCircle,
//   AiOutlineRead,
//   AiOutlineContacts,
// } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./theme";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const menuItems = [
  //   { name: "Home", icon: <AiOutlineHome /> },
  //   { name: "About", icon: <AiOutlineInfoCircle /> },
  //   { name: "Blog", icon: <AiOutlineRead /> },
  //   { name: "Contact Us", icon: <AiOutlineContacts /> },
  // ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white dark:bg-dark-bg-08 dark:text-white text-black sticky top-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="rounded-full border border-black dark:border-white hover:border-blue-700 hover:dark:border-rose-700  p-3">
                ???
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-xl font-medium">
              {/* {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              ))} */}
              <Link
                href="/"
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-blue-700"
                    : "dark:text-white text-black "
                }`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`link ${
                  pathname === "/about"
                    ? "dark:text-rose-700 text-blue-600"
                    : "dark:text-white text-black"
                }`}
              >
                About
              </Link>
              <Link
                href="about"
                className={`link ${
                  pathname === "/contact"
                    ? "dark:text-rose-700 text-blue-600"
                    : "dark:text-white text-black"
                }`}
              >
                Contact
              </Link>
              <ModeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1 text-xl rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-150 ease-in-out dark:text-white hover:dark:text-white "
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaAlignRight />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                  aria-label={item.name}
                >
                  <span className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </span>
                </a>
              ))} */}
              <Link
                href="/"
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-white text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`link ${
                  pathname === "/about"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-white text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                About
              </Link>
              <div
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-white text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
