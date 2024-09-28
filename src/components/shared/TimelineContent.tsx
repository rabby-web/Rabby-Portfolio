// // import React from "react";

// // type Time = {
// //   date: string;
// //   title: string;
// //   description: string;
// //   isLeft: boolean;
// // };

// // const timelineData = [
// //   {
// //     id: 1,
// //     date: "2022-02-01",
// //     title: "Graduation Completed",
// //     description:
// //       "Marked a significant academic milestone by completing graduation.",
// //   },
// //   {
// //     id: 2,
// //     date: "2022-06-01",
// //     title: "Started Web Development",
// //     description:
// //       "Embarked on a web development journey, laying the foundation for a career in technology.",
// //   },
// //   {
// //     id: 3,
// //     date: "2023-01-01",
// //     title: "Became WordPress Developer",
// //     description:
// //       "Transitioned into a WordPress developer role and began freelancing, expanding expertise and professional reach.",
// //   },
// //   {
// //     id: 4,
// //     date: "2024-01-01",
// //     title: "Completed MERN Stack Course",
// //     description: `Successfully completed a comprehensive MERN stack course from <a class="underline text-teal-300 opacity-60" href="https://web.programming-hero.com/"
// //               target="_blank"
// //               rel="noopener noreferrer" >@Programming Hero</a>, enhancing full-stack development skills (June 1, 2023 - December 31, 2023).`,
// //   },
// //   {
// //     id: 5,
// //     date: "2024-02-01",
// //     title: "Joined Freelance Team",
// //     description:
// //       "Joined a freelance-based team as a Frontend Developer, contributing to dynamic web projects and further advancing technical abilities.",
// //   },
// // ];

// // const TimelineItem = ({ date, title, description, isLeft }: Time) => (
// //   <div
// //     className={`mb-8 flex justify-between w-full ${
// //       isLeft ? "md:flex-row-reverse" : ""
// //     }`}
// //   >
// //     <div className="order-1 hidden md:block md:w-5/12"></div>
// //     <div className="z-20 flex tems-center ml-px order-1 bg-custom-4 shadow-xl w-3 h-3 rounded-full"></div>
// //     <div className="order-1 w-11/12 md:w-5/12 p-6  rounded-md  bg-white bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
// //       <h3
// //         className={`mb-3 text-slate-400 text-sm ${
// //           isLeft ? "md:text-right" : ""
// //         }`}
// //       >
// //         {date}
// //       </h3>
// //       <h3
// //         className={`mb-2 text-slate-200 text-sm ${
// //           isLeft ? "md:text-right" : ""
// //         }`}
// //       >
// //         {title}
// //       </h3>
// //       <p
// //         className={`text-xs text-slate-400 text-opacity-100 ${
// //           isLeft ? "md:text-right" : ""
// //         }`}
// //         dangerouslySetInnerHTML={{ __html: description }}
// //       />
// //     </div>
// //   </div>
// // );

// // const TimelineContent = () => {
// //   return (
// //     <div className="container mx-auto w-full h-full">
// //       {/* <div className=" flex gap-5 items-center mb-8 max-w-xl">
// //         <h2 className="text-slate-200 font-semibold text-3xl">
// //           <span className="font-normal text-teal-300 text-2xl"> 03. </span> My
// //           Timeline
// //         </h2>{" "}
// //         <div className="bg-[#233554] h-[1px] flex-1" />
// //       </div>{" "} */}
// //       <div className="relative wrap overflow-hidden px-0 py-10 h-full">
// //         <div className=" absolute border-opacity-20 border-gray-300 h-full border ml-1.5 md:ml-0 md:left-1/2"></div>
// //         {timelineData.map((data, idx) => (
// //           <div key={data.id}>
// //             <TimelineItem {...data} isLeft={idx % 2 !== 0} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TimelineContent;
// import React from "react";

// type Time = {
//   date: string; // Use lowercase 'string'
//   title: string; // Use lowercase 'string'
//   description: string; // Use lowercase 'string'
//   isLeft: boolean; // Use lowercase 'boolean'
// };

// const timelineData = [
//   {
//     id: 1,
//     date: "2022-02-01",
//     title: "Graduation Completed",
//     description:
//       "Marked a significant academic milestone by completing graduation.",
//   },
//   {
//     id: 2,
//     date: "2022-06-01",
//     title: "Started Web Development",
//     description:
//       "Embarked on a web development journey, laying the foundation for a career in technology.",
//   },
//   {
//     id: 3,
//     date: "2023-01-01",
//     title: "Became WordPress Developer",
//     description:
//       "Transitioned into a WordPress developer role and began freelancing, expanding expertise and professional reach.",
//   },
//   {
//     id: 4,
//     date: "2024-01-01",
//     title: "Completed MERN Stack Course",
//     description: `Successfully completed a comprehensive MERN stack course from <a class="underline text-teal-300 opacity-60" href="https://web.programming-hero.com/"
//               target="_blank"
//               rel="noopener noreferrer" >@Programming Hero</a>, enhancing full-stack development skills (June 1, 2023 - December 31, 2023).`,
//   },
//   {
//     id: 5,
//     date: "2024-02-01",
//     title: "Joined Freelance Team",
//     description:
//       "Joined a freelance-based team as a Frontend Developer, contributing to dynamic web projects and further advancing technical abilities.",
//   },
// ];

// const TimelineItem = ({ date, title, description, isLeft }: Time) => (
//   <div
//     className={`mb-8 flex justify-between w-full ${
//       isLeft ? "md:flex-row-reverse" : ""
//     }`}
//   >
//     <div className="order-1 hidden md:block md:w-5/12"></div>
//     <div className="z-20 flex items-center ml-px order-1 bg-custom-4 shadow-xl w-3 h-3 rounded-full"></div>
//     <div className="order-1 w-11/12 md:w-5/12 p-6 rounded-md bg-white bg-opacity-[0.01] border border-white border-opacity-10 backdrop-blur-[10px]">
//       <h3
//         className={`mb-3 text-slate-400 text-sm ${
//           isLeft ? "md:text-right" : ""
//         }`}
//       >
//         {date}
//       </h3>
//       <h3
//         className={`mb-2 text-slate-200 text-sm ${
//           isLeft ? "md:text-right" : ""
//         }`}
//       >
//         {title}
//       </h3>
//       <p
//         className={`text-xs text-slate-400 text-opacity-100 ${
//           isLeft ? "md:text-right" : ""
//         }`}
//         dangerouslySetInnerHTML={{ __html: description }}
//       />
//     </div>
//   </div>
// );

// const TimelineContent = () => {
//   return (
//     <div className="container mx-auto w-full h-full">
//       {/* <div className=" flex gap-5 items-center mb-8 max-w-xl">
//         <h2 className="text-slate-200 font-semibold text-3xl">
//           <span className="font-normal text-teal-300 text-2xl"> 03. </span> My
//           Timeline
//         </h2>{" "}
//         <div className="bg-[#233554] h-[1px] flex-1" />
//       </div>{" "} */}
//       <div className="relative wrap overflow-hidden px-0 py-10 h-full">
//         <div className="absolute border-opacity-20 border-gray-300 h-full border ml-1.5 md:ml-0 md:left-1/2"></div>
//         {timelineData.map((data, idx) => (
//           <div key={data.id}>
//             <TimelineItem {...data} isLeft={idx % 2 !== 0} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TimelineContent;
