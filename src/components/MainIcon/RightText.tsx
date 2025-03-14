import Link from "next/link";
import React from "react";

const RightText = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center gap-3 text-lg">
        <div className="rotate-90 mb-40 hover:text-[#4ca1e7]">
          <Link href="mailto:rabby.webdeveloper@gmail.com" target="_blank">
            {" "}
            rabby.webdeveloper@gmail.com
          </Link>
        </div>
        <div className="w-0 h-32 border border-[#3CD1B8] hover:border-[#4ca1e7]"></div>
      </div>
    </div>
  );
};

export default RightText;
