import Image from "next/image";
import { icons } from "../data/proficiencyData";
import { FaAngleRight } from "react-icons/fa";

const ToolsIcon = () => {
  const frontendIcon = icons.filter((icon) => icon.category === "tools");
  return (
    <div>
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-3 ">
        {frontendIcon?.map((icon) => (
          <div
            key={icon.id}
            className="w-full p-6 border rounded-xl text-center flex flex-col justify-center items-center relative group"
          >
            <Image
              src={icon.image}
              width={45}
              height={45}
              alt={icon.name}
            ></Image>
            <h2 className="text-lg pt-3 text-[#3CD1B8] hover:text-rose-600">
              {icon.name}
            </h2>
            <p className="hidden absolute top-full -mt-72 text-base text-blue-700 group-hover:block bg-white p-3 border  rounded-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {icon.title}
              </span>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3 flex justify-center items-center gap-1"
              >
                Explore More
                <FaAngleRight />
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsIcon;
