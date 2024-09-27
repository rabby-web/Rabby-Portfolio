import React from "react";

const BannerText = () => {
  return (
    <div>
     
      <h4 className="text-dark-01 dark:text-white">Hello, this is</h4>
        <h2 className="text-dark-03 text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Zulkar Naeem Rabby
        </h2>
        <h2 className="dark:text-white text-3xl font-semibold">
          And Im{" "}
          <span className="dark:text-[#61DAFB] text-[#134699]">
            Full Stack Web-Developer
          </span>
        </h2>
        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
          <a
            href="#_"
            className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-xl shadow-2xl group mt-6"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#2168D2] rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#4BBADE] rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#6785DC] rounded-full blur-md"></span>
            </span>
            <span
              aria-label="about me"
              className="relative text-white hover:text-purple-800 text-xl"
            >
              About Me
            </span>
          </a>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-xl shadow-2xl group mt-6"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#2168D2] rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#4BBADE] rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#6785DC] rounded-full blur-md"></span>
            </span>
            <span
              aria-label="about me"
              className="relative text-white hover:text-purple-800 text-xl"
            >
              Download Resume
            </span>
          </a>
        </div>
    </div>
  );
};

export default BannerText;
