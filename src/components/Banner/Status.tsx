import React from "react";
import { FaCodeCommit } from "react-icons/fa6";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-16 mt-5 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex  gap-3">
          <FaCodeCommit className="text-xl font-semibold text-rose-600" />
          <p>
            Total Commit:{" "}
            <span className="text-[#61DAFB] font-semibold">1500 +</span>
          </p>
        </div>
        <div className="flex   gap-3">
          <FaArrowTrendUp className="text-xl font-semibold text-rose-600" />
          <p>
            Longest Streak:{" "}
            <span className="text-[#61DAFB] font-semibold">35d +</span>
          </p>
        </div>
        <div className="flex   gap-3">
          <FaProjectDiagram className="text-xl font-semibold text-rose-600" />
          <p>
            Total Project:{" "}
            <span className="text-[#61DAFB] font-semibold">20 +</span>
          </p>
        </div>

        <div className="flex   gap-3">
          <RiGitRepositoryCommitsFill className="text-xl font-semibold text-rose-600" />
          <p>
            Total Repository:{" "}
            <span className="text-[#61DAFB] font-semibold">100 +</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
