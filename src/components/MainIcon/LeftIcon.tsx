import Link from "next/link";
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
          <Link href="https://github.com/rabby-web" target="_blank">
            <FaGithub className="text-[#3CD1B8] hover:text-[#4ca1e7]" />
          </Link>
        </h2>
        <h2>
          <Link href="https://www.linkedin.com/in/rabby-web/" target="_blank">
            <FaLinkedin className="text-[#3CD1B8] hover:text-[#4ca1e7]" />
          </Link>
        </h2>
        <h2>
          <Link href="https://x.com/RabbyNaeem29188" target="_blank">
            <FaTwitter className="text-[#3CD1B8] hover:text-[#4ca1e7]" />
          </Link>
        </h2>
        <h2>
          <Link
            href="https://api.whatsapp.com/qr/L24M5IMTLMJDB1?autoload=1&app_absent=0"
            target="_blank"
          >
            <FaWhatsappSquare className="text-[#3CD1B8] hover:text-[#4ca1e7]" />
          </Link>
        </h2>
        <div className="w-0 h-32 border border-[#3CD1B8] hover:border-[#4ca1e7]"></div>
      </div>
    </div>
  );
};

export default LeftIcon;
