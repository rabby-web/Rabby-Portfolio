"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className="dark:bg-slate-800  dark:text-rose-600  border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">RABBY</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
              <Link href="/">Home</Link>
              <Link href="about">About</Link>
              <ModeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out dark:text-rose-600 hover:dark:text-rose-600 "
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
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
                className=" block px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
              >
                Home
              </Link>
              <Link
                className=" block px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                href="about"
              >
                About
              </Link>
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
