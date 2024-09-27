import React from "react";
import Tabs from "./icon/Tabs";
// import Tabs from "./Tabs";

const SkillPage = () => {
  return (
    <div>
      <div className="md:h-[61rem] h-[95rem] w-full dark:bg-[#0E1628] bg-white  dark:bg-dot-white/[0.06] bg-dot-black/[0.06] ">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="md:px-5 px-2">
            <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 mt-10 mb-4">
              <div className="text-[#3CD1B8]">My Skills</div>
              <div className="w-48 border border-[#3CD1B8]"></div>
            </div>
            <Tabs></Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
