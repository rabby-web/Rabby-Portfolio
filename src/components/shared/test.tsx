import React from "react";

const timelineData = [
  {
    title: "Event 1",
    date: "January 2023",
    description: "Description of the first event.",
  },
  {
    title: "Event 2",
    date: "March 2023",
    description: "Description of the second event.",
  },
  {
    title: "Event 3",
    date: "July 2023",
    description: "Description of the third event.",
  },
  {
    title: "Event 4",
    date: "September 2023",
    description: "Description of the fourth event.",
  },
];

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Timeline</h1>
      <div className="relative">
        {/* Vertical line in the center */}
        <div className="absolute w-1 left-1/2 transform -translate-x-1/2 h-full bg-gray-300 hidden md:block"></div>

        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`mb-10 flex flex-col md:flex-row items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Event marker */}
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-auto"></div>

            {/* Left or Right Block based on index */}
            <div
              className={`md:w-5/12 md:${
                index % 2 === 0 ? "pl-8" : "pr-8"
              } text-left md:text-${index % 2 === 0 ? "left" : "right"}`}
            >
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <span className="block text-sm text-gray-500">{event.date}</span>
            </div>

            {/* Description (single column on mobile) */}
            <div className="md:w-5/12 mt-4 md:mt-0">
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
