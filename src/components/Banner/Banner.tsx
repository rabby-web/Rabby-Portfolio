"use client";

import IconAnimation from "./Animation/IconAnimation";
// import { IconCloudDemo } from "./BannerIcon";
import BannerText from "./BannerText";

const Banner = () => {
  return (
    <div className="">
      <div className=" absolute left-[14%] top-96 hidden  rounded-3xl bg-sky-800 opacity-40 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      <div className="md:h-[45rem] lg:h-[56rem] h-[46rem] w-full dark:bg-[#0B1120]  dark:bg-grid-white/[0.04] bg-grid-black/[0.04]">
        {/* Radial gradient for the container to give a faded look */}
        <div className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="lg:mt-20 md:mt-12">
            {/* grid */}
            <div className="flex flex-col-reverse md:flex md:flex-row items-center py-2 md:px-6 px-0">
              <div className="flex-1 text-center md:text-left space-y-2">
                <BannerText></BannerText>
              </div>
              <div className="flex-1  md:ml-16 lg:ml-32">
                <IconAnimation></IconAnimation>
                {/* <IconCloudDemo></IconCloudDemo> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// [#081018] [#0B1120]
