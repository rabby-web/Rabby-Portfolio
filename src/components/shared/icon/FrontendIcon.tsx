import Image from "next/image";
import { icons } from "../data/proficiencyData";
import { FaAngleRight } from "react-icons/fa";
// import { icons } from "lucide-react";

const FrontendIcon = () => {
  const frontendIcon = icons.filter((icon) => icon.category === "frontend");
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
            <h2 className="text-lg pt-3 text-[#3CD1B8] hover:text-rose-600">{icon.name}</h2>
            <p className="hidden absolute top-full  -mt-60 text-base text-blue-700 group-hover:block bg-white p-2 border  rounded-xl dark:bg-[#0B1120]">
              <span className="bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {icon.title}
              </span>

              <button
                type="button"
                className="text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-xl text-sm px-3 py-2 text-center me-2 mb-2 mt-3 flex justify-center items-center gap-1 w-full mx-auto"
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

export default FrontendIcon;
