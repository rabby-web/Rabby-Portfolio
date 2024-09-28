import React from "react";

const RightText = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center gap-3 text-xl">
        <div className="rotate-90 mb-40 hover:text-rose-600">
          <a href="mailto: rabby.webdeveloper@gmail.com" target="_blank">
            {" "}
            rabby.webdeveloper@gmail.com
          </a>
        </div>
        <div className="w-0 h-32 border border-[#3CD1B8] hover:border-rose-600"></div>
      </div>
    </div>
  );
};

export default RightText;
