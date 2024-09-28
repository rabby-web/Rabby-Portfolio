"use client";

import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./theme";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-white dark:bg-[#0B1221] dark:text-white text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className=" text-black dark:text-[#46EBC2]   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-registered"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" />
                  <path d="M14 15l-2 -2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-lg font-normal">
              <Link
                href="/"
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
                }`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`link ${
                  pathname === "/about"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
                }`}
              >
                About
              </Link>
              <Link
                href="project"
                className={`link ${
                  pathname === "/project"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
                }`}
              >
                Project
              </Link>
              <Link
                href="skill"
                className={`link ${
                  pathname === "/skill"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
                }`}
              >
                Skill
              </Link>
              <Link
                href="timeline"
                className={`link ${
                  pathname === "/timeline"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
                }`}
              >
                Timeline
              </Link>
              <Link
                href="contact"
                className={`link ${
                  pathname === "/contact"
                    ? "dark:text-rose-700 text-[#134699]"
                    : "dark:text-[#46EBC2] text-black"
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
              className="inline-flex items-center justify-center p-1 text-xl rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-150 ease-in-out dark:text-[#46EBC2] hover:dark:text-white "
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
              <Link
                href="/"
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md   dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out font-semibold text-lg"
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Home
              </Link>
              <Link
                href="about"
                className={`link ${
                  pathname === "/about"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md  font-semibold text-lg dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                About
              </Link>
              <Link
                href="project"
                className={`link ${
                  pathname === "/project"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md font-semibold text-lg  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Project
              </Link>
              <Link
                href="skill"
                className={`link ${
                  pathname === "/skill"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md font-semibold text-lg  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Skill
              </Link>
              <Link
                href="timeline"
                className={`link ${
                  pathname === "/timeline"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md font-semibold text-lg  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Timeline
              </Link>
              <Link
                href="contact"
                className={`link ${
                  pathname === "/contact"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md font-semibold text-lg  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                }`}
              >
                Contact
              </Link>
              <div
                className={`link ${
                  pathname === "/"
                    ? "dark:text-rose-700 text-blue-700 block px-3 py-2 rounded-md font-semibold text-lg  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
                    : "dark:text-[#46EBC2] text-black block px-3 py-2 rounded-md text-base font-medium  dark:hover:bg-gray-900 focus:outline-none dark:focus:bg-gray-700 hover:bg-gray-100  focus:bg-gray-200 transition duration-150 ease-in-out "
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
