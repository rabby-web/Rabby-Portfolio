"use client";
import { useState } from "react";
// import Banner from "./Banner";
import AllIcons from "./AllIcons";
import FrontendIcon from "./FrontendIcon";
import BackendIcon from "./BackendIcon";
import ToolsIcon from "./ToolsIcon";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "All", content: <AllIcons /> },
    { id: 1, title: "Frontend", content: <FrontendIcon /> },
    { id: 2, title: "Backend", content: <BackendIcon /> },
    { id: 3, title: "Tools", content: <ToolsIcon /> },
  ];

  return (
    <div className="w-full  mx-auto mt-10">
      {/* Tabs Header */}
      <div className="flex justify-center ">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-xl font-semibold transition-colors ${
              activeTab === index
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default Tabs;
