import React from "react";
import Tabs from "./icon/Tabs";
// import Tabs from "./Tabs";

const SkillPage = () => {
  return (
    <div>
      <div className="md:h-[56rem] h-[100rem] w-full dark:bg-[#13161A] bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.1] ">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="md:px-5 px-2">
            <Tabs></Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
