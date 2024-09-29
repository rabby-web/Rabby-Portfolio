import React from "react";
import TimelineContent from "./TimelineContent";
// import TimelineContent from "./TimelineContent";

const TimelinePage = () => {
  return (
    <div className="">
      <div className="md:h-[68rem] h-[75rem] w-full dark:bg-[#0B1120]  dark:bg-grid-white/[0.02] bg-grid-black/[0.02]">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="md:px-5 px-2">
            <div className="text-2xl font-semibold text-dark-01 dark:text-dark-03 flex items-baseline gap-1 p-3 mt-10 mb-4">
              <div className="text-[#3CD1B8]">Timeline</div>
              <div className="w-48 border border-[#3CD1B8]"></div>
            </div>
            <div>
              <TimelineContent></TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
