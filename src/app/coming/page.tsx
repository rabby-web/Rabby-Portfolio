import Image from "next/image";
import React from "react";
import comingImage from "../../assets/icon/come.jpg";

const Coming = () => {
  return (
    <div className="bg-black h-screen">
      <div className="w-[100%] mx-auto pb-24">
        <Image
          src={comingImage}
          width={1000}
          height={500}
          alt="not found page"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Coming;
