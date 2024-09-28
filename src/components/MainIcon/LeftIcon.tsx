import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";

const LeftIcon = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center gap-3 text-2xl">
        <h2>
          <FaGithub className="text-[#3CD1B8] hover:text-[#4df978]" />
        </h2>
        <h2>
          <FaLinkedin className="text-[#3CD1B8] hover:text-[#4df978]" />
        </h2>
        <h2>
          <FaTwitter className="text-[#3CD1B8] hover:text-[#4df978]" />
        </h2>
        <h2>
          <FaWhatsappSquare className="text-[#3CD1B8] hover:text-[#4df978]" />
        </h2>
        <div className="w-0 h-32 border border-[#3CD1B8] hover:border-[#4df978]"></div>
      </div>
    </div>
  );
};

export default LeftIcon;
