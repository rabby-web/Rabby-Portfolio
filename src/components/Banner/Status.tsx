import React from "react";
import { FaCodeCommit } from "react-icons/fa6";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="flex gap-16 mt-5">
      <div>
        <div className="flex items-center gap-3">
          <FaCodeCommit className="text-xl font-semibold text-rose-600" />
          <p>
            Total Commit:{" "}
            <span className="text-[#61DAFB] font-semibold">1500 +</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <RiGitRepositoryCommitsFill className="text-xl font-semibold text-rose-600" />
          <p>
            Total Repository:{" "}
            <span className="text-[#61DAFB] font-semibold">100 +</span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex  items-center gap-3">
          <FaArrowTrendUp className="text-xl font-semibold text-rose-600" />
          <p>
            Longest Streak:{" "}
            <span className="text-[#61DAFB] font-semibold">25day +</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaProjectDiagram className="text-xl font-semibold text-rose-600" />
          <p>
            Total Project:{" "}
            <span className="text-[#61DAFB] font-semibold">15 +</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
