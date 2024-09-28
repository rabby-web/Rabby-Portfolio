import Image from "next/image";
import React from "react";
import pI from "../../../assets/icon/pp.jpg";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoIosDocument } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div className="max-w-sm border rounded overflow-hidden shadow-lg ">
        <Image
          className="w-full"
          src={pI}
          alt="Sunset in the mountains"
          height={180}
        ></Image>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-[#3CD1B8]">
            The Coldest Sunset
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla!
          </p>
        </div>
        <div className="flex justify-between items-center  px-3 pt-2 pb-2">
          <div className="flex gap-3">
            <Link href="coming">
              <FaGithub className="text-cyan-400 text-2xl" />
            </Link>
            <Link href="coming">
              <TbWorldWww className="text-cyan-400 text-2xl" />
            </Link>
            <Link href="coming">
              <IoIosDocument className="text-cyan-400 text-2xl" />
            </Link>
          </div>
          <div>
            <Link
              href="coming"
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium text-sm px-3 py-2 text-center me-2 mb-2 rounded-xl flex justify-center items-center gap-2"
            >
              Details <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
